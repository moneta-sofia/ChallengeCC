import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [pizzasSlected, setPizzasSelected] = useState([])
    let totalProducts = 0;
    let totalPrice = 0;


    const pizzasSlectedQuantity = () => {
        pizzasSlected.map((pizza) => {
            totalProducts += pizza.quantity;
        })
        return totalProducts;
    }

    const pizzasSlectedPrice = () => {
        pizzasSlected.map((pizza) => {
            totalPrice += pizza.quantity * pizza.pizza.price;
        })
        return totalProducts;
    }

    useEffect(() => {
        pizzasSlectedQuantity();
        pizzasSlectedPrice();
    },[pizzasSlected])
    

    
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


    const deletePizzaFromCart = (pizzaData) => {
        setPizzasSelected((prevPizzas) => {

            const pizzaIndex = prevPizzas.findIndex(
                item => item.pizza._id === pizzaData._id                        
            );
            
            if (prevPizzas[pizzaIndex].quantity >= 1) {    
                const updatedPizzas = [...prevPizzas];
                updatedPizzas[pizzaIndex] = {                          
                    ...updatedPizzas[pizzaIndex],                      
                    quantity: updatedPizzas[pizzaIndex].quantity - 1   
                };
                return updatedPizzas;
            } else {
                return prevPizzas.filter((_, index) => index !== pizzaIndex);
            }
        });
	};

    const resetCart = () => {
        setPizzasSelected([])
    }

    const value = {
        pizzasSlected,
        addPizzaToCart,
        deletePizzaFromCart,
        resetCart,
        totalProducts,
        totalPrice
    }

    return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
}