
let mongoose = require('mongoose');

let Post = mongoose.model('Post', {
    title: String,
    body: String
});

module.exports = Post;
