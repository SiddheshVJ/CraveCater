const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  type: {
    type: String,
    enum: ['Home', 'Work', 'Other'],
    required: true
  },
  line1: {
    type: String,
    required: true
  },
  line2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
},
  {
    _id: false
  });

const orderSchema = new Schema({
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
  menuItems: [
    {
      menuItemId: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending'
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'],
    required: true
  },
  deliveryAddress: {
    type: addressSchema,
    required: true
  },
  placedAt: {
    type: Date,
    default: Date.now
  },
  deliveredAt: {
    type: Date
  }
},
  {
    timestamps: true
  });

orderSchema.pre('find', function () {
  this.populate('userId restaurantId menuItems.menuItemId');
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

/*const addressDocumentExample = {
  "type": "Home",
  "line1": "123 Main St",
  "line2": "Apt 4B",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "country": "USA"
};

const orderDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c73",
  "userId": "60b8d295f1c2f4a8c1d42c71",
  "restaurantId": "60b8d295f1c2f4a8c1d42c70",
  "menuItems": [
    {
      "menuItemId": "60b8d295f1c2f4a8c1d42c72",
      "quantity": 2,
      "price": 24.99
    },
    {
      "menuItemId": "60b8d295f1c2f4a8c1d42c73",
      "quantity": 1,
      "price": 18.99
    }
  ],
  "totalAmount": 68.97,
  "orderStatus": "Pending",
  "paymentStatus": "Pending",
  "paymentMethod": "Credit Card",
  "deliveryAddress": addressDocumentExample,
  "placedAt": "2024-05-30T12:34:56.000Z",
  "createdAt": "2024-05-30T12:34:56.000Z",
  "updatedAt": "2024-05-30*/