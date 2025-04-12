const { createPizza, getAllPizzas, getOnePizza } = require('../controllers/pizzaController');
const express = require('express');
const { db } = require('../db/connection.js');
const { validateCreatePizza } = require('../validators/pizzaValidator');

const router = express.Router();

router.post('/', validateCreatePizza, createPizza);
router.get('/', getAllPizzas)
router.get('/:id', getOnePizza)

module.exports = router;  
