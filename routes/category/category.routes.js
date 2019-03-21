/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const categoryRouter = express.Router({ mergeParams: true });

  // Modules
  const { createItem, readItem, updateItem, deleteItem } = require('./category.controller');
  const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
  const { checkFields } = require('../../services/request.checker');
// 


/*
Class definition
*/
  class CategoryRouterClass {

    constructor( { passport } ) {
      this.passport = passport
    }

    // Définition des routes
    routes(){

      // Route to create new item in BDD
      categoryRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
        // Error: no body present
        if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, 'No body data provided') }
        // Check fields in the body
        const { miss, extra, ok } = checkFields(['title', 'description'], req.body);
        //=> Error: bad fields
        if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
        // Request is OK
        createItem(req)
        .then( apiRes =>  sendApiSuccessResponse(res, 'Cat is registrated', apiRes))
        .catch( apiErr => sendApiErrorResponse(res, 'Error during cat registration', apiErr));
      })
    };

    // Initialize routes
    init(){
      this.routes();
      return categoryRouter;
    }
  }
//


/*
Export class
*/
  module.exports = CategoryRouterClass;
//