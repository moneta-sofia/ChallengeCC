const { postOrder } = require("../services/orderService")


exports.postOrder = async (req, res) => {
    try{
        const orderData = req.body;
        const orderPosted = await postOrder(orderData);

        if ( typeof orderPosted !== 'object'){
            res.status(404).json({message: 'Pizza with ID ' + orderPosted + ' not found'})
        } else {
            res.status(201).json({ message: orderPosted });
        }

        
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order' });
    }
}