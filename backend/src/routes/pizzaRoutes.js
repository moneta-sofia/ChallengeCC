const { createPizza, getAllPizzas, getOnePizza } = require('../controllers/pizzaController');
const express = require('express');
const { db } = require('../db/connection.js');
const { validateCreatePizza, validateFindPizza } = require('../validators/pizzaValidator');

const router = express.Router();

router.post('/', validateCreatePizza, createPizza);
router.get('/', getAllPizzas)
router.get('/:id', validateFindPizza, getOnePizza)

module.exports = router;  
