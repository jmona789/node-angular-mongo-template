//require npm packages
require('dotenv').config()
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bcrypt = require('bcryptjs');
var session = require('express-session');
var bodyParser = require('body-parser');

// set up our port

var PORT = process.env.PORT || 9001;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//pass our application and passport into our routes
require('./routes')(app);
 

//***DB connection***
mongoose.connect(process.env.MONGODB_URI, function(err){
    if (err) {
        console.log(err);
    }else {
        console.log('connected to db');
    }
});

//start server and console log on connection
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
}); 