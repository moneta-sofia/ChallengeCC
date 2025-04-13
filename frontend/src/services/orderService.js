import api from "./api";

export const OrderService = {

    getAll: async () => {
        return await api.get('/order');
    },

    getById: async (id) => {
        return await api.get(`/order/${id}`);
    },

    update: async (id, updateData) => {
        return await api.patch(`/order/${id}`, updateData);
    },

    delete: async (id) => {
        return await api.delete(`/order/${id}`);
    },

    createFromCart: async (cartItems = {}) => {
        const formattedProducts = cartItems.map(item => ({
            pizza: item.pizza._id, 
            quantity: item.quantity
        }));

        const orderData = {
            status: "pending", 
            products: formattedProducts,
        };

        return await api.post('/order', orderData);
    }
};