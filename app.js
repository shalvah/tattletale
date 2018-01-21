const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

require('mongoose').connect('mongodb://localhost/tattletale');
module.exports = app;
