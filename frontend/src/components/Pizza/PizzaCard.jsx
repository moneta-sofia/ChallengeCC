export default function PizzaCard ({pizzaData}) {
    return(
        <div className="w-2xs rounded-3xl border-solid border-2 p-3 my-3 flex flex-col content-center items-center ">
            <img className="w-2/3" src={pizzaData.image}/>
            <h3>{pizzaData.name}</h3>
            <div className="text-left w-2/3 my-3">
                <p>Ingredients:</p>
                {
                    pizzaData.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })
                }
            </div>
        </div>
    )
}