import { useEffect, useState } from "react";
import PizzaCard from "../../components/Pizza/PizzaCard";
import { PizzaService } from "../../services/pizzaService";


export default function Home () {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchAllPizzas = async () => {
            try{
                const data = await PizzaService.getAll();
                setPizzas(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAllPizzas();
    }, [])

    return(
        <div className="w-full mt-40">
            <h1 className="text-white text-4xl my-7 text-center font-bold">Here you can find the best pizzas!</h1>
            <div className="flex flex-wrap  justify-between">
                {
                    pizzas.map((pizza) => {
                        return <PizzaCard pizzaData={pizza} key={pizza._id}/>
                    })
                }

            </div>
        </div>
    )
}