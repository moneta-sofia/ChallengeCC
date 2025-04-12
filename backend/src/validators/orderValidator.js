const { check } = require('express-validator');
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

    check('products.*') // validates each element from the array
        .isMongoId()
        .withMessage('Each product must be a valid Mongo ID'),

    (req, res, next) => {
        validateResults(req, res, next);
    }
];


module.exports = {
    validateCreateOrder
}