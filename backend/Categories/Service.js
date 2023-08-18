const categoryModel = require('./Model')

const categoryService = {

  getCategories: (success, fail) => {
    categoryModel.find()
      .then(data => success(data))
      .catch(error => fail(error))
  },

}

module.exports = categoryService
