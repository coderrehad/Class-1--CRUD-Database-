// Application Configuration
const express = require('express');
const app = new express();
const router = require('./src/Routes/api');
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(express.json());

// Mongo DB Database Connection
let URI="mongodb://127.0.0.1:27017/CRUD";
    
    mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => {
      console.error(err);
    });

// Application Routes
app.use('/api/v1',router);



module.exports = app;