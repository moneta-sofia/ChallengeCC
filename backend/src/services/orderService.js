const Order = require("../db/models/Order");
const pizzaService = require("./pizzaService");


exports.postOrder = async (order) => {
    const { status, products, date } = order;
    try {

        let nullPizzaId;

        //TODO: refactor a better validation

        const allPizzasEmbebed = await Promise.all(
            products.map(async (p) => {
                const pizza = await pizzaService.getOnePizza(p.pizza);

                // Check if any ID is wrong
                if (pizza === null) {
                    nullPizzaId = p.pizza;
                    return;
                }
                console.log(p.quantity);
                
                return {
                    pizza: {
                        _id: pizza._id,
                        name: pizza.name,
                        price: pizza.price,
                        ingredients: pizza.ingredients,
                        image: pizza.image
                    },
                    quantity: p.quantity
                };
            })
        );

        console.log(allPizzasEmbebed);
        console.log(nullPizzaId);
        

        if (nullPizzaId) {
            return nullPizzaId;
        }

        // Sum all pizza's prices
        const total = allPizzasEmbebed.reduce((sum, piz) => {
            return sum + (piz.quantity * piz.pizza.price);
        }, 0);


        console.log(total);
        

        const newOrder = new Order({
            status,
            products: allPizzasEmbebed,
            date,
            total
        });
        return await newOrder.save();
    } catch (error) {
        console.error('Error creating order ', error);
        throw new Error('Error creating order');
    }
}

exports.getAllOrders = async () => {
    try {
        return await Order.find().sort({date: -1});
    } catch (error) {
        console.error('Error getting all orders ', error);
        throw new Error('Error getting all orders');
    }
}

exports.getOneOrder = async (orderId) => {
    try {
        return await Order.findById(orderId);
    } catch (error) {
        console.error('Error getting order ', error);
        throw new Error('Error getting order');
    }
}

exports.deleteOrder = async (orderId) => {
    try {
        return await Order.findByIdAndDelete(orderId);
    } catch (error) {
        console.error('Error deleting order ', error);
        throw new Error('Error deleting order');
    }
}


//TODO: refactor
exports.patchOrder = async (orderId, newOrder) => {
    try{
        // Options to return the updated document
        const options = { new: true};
        const result = await Order.findByIdAndUpdate(orderId, newOrder, options);
        return result;
        //test if there isn't aorder
    } catch (error) {
        console.error('Error updating order ', error);
        throw new Error('Error deleting order');
    }
}
