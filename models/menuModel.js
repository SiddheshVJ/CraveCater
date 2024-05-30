import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  ingredients: [String],
  imageUrl: { type: String },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

const Menu = model('Menu', menuSchema);
module.exports = Menu;

/*const menuDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c72",
  "restaurantId": "60b8d295f1c2f4a8c1d42c70",
  "categoryId": "60b8d295f1c2f4a8c1d42c74",
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon grilled to perfection, served with roasted vegetables and lemon butter sauce.",
  "price": 24.99,
  "ingredients": ["Salmon", "Lemon", "Butter", "Vegetables"],
  "imageUrl": "http://example.com/images/grilled_salmon.jpg",
  "availability": true,
  "createdAt": "2024-05-30T12:00:00.000Z",
  "updatedAt": "2024-05-30T12:00:00.000Z"
};

module.exports = menuDocumentExample;*/