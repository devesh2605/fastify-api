const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Book = schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Book',Book);