const { postOrder } = require("../services/orderService")


exports.postOrder = async (req, res) => {
    try{
        const orderData = req.body;
        const orderPosted = await postOrder(orderData);
        res.status(201).json({ message: orderPosted });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order' });
    }
}