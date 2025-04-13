import api from "./api";

export const PizzaService = {
    getAll: async () => {
        return await api.get('/pizza');
    },

    getById: async (id) => {
        return await api.get(`/pizza/${id}`);
    },

    create: async (pizzaData) => {
        return await api.post('/pizza', pizzaData);
    },

    update: async (id, updateData) => {
        return await api.patch(`/pizza/${id}`, updateData);
    },

    delete: async (id) => {
        return await api.delete(`/pizza/${id}`);
    }
}