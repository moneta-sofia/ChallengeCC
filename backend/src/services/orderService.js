const Order = require("../db/models/Order");

exports.postOrder = async ( order ) => {
    const { status, products, date } = order;
    try{
        const newOrder = new Order({
            status,
            products,
            date
        });
        return await newOrder.save();
    } catch (error) {
        console.error('Error creating order ', error );
        throw new Error('Error creating order');
    }
}