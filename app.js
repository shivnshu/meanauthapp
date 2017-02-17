const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');

const app = express();

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function(){
    console.log('Connected to database ' + config.database);
});

// On connection error
mongoose.connection.on('error', function(err){
    console.log('Database error: ' + err);
});

const port = 3000;

// Cors Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', function(req, res){
    res.send('Invalid Endpoint');
});

app.listen(port, function() {
    console.log('Server started on port ' + port);
});
