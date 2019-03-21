/*
Import
*/
    // Importer le modèle Monngoose
    const CategoryModel = require('../../models/category.model');
//

/*
Methods
- Mise en place de la logique CRUD
*/
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            // Edit the body content
            req.body.created_at = new Date();
            req.body.author = req.user._id;

            // Create new category
            CategoryModel.create( req.body )
            .then( item => resolve(item) )
            .catch( error => reject(error) );
        })
    }

    const readItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    }

    const updateItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    }

    const deleteItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    }
//

/*
Export
*/
    module.exports = {
        createItem,
        readItem,
        updateItem, 
        deleteItem
    }
//