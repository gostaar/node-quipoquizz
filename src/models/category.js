const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'title required !']
    },
    slug: {
        type: String,
        required: [true, 'slug required !']
    },
    Image: String,
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;