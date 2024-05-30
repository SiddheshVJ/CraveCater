import { Schema, model } from "mongoose";
const paymentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
    transactionId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment

/*const paymentDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c83",
  "userId": "60b8d295f1c2f4a8c1d42c71",
  "orderId": "60b8d295f1c2f4a8c1d42c73",
  "amount": 68.97,
  "paymentMethod": "Credit Card",
  "status": "Pending",
  "transactionId": "TXN123456789",
  "createdAt": "2024-05-30T12:34:56.000Z"
};

module.exports = paymentDocumentExample;*/