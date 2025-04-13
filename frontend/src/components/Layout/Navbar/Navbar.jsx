import { FaCartShopping } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../features/cart/CartContext";
import CartModal from "../../../features/cart/CartModal";
import useModal from "../../../hooks/useModal";


export default function Navbar(){
    const {totalProducts} = useContext(CartContext)
    const cartModal = useModal();

    return(
    <>
        <div className="fixed w-11/12 self-center rounded-4xl my-7 py-4 px-10 flex justify-between z-3 bg-white">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-pizzaria">Pizza Challenge</h1>
            </div>
            <div className="h-full w-auto flex">
                <button className="mx-3"><FaHistory  className="size-10"/></button>
                <div className="relative">
                    <button className="mx-3 cursor-pointer" onClick={cartModal.openModal}><FaCartShopping className="size-10"/></button>
                    {
                        !(totalProducts == 0) && <p className="absolute py-1 px-3 rounded-4xl -right-3 top-5 bg-red-800 font-bold">{totalProducts}</p>
                    }
                </div>
            </div>
        </div>
        {cartModal.isOpen && <CartModal isOpen={cartModal.isOpen} onClose={cartModal.closeModal} />}
    </>
    )
}