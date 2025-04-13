import PizzaCard from "../../components/Pizza/PizzaCard";

export default function Home () {
    return(
        <div className="w-full bg-red-400">
            <h1>Here you can find the best pizzas!</h1>
            <div className="flex flex-wrap  justify-between">
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>


            </div>
        </div>
    )
}