import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const Pizza = mongoose.model('Pizza', PizzaSchema);
export default Pizza;