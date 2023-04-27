const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./schema');

mongoose.connect('mongodb://127.0.0.1:27017/ex-3DBconn', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('form');
})

app.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
    }
    catch (err) {
        console.log(error);
    }
    res.redirect('/');
})

app.get('/show', async (req, res) => {
    try {
        const users = await User.find({});
        res.render('show', { users });
    } catch (err) {
        console.log(err);
        res.send('Something went wrong');
    }
});

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})