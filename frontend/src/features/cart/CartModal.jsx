import { useContext } from "react";
import { CartContext } from "./CartContext";
import { IoClose } from "react-icons/io5";
import { OrderService } from "../../services/orderService";
import { Toaster, toast } from 'sonner'


export default function CartModal({ isOpen, onClose }) {
    const { totalPrice, totalProducts, pizzasSlected, resetCart} = useContext(CartContext)

    const confirmOrder = async () => {
        try {
            toast.promise( await OrderService.createFromCart(pizzasSlected) , {
                loading: 'Loading...',
                success: (data) => {
                    return `Your order has been created!`;
                },
                error: 'Error',
            });
        } catch (error) {
            console.log(error);
        } finally {
            resetCart();
        }
    }

    return (
        <>
            <div className="fixed cursor-pointer bg-black opacity-50 w-12/12 h-12/12 flex self-center items-center z-3" onClick={onClose}></div>
            <div className="fixed p-14 w-10/12 h-10/12 translate-y-12 left-1/12 rounded-4xl text-black bg-white z-5">
                <button className="absolute cursor-pointer top-0 right-0 m-5 text-6xl" onClick={onClose}>
                    <IoClose />
                </button>
                <div className="">
                    <h1 className="text-4xl font-bold">Your cart</h1>
                    <div className="flex justify-around font-bold text-2xl py-4 border-b-2 mb-5">
                        <p>Image</p>
                        <p>Name</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    <div className="h-full border-2 border-amber-300">
                        {
                            pizzasSlected.map((pizza) => {
                                return (
                                    <div className="flex my-5 w-full justify-around">
                                        <img src={pizza.pizza.url} />
                                        <h2>{pizza.pizza.name}</h2>
                                        <p>{pizza.quantity}</p>
                                        <p>$ {pizza.pizza.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="text-black flex justify-between px-20 py-4 text-xl font-extrabold">
                    <p>Quantity: {totalProducts}</p>
                    <p>Total: $ {totalPrice}</p>
                </div>
                <button className=" cursor-pointer active:bg-amber-600 bg-amber-500 px-20 py-4 text-xl font-extrabold w-full rounded-xl text-white" onClick={confirmOrder}>CONFIRM ORDER</button>
            </div>

        </>
    );
}
