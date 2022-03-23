import express from 'express';
import { Router, Request, Response } from 'express';
import cors from 'cors';

// defining constants and variables
const route = Router();
const mongoose = require('mongoose');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let path = require('path');



const indexRoute = require('./routes/index');
const tradesRoute = require('./routes/trades');
const postRoute = require('./routes/post');

// this will add the .env database configuration with host, user and password for mongodb
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

// now this will make the mongodb connection
mongoose.connect(mongoString);
// and assign to the const database the connection that was made
const database = mongoose.connection;

// now verify if the connection was successful or not
database.on('error', (error: any) => {
   console.log(error);
})

// and if the connection was successful, then celebrate with a console log

database.once('connected', () => {
   console.log("[DATABASE] Successfully connected!")
});


// create express app
let app = express();
let appws = require('express-ws-routes')();

const allowedOrigins = ['http://localhost:3000', '*']

const options: cors.CorsOptions = {
   origin: allowedOrigins
};

// using cors for the express app to allow cross origin resource sharing
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setting max listeners because of the websocket (i got this error: "Max listeners exceeded.")
app.setMaxListeners(0);


// routers
app.use('/', indexRoute);
app.use('/trades', tradesRoute);
app.use('/post', postRoute);


app.use(route);

// defining port
const PORT = 9000;




app.listen(PORT, () => `[SERVER] Running on port ${PORT}`);