import { Schema, model } from "mongoose";


const operatingHoursSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  open: {
    type: String,
    required: true
  },
  close: {
    type: String,
    required: true
  }
}, {
  _id: false
});

const addressSchema = new Schema({
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
}, {
  _id: false
});

const restaurantSchema = new Schema({
  restaurantUserName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  restaurantPassword: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  description: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  address: addressSchema,
  operatingHours: [operatingHoursSchema],
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Menu'
    }
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  promotions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Promotion'
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }]
},
  {
    timestamps: true
  });

const Restaurant = model('Restaurant', restaurantSchema);
module.exports = Restaurant;


/*
const restaurantDocumentExample = {
  "_id": "60b8d295f1c2f4a8c1d42c70",
  "name": "Gourmet Bistro",
  "description": "A fine dining experience with gourmet dishes.",
  "phoneNumber": "123-456-7890",
  "email": "info@gourmetbistro.com",
  "address": {
    "line1": "123 Fine Dining St.",
    "line2": "Suite 456",
    "city": "Foodville",
    "state": "CA",
    "zipCode": "98765",
    "country": "USA"
  },
  "operatingHours": [
    {
      "day": "Monday",
      "open": "10:00 AM",
      "close": "10:00 PM"
    },
    {
      "day": "Tuesday",
      "open": "10:00 AM",
      "close": "10:00 PM"
    }
  ],
  "menu": [
    "60b8d295f1c2f4a8c1d42c72",
    "60b8d295f1c2f4a8c1d42c73"
  ],
  "categories": [
    "60b8d295f1c2f4a8c1d42c74",
    "60b8d295f1c2f4a8c1d42c75"
  ],
  "promotions": [
    "60b8d295f1c2f4a8c1d42c76",
    "60b8d295f1c2f4a8c1d42c77"
  ],
  "reviews": [
    "60b8d295f1c2f4a8c1d42c78",
    "60b8d295f1c2f4a8c1d42c79"
  ],
  "reservations": [
    "60b8d295f1c2f4a8c1d42c80",
    "60b8d295f1c2f4a8c1d42c81"
  ],
  "createdAt": "2024-05-30T12:00:00.000Z",
  "updatedAt": "2024-05-30T12:00:00.000Z"
};

module.exports = restaurantDocumentExample;*/