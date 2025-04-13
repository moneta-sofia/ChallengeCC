const { createPizza, getAllPizzas, getOnePizza, deletePizza, patchPizza } = require('../controllers/pizzaController');
const express = require('express');
const { db } = require('../db/connection.js');
const { validateCreatePizza, validateFindPizza, validatePatchPizza } = require('../validators/pizzaValidator');

const router = express.Router();

router.post('/', validateCreatePizza, createPizza);
router.get('/', getAllPizzas);
router.get('/:id', validateFindPizza, getOnePizza);
router.delete('/:id', validateFindPizza, deletePizza);
router.patch('/:id', validatePatchPizza, patchPizza);

module.exports = router;  
