// const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user.model');
const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    // First Validate The Request
    const {error} = validate(req.body);

    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({
        email: req.body.email
    });

    if(user) {
        return res.status(400).send("That user already exists!");
    }
    else {
        // Insert the new user if they do not exist yet
        /*
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        */
        user = new User(_.pick(req.body, ['name', 'email', 'password']));

        // const salt = await bcrypt.genSaltSync(10);
        // user.password = await bcrypt.hashSync(user.password, salt);

        await user.save();

        // res.send(user);
        res.send(_.pick(user, ['_id', 'name', 'email']));
    }
});

module.exports = router;