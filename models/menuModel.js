import { Schema } from "mongoose";


const optionSchema = Schema({
    name: {
        type: String,
        required: true
    },
    additionalPrice: {
        type: Number,
        default: 0
    }
});

const customizationSchema = Schema({
    name: {
        type: String,
        required: true
    },
    options: [optionSchema],
    required: {
        type: Boolean,
        default: false
    }, // Whether the customization is mandatory
    multiple: {
        type: Boolean,
        default: false
    } // Whether multiple options can be selected
});

const itemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    customizations: [customizationSchema]
});

const categorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: { type: String },
    imageUrl: { type: String },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const menuSchema = Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    categories: [categorySchema],
    active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    });

const Option = model('Option', optionSchema);
const Customization = model('Customization', customizationSchema);
const Item = model('Item', itemSchema);
const Category = model('Category', categorySchema);
const Menu = model('Menu', menuSchema);

module.exports = { Option, Customization, Item, Category, Menu };


/*
{
  "restaurantId": "60b8d295f1c2f4a8c1d42c70",
  "categories": [
    {
      "name": "Appetizers",
      "description": "Start your meal with our delicious appetizers",
      "imageUrl": "http://example.com/images/appetizers.jpg",
      "items": [
        {
          "name": "Spring Rolls",
          "description": "Crispy rolls stuffed with vegetables",
          "price": 5.99,
          "imageUrl": "http://example.com/images/spring_rolls.jpg",
          "available": true,
          "customizations": [
            {
              "name": "Sauce",
              "required": true,
              "multiple": false,
              "options": [
                {
                  "name": "Sweet Chili",
                  "additionalPrice": 0.5
                },
                {
                  "name": "Soy Sauce",
                  "additionalPrice": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "active": true
}

*/