const express = require('express');
const router = express.Router();

// Use to check if id is valid
const ObjectID = require('mongoose').Types.ObjectId;

const { PostMessage } = require('../models/postMessage');

// Get all records
router.get('/', (req, res) => {
    PostMessage.find((err, docss) => {
        if (!err)
            res.send(docss);
        else
            return 'Error while retrieving all records :' + JSON.stringify(err, undefined, 2);
    });
});

// Get record
router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id);

    PostMessage.findById(req.params.id, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            return 'Error while retrieving record :' + JSON.stringify(err, undefined, 2);
    });
});

// Save new record
router.post('/', (req, res) => {
    const newPostMessage = new PostMessage({
        title: req.body.title,
        message: req.body.message,
        date: new Date,
    });

    newPostMessage.save((err, docs) => {
        if (!err)
            res.send(docs);
        else
            return 'Error while creating new record :' + JSON.stringify(err, undefined, 2);
    });
});

// Update selected record
router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id);
    
    const updatePostMessage = {
        title: req.body.title,
        message: req.body.message,
        date: new Date,
    };

    PostMessage.findByIdAndUpdate(req.params.id, { $set: updatePostMessage }, {new: true}, (err, docs) => {
        if (!err)
            res.send(docs);
        else
            return 'Error while updating a record :' + JSON.stringify(err, undefined, 2);
    });
});

// Delete selected record
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id);
    
    PostMessage.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err)
            res.send(docs);
        else
            return 'Error while deleting a record :' + JSON.stringify(err, undefined, 2);
    });
});

module.exports = router