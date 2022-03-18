import express from 'express';
import { Router, Request, Response } from 'express';
const app = express();
const route = Router();
app.use(express());
const mongoose = require('mongoose');

const indexRoute = require('./routes/index');


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

app.use('/', indexRoute);

/**
route.get('/', (req: Request, res: Response) =>  {
   res.send('Olá mundo!');

});
 */

route.get('/users', (req: Request, res: Response) => {
   res.send("Users");
});



app.use(route);

const PORT = 3333;

app.listen(PORT, () => `[SERVER] Running on port ${PORT}`);