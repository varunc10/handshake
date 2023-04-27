const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    city: {
        type: String,
        enum: ['newdelhi', 'london', 'paris'],
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;