const { check, param } = require('express-validator');
const { validateResults } = require('./validatorHelper');

const validateCreateOrder = [
    check('status')
        .notEmpty()
        .withMessage('Status is required')
        .isIn(['pending', 'completed', 'cancelled'])
        .withMessage('Status must be one of: pending, completed, cancelled'),

    check('products')
        .isArray({min: 1})
        .withMessage('Products must be a array'),

    check('products.*.pizza') 
        .notEmpty()
        .withMessage('Each product must have a pizza ID')
        .isMongoId()
        .withMessage('Each pizza must have an ID valid'),

    check('products.*.quantity')
        .notEmpty()
        .withMessage('Each product must have a quantity')
        .isInt({ min: 1 })
        .withMessage('Quantity must be an integer greater than 0'),

    (req, res, next) => {
        validateResults(req, res, next);
    }
];


const validateOrderID = [
    param('id')
        .isMongoId().withMessage('Must be a valid ID')
        .notEmpty().withMessage('ID is required'),
    (req, res, next) => {
        validateResults(req, res, next);
    }
]


const validateOrderPatch = [
    check('status')
        .optional()
        .isIn(['pending', 'completed', 'cancelled'])
        .withMessage('Status must be one of: pending, completed, cancelled'),

    check('products')
        .optional()
        .isArray({min: 1})
        .withMessage('Products must be a array'),

    check('products.*.pizza._id') 
        .optional()
        .isMongoId()
        .withMessage('Each pizza must have an ID valid'),

    check('products.*.quantity')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Quantity must be an integer greater than 0'),

    (req, res, next) => {
        validateResults(req, res, next);
    }
]


module.exports = {
    validateCreateOrder, validateOrderID, validateOrderPatch
}