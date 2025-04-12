const pizzaService = require('../services/pizzaService');

exports.createPizza = async (req, res) => {
    try {
        const pizzaData = req.body;
        const newPizza = await pizzaService.createPizza(pizzaData);
        res.status(201).json(newPizza);
    } catch (error) {
        console.error('Error creating pizza:', error);
        res.status(500).json({ message: 'Error creating pizza' });
    }
};