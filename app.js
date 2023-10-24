const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const categoriesRouter = require('./src/routes/categoriesRouter.js');
const quizzRouter = require('./src/routes/quizzsRouter.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3002;

app.use('/quizzs', quizzRouter);
app.use('/categories', categoriesRouter);

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => console.log('Erreur lors de la connexion'));
db.once('open', () => {
    console.log('Base de données dispo!')
    app.listen(port, () => {
        console.log(`L'application écoute sur http://localhost:${port}`);
    
    });
});