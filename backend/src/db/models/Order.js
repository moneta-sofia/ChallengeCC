import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'cancelled'],
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Pizza',
        required: true,
    }],
    date: {
        type: Date,
        default: Date.now,
    }
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;