const Order = require("../db/models/Order");
const pizzaService = require("./pizzaService");


exports.postOrder = async (order) => {
    const { status, products, date } = order;
    try {

        let nullPizzaId;

        //TODO: refactor a better validation
        
        const pizzas = await Promise.all(
            products.map(async (p) => {
                const pizza = await pizzaService.getOnePizza(p.pizza);
                if (pizza === null) {
                    nullPizzaId = p.pizza;
                }
                return pizza;
            })
        );

        if (nullPizzaId) {
            return nullPizzaId;
        }

        const total = products.reduce((sum, product, index) => {
            return sum + (product.quantity * pizzas[index].price);
        }, 0);

        const newOrder = new Order({
            status,
            products,
            date,
            total
        });
        return await newOrder.save();
    } catch (error) {
        console.error('Error creating order ', error);
        throw new Error('Error creating order');
    }
}