const Pizza = require('../db/models/Pizza'); 


// post
exports.createPizza = async (pizzaData) => {
    const { name, price, ingredients, image } = pizzaData;
    try {
        const newPizza = new Pizza({
            name,
            price,
            ingredients,
            image
        });
        await newPizza.save();
        return pizzaData;
    } catch (error) {
        console.error('Error creating pizza:', error);
        throw new Error('Error creating pizza');
    }
};

// get all
exports.getAllPizzas = async () => {
    try{
        return await Pizza.find();
    } catch (error) {
        console.error('Error getting pizzas ' + error);
        throw new Error('Error getting pizzas');
    }
}

// get one
exports.getOnePizza = async (id) => {
    try{
        return await Pizza.findById(id);
    } catch (error) {
        console.error('Error getting pizza with id ' + id + ' ' + error);
        throw new Error('Error getting pizza with id ' + id);
    }
}


//delete 
// exports.deletePizza = async (id) => {
//     try{
//         const pizzaExists = await Pizza.findByIdAndDelete(id);
//     } catch (error) {

//     }
// };








