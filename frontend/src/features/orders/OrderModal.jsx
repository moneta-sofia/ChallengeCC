import { IoClose } from "react-icons/io5";
import { OrderService } from "../../services/orderService";
import { useEffect, useState } from "react";

export default function OrderModal({ isOpen, onClose }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            fetchOrders();
        }
    }, [isOpen]);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError(null);
            const ordersData = await OrderService.getAll();
            setOrders(ordersData);
        } catch (err) {
            setError("Error al cargar las órdenes");
            console.error("Error fetching orders:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div
                className="fixed cursor-pointer bg-black opacity-50 left-0 w-12/12 h-12/12 flex self-center items-center z-3"
                onClick={onClose}
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-h-[90vh] overflow-hidden rounded-4xl text-black bg-white z-50 p-8">
                <button
                    className="absolute cursor-pointer top-0 right-0 m-5 text-6xl"
                    onClick={onClose}
                >
                    <IoClose />
                </button>
                <div>
                    <h1 className="text-4xl font-bold">History orders</h1>
                    <div className="flex justify-around font-bold text-2xl py-4 border-b-2 mb-5">
                        <p>Date</p>
                        <p>State</p>
                        <p>Price total</p>
                    </div>
                    {loading && <div>Loading</div>}
                    <div className="overflow-y-auto max-h-[60vh]">
                        {orders &&
                            orders.map((order) => {
                                return (
                                    <div className="hover:bg-gray-200 cursor-pointer flex justify-between px-10 py-3">
                                        <p>{new Date(order.date).toLocaleString("es-AR")}</p>
                                        <p>{order.status}</p>
                                        <p>$ {order.total}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
