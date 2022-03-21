import express from 'express';
import { Router, Request, Response } from 'express';
const route = Router();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var path = require('path');


const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const usersRoute = require('./routes/users');
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


let app = express();

const allowedOrigins = ['http://localhost:3000', 'http://35.198.44.247:3000']
// @ts-ignore weird namespace error
const options: cors.CorsOptions = {
   origin: allowedOrigins
};


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// routers
app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/users', usersRoute);
app.use('/post', postRoute);








app.use(route);
const PORT = 9000;




app.listen(PORT, () => `[SERVER] Running on port ${PORT}`);