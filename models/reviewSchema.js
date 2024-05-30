import { Schema, model } from "mongoose";


const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  menuItemId: {
    type: Schema.Types.ObjectId,
    ref: 'Menu'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date
    , default: Date.now
  }
});

reviewSchema.pre('find', function () {
  this.populate('userId restaurantId menuItemId');
});

const Review = model('Review', reviewSchema);
module.exports = Review;

/*
const reviewDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c71",
  "userId": "60b8d295f1c2f4a8c1d42c72",
  "restaurantId": "60b8d295f1c2f4a8c1d42c70",
  "rating": 5,
  "comment": "Food was delicious! The service was friendly and prompt.",
  "createdAt": "2023-06-01T08:15:30.000Z",
  "updatedAt": "2023-06-01T08:15:30.000Z",
};*/