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
};

exports.getOnePizza = async (req, res) => {
    const { id } = req.params;
    try{
        const pizzaFound = await pizzaService.getOnePizza(id);

        // If pizza exists return the pizza, otherwise throw 404
        pizzaFound ? res.status(200).json(pizzaFound) : res.status(404).json({ message: 'Pizza not found with ID: ' + id});
        
    } catch (error) {
        console.error('Error getting pizza with id ' + id, error)
        res.status(500).json({ message: 'Error getting pizza with id ' + id })
    }
};

exports.deletePizza = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedPizza = await pizzaService.deletePizza(id);
        deletedPizza !== null ? res.status(200).json({ message: 'OK'}) : res.status(404).json({ message: 'Pizza not found with ID ' + id });
    } catch {  
        console.error('Error deleting pizza with id ' + id, error)
        res.status(500).json({ message: 'Error deleting pizza with id ' + id })
    }
}


exports.patchPizza = async (req, res) => {
    const { id } = req.params;
    const newPizza = req.body;
    try {
        const result = await pizzaService.patchPizza(id, newPizza);        
        result === null ? res.status(404).json({ message: 'Pizza not found with ID ' + id }) : res.status(200).json({ message: 'OK'});
    } catch (error) {
        console.error('Error updating pizza with id ' + id, error)
        res.status(500).json({ message: 'Error updating pizza with id ' + id })
    }
}