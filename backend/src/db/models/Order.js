const { mongoose } = require('../connection.js')
const { Schema } = mongoose;

const OrderSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'cancelled'],
    },
    products: [{
        pizza: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pizza',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min:1,
        },
        _id: false,
    }],
    total: {
        type: Number,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Order', OrderSchema);