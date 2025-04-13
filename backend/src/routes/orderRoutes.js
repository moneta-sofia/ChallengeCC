const express = require('express');
const { db } = require("../db/connection");
const { postOrder, getAllOrders, getOneOrder } = require('../controllers/orderController');
const { validateCreateOrder, validateOrderID } = require('../validators/orderValidator');



const router = express.Router();

router.post('/', validateCreateOrder, postOrder)
router.get('/', getAllOrders)
router.get('/:id', validateOrderID, getOneOrder)

module.exports = router;  
