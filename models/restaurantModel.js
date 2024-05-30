import { Schema } from "mongoose";

const mongoose = require('mongoose');

// Define schema for operating hours
const operatingHoursSchema = Schema({
    day: {
        type: String,
        required: true
    },
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    }
});

// Define schema for reviews
const reviewSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define schema for restaurant's social media links
const socialMediaSchema = Schema({
    platform: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

// Define schema for restaurant
const restaurantSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
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
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true,
                default: 'Point'
            },
            coordinates: {
                type: [Number],
                required: true
            } // [longitude, latitude]
        }
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        website: {
            type: String
        }
    },
    operatingHours: [operatingHoursSchema],
    cuisines: [{
        type: String,
        required: true
    }],
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    reviews: [reviewSchema],
    socialMediaLinks: [socialMediaSchema],
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    },
    tags: [
        {
            type: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    });

// Define indexes for geospatial queries
restaurantSchema.index({ 'address.location': '2dsphere' });

const OperatingHours = mongoose.model('OperatingHours', operatingHoursSchema);
const Review = mongoose.model('Review', reviewSchema);
const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { OperatingHours, Review, SocialMedia, Restaurant };

/*
{
  "name": "Gourmet Bistro",
  "description": "A fine dining experience with gourmet dishes.",
  "imageUrl": "http://example.com/images/gourmet_bistro.jpg",
  "owner": "60b8d295f1c2f4a8c1d42c70",
  "address": {
    "line1": "123 Fine Dining St.",
    "line2": "Suite 456",
    "city": "Foodville",
    "state": "CA",
    "zipCode": "98765",
    "country": "USA",
    "location": {
      "type": "Point",
      "coordinates": [-122.4194, 37.7749]
    }
  },
  "contact": {
    "phone": "123-456-7890",
    "email": "contact@gourmetbistro.com",
    "website": "http://gourmetbistro.com"
  },
  "operatingHours": [
    {
      "day": "Monday",
      "openTime": "10:00 AM",
      "closeTime": "10:00 PM"
    },
    {
      "day": "Tuesday",
      "openTime": "10:00 AM",
      "closeTime": "10:00 PM"
    }
  ],
  "cuisines": ["French", "Gourmet"],
  "averageRating": 4.5,
  "reviews": [
    {
      "userId": "60b8d295f1c2f4a8c1d42c71",
      "rating": 5,
      "comment": "Excellent food and service!",
      "createdAt": "2024-05-30T12:34:56Z"
    }
  ],
  "socialMediaLinks": [
    {
      "platform": "Facebook",
      "link": "http://facebook.com/gourmetbistro"
    },
    {
      "platform": "Instagram",
      "link": "http://instagram.com/gourmetbistro"
    }
  ],
  "menu": "60b8d295f1c2f4a8c1d42c72",
  "tags": ["Fine Dining", "Romantic"],
  "createdAt": "2024-05-30T12:00:00Z",
  "updatedAt": "2024-05-30T12:00:00Z"
}


*/