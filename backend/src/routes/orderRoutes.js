const express = require('express');
const { db } = require("../db/connection");
const { postOrder, getAllOrders, getOneOrder, deleteOrder, patchOrder } = require('../controllers/orderController');
const { validateCreateOrder, validateOrderID, validateOrderPatch } = require('../validators/orderValidator');



const router = express.Router();

router.post('/', validateCreateOrder, postOrder);
router.get('/', getAllOrders);
router.get('/:id', validateOrderID, getOneOrder);
router.delete('/:id', validateOrderID, deleteOrder);
router.patch('/:id', validateOrderPatch, patchOrder);

module.exports = router;  
