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


// get one


// get all


//delete 