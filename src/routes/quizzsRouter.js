const express = require('express');
const router = express.Router();
const Quizz = require('../models/quizz.js');

router.get('/', (req, res) => {
    Quizz.find({})
    .populate('category')
    .exec()
    .then(quizzs => {
        res.send(quizzs);
    })
    .catch(err => {
        res.status(500).send(err.message);
    });
});

router.get('/:slug', (req, res) =>{
    Quizz.findOne({slug:req.params.slug}, (err, quizz) => {
        if(err) res.status(400).send(err);
        else res.send(quizz);
    })
})

module.exports = router;