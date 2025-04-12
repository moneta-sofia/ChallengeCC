const express = require('express');
const { db } = require("../db/connection");
const { postOrder } = require('../controllers/orderController');
const { validateCreateOrder } = require('../validators/orderValidator');



const router = express.Router();

router.post('/', validateCreateOrder, postOrder)

module.exports = router;  
