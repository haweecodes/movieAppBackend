const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/index'); // Imports routes for the products
const app = express();
const mongoose = require('mongoose')
const dbConfig = require('./config/index')
mongoose.connect(dbConfig.url)
mongoose.Promise = global.Promise
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', user);
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});