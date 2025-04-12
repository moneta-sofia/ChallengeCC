const { createPizza, getAllPizzas } = require('../controllers/pizzaController');
const express = require('express');
const { db } = require('../db/connection.js');
const { validateCreatePizza } = require('../validators/pizzaValidator');

const router = express.Router();

router.post('/', validateCreatePizza, createPizza);
router.get('/', getAllPizzas)

module.exports = router;  
