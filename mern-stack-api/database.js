const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/postManagerDB';

// Connect to MongoDB Server
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, error => {
    if (!error)
        console.log('MongoDB connection succeeded!');
    else
        console.log('Error! While connecting MongoDB: ' + JSON.stringify(error, undefined, 2));
});