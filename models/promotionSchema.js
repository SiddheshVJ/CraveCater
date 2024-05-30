import { Schema, model } from "mongoose";

const promotionSchema = new Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

const Promotion = model('Promotion', promotionSchema);
module.exports = Promotion

/*
{
  "_id": "60b8d295f1c2f4a8c1d42c84",
  "restaurantId": "60b8d295f1c2f4a8c1d42c70",
  "title": "Summer Special Discount",
  "description": "Get 20% off on all orders this summer!",
  "discountPercentage": 20,
  "startDate": "2023-06-01T00:00:00.000Z",
  "endDate": "2023-08-31T23:59:59.000Z",
  "createdAt": "2023-05-15T10:30:00.000Z",
  "updatedAt": "2023-05-15T10:30:00.000Z",
}
*/