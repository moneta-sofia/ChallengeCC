const { mongoose } = require('../connection.js')
const { Schema } = mongoose;

const PizzaSchema = new Schema({
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

module.exports = mongoose.model('Pizza', PizzaSchema);