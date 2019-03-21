
/*
Import
*/
const mongoose = require('mongoose')
const { Schema } = mongoose;

/*
Definition
*/
    const categorySchema = new Schema({
        title: String,
        description: String,
        author: String,
        created_at: Date,
        updated_at: Date
    })
//


/*
Export
*/
const CategoryModel = mongoose.model('category', categorySchema);
module.exports = CategoryModel;
//