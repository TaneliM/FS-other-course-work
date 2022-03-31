const express = require('express');
const router = express.Router();
const Users = require("../../models/Users");

// Get a list of users
router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
    
});

// Get a single user
router.get('/:username', (req, res) => {
    Users.findOne({name: req.params.username}, (err, user) => {
        if (err) throw err;
        if (user) {
            res.json(user);
        } else {
            res.status(400).json({msg: `User with username: ${req.params.username} doesn't exist.`});
        }
    });
});

// Add user
router.post('/', (req, res) => {
    if (req.body.name && req.body.email) {
        Users.create({name: req.body.name, email: req.body.email})
        //res.send(req.body);
        res.redirect('/');
    } else {
        res.status(400).json({msg: 'Missing username or email.'});
    }
});

module.exports = router;