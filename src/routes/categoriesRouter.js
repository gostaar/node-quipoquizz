const express = require('express');
const router = express.Router();
const Category = require('../models/category.js')
const Quizz = require('../models/quizz.js');

router.get('/', (req, res) => {
    Category.find({})
        .exec()
        .then(categories => {
            res.send(categories);
        })
        .catch(err => {
            // Gérer l'erreur
            res.status(500).send(err.message);
        });
})

router.get('/:slug', (req, res) => {
    Category.findOne({slug: req.params.slug}, (err, category) => {
        if(err) res.status(400).send(err);
        else Quizz.find({id_categorie: category.id}, (err, quizzs) => {
            if(err) res.status(400).send(err);
            else res.send(quizzs);
        })
    })
})

module.exports = router;