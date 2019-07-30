const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoURI = require('./config/keys').mongoURI
mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log('Mongodb connected'))
.catch(err => console.log('Erro during mongodb connection :', err) )
//Middlewares

app.use ( express.static('build') )
module.exports = app
