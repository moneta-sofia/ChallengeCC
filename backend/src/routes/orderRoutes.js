const express = require('express');
const { db } = require("../db/connection");
const { postOrder, getAllOrders } = require('../controllers/orderController');
const { validateCreateOrder } = require('../validators/orderValidator');



const router = express.Router();

router.post('/', validateCreateOrder, postOrder)
router.get('/', getAllOrders)

module.exports = router;  
