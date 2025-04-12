const { mongoose } = require('../connection.js')
const { Schema } = mongoose;

const OrderSchema = new Schema({
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

module.exports = mongoose.model('Order', OrderSchema);