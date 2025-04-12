const { check, param } = require('express-validator');
const { validateResults } = require('./validatorHelper');

const validateCreatePizza = [
    check('name')
        .notEmpty()
        .withMessage('Name is required'),
    check('price')
        .isNumeric()
        .withMessage('Price must be a number')
        .notEmpty()
        .withMessage('Price is required'),
    check('ingredients')
        .isArray()
        .withMessage('Ingredients must be an array')
        .notEmpty()
        .withMessage('Ingredients are required'),
    check('image')
        .isURL()
        .withMessage('Image must be a valid URL')
        .notEmpty()
        .withMessage('Image is required'),
    (req, res, next) => {
        validateResults(req, res, next);
    }
]

const validateFindPizza = [
    param('id')
        .notEmpty().withMessage('Id is required')
        .isMongoId().withMessage('Id invalid'),
    (req, res, next) => {
        validateResults(req, res, next);
    }
]

const validatePatchPizza = [
    param('id')
        .notEmpty().withMessage('Id is required')
        .isMongoId().withMessage('Id invalid'),
    check('price')
        .optional()
        .isNumeric()
        .withMessage('Price must be a number'),
    check('ingredients')
        .optional()
        .isArray()
        .withMessage('Ingredients must be an array'),
    check('image')
        .optional()
        .isURL()
        .withMessage('Image must be a valid URL'),
    (req, res, next) => {
        validateResults(req, res, next);
    }
]

module.exports = {
    validateCreatePizza, validateFindPizza, validatePatchPizza
}