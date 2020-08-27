var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const dbConfig = require('./config/database.config.js');
// Connecting to the database 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


const User = require('./api/models/user_model');


const routes = require('./api/routes/router');


app.get('/',function(req,res){
    res.json({message:'This was created using @prkhrv/api-cli'});
});
app.use('/api',routes);


app.listen(port);

console.log(" REST API server Started on "  +port);


module.exports = app;
