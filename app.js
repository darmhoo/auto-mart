const bodyParser = require('body-parser');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const ordersRouter = require('./routes/orders');
// const carsRouter = require('./routes/cars');
// const flagRouter = require('./routes/flags');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/auth/', usersRouter);
// app.use('/api/v1/car/', carsRouter);
// app.use('/api/v1/order/', ordersRouter);
// app.use('/api/v1/flag/', flagRouter);
module.exports = app;
