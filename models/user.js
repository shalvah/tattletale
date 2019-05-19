const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

// authenticate input against database
UserSchema.statics.authenticate = async function (email, password) {
  const user = await User.findOne({ email }).exec();
  if (!user) {
    return null;
  }
  const result = await bcrypt.compare(password, user.password);
  if (result === true) {
    return user;
  }
  return null;
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema,
  User,
};
