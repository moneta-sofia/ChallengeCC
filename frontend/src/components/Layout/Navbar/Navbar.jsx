import { FaCartShopping } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";


export default function Navbar(){
    return(
    <>
        <div className="w-full rounded-4xl my-5 py-4 px-10 flex justify-between  border-solid border-2 border-b-cyan-700">
            <div>
                <h1>Pizzas Cloud</h1>
                <h3>Tastes like a cloud</h3>
            </div>
            <div className="h-full w-auto flex">
                <button className="mx-3"><FaHistory  className="size-10"/></button>
                <button className="mx-3"><FaCartShopping className="size-10"/></button>
            </div>
        </div>
    </>
    )
}