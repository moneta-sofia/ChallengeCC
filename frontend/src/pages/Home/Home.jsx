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
        <div className="w-full bg-red-400">
            <h1>Here you can find the best pizzas!</h1>
            <div className="flex flex-wrap  justify-between">
                {
                    pizzas.map((pizza) => {
                        return <PizzaCard pizzaData={pizza}/>
                    })
                }

            </div>
        </div>
    )
}