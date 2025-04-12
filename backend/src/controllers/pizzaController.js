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

exports.getAllPizzas = async (req, res) => {
    try{
        const pizzas = await pizzaService.getAllPizzas();
        res.status(200).json(pizzas);
    } catch (error) {
        console.error('Error creating pizza:', error);
        res.status(500).json({ message: 'Error getting pizzas' });
    }
}

exports.getOnePizza = async (req, res) => {
    const { id } = req.params;
    try{
        res.status(200).json(await pizzaService.getOnePizza(id));
    } catch (error) {
        console.error('Error getting pizza with id ' + id, error)
        res.status(500).json({ message: 'Error getting pizza with id ' + id })
    }
}