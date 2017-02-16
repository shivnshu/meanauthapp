const express = require('express');
const router = express.Router();

// Register
router.get('/register', function(req, res, next){
    res.send('REGISTER');
});

// Authenticate
router.post('/authenticate', function(req, res, next){
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', function(req, res, next){
    res.send('PROFILE');
});

// Validate
router.get('/validate', function(req, res, next){
    res.send('Vcd ALIDATE');
});


module.exports = router;
