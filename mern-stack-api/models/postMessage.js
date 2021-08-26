const mongoose = require('mongoose');

var PostMessage = mongoose.model('PostMessage', 
{
    title: {type: String},
    message: {type: String},
    date: {type: Date}
}, 'postMessages');

module.exports = { PostMessage }