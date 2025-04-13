import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [pizzasSlected, setPizzasSelected] = useState([])

    
    const addPizzaToCart = (newPizza) => {
        setPizzasSelected((prevPizzas) => {

            const existingPizzaIndex = prevPizzas.findIndex(
                item => item.pizza._id === newPizza._id                        //obtains the id of the pizza repeated
            );
            
            if (existingPizzaIndex >= 0) {                                     //if the pizza is already on the list
                const updatedPizzas = [...prevPizzas];
                updatedPizzas[existingPizzaIndex] = {                          // update the list of pizzas maintaining the Object structure ({pizza:...,cuantity:...})
                    ...updatedPizzas[existingPizzaIndex],                      // here maintains the pizza, for changing the quantity of THAT pizza and not another one
                    quantity: updatedPizzas[existingPizzaIndex].quantity + 1   // change the quantity, not the pizza
                };
                return updatedPizzas;
            } else {

                return [
                    ...prevPizzas,                                              // if the pizza no exists
                    {                                                           // adds that, but with quantity 1
                        pizza: {                                                // and mantaining the structure
                            _id: newPizza._id,
                            name: newPizza.name,
                            price: newPizza.price,
                            ingredients: newPizza.ingredients,
                            image: newPizza.image
                        },
                        quantity: 1
                    }
                ];
            }
        });
    };


useEffect(() => {
    console.log(pizzasSlected);
    
},[pizzasSlected])


    const deletePizzaToCart = (id) => {
		// setImages((prevPizzas) => prevPizzas.filter((pizza) => pizza._id !== id));
	};

    const resetCart = () => {
        setPizzasSelected([])
    }

    const value = {
        pizzasSlected,
        addPizzaToCart,
        deletePizzaToCart,
        resetCart
    }

    return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
}