require('dotenv').config();

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const { authMiddleware } = require('./middlewares/auth-middleware');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authMiddleware);
app.use('/', index);

mongoose.connect('mongodb://localhost/tattletale');
const db = mongoose.connection;
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db,
    }),
    cookie: {
      // one hour
      maxAge: new Date(Date.now() + (60 * 1000 * 60)),
      path: '/',
    },
  }));
module.exports = app;
