const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users.route');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/mongo-games', { useNewUrlParser: true })
    .then(() => {
        console.log('You are now connected to Mongo!')
    })
    .catch((err) => {
        console.error('Something went wrong', err)
    })

mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
