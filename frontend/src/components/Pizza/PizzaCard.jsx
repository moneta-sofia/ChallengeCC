import { useContext } from "react";
import { IoAddCircle } from "react-icons/io5";
import { CartContext } from "../../features/cart/CartContext";

export default function PizzaCard ({pizzaData}) {

    const {addPizzaToCart} = useContext(CartContext);
    return(
        <div className="w-2xs rounded-3xl border-solid border-2 p-3 my-3 flex flex-col content-center items-center justify-between " key={pizzaData._id}>
            <img className="w-2/3" src={pizzaData.image}/>
            <h3 className="text-3xl text-center font-bold mb-4">{pizzaData.name}</h3>
            <div className="text-left w-2/3 my-3">
                <p className="text-2xl">Ingredients:</p>
                {
                    pizzaData.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })
                }
            </div>
            <button className="p-3 mt-5 cursor-pointer active:bg-amber-600 bg-amber-500 w-full rounded-2xl font-bold flex justify-center items-center"onClick={(e)=>addPizzaToCart(pizzaData)}><IoAddCircle className="size-5.5 mr-2"/> Add to cart</button>
        </div>
    )
}