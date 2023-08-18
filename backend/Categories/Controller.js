const express = require('express');
const categoryServices = require('./Service');

const categoriesRouter = express.Router();

categoriesRouter.route('/get-categories').get(getCategories);

function getCategories(request, response) {
  categoryServices.getCategories(
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
}

module.exports = categoriesRouter;
