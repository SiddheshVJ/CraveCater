import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Notification = model('Notification', notificationSchema);
module.exports = Notification

/*const notificationDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c82",
  "userId": "60b8d295f1c2f4a8c1d42c71",
  "message": "Your order has been placed successfully!",
  "read": false,
  "createdAt": "2024-05-30T12:34:56.000Z"
};

module.exports = notificationDocumentExample;*/