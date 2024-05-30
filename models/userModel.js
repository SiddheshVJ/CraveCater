import { Schema } from "mongoose";

const addressSchema = Schema({
    type: {
        type: String,
        enum: ['Home', 'Work', 'Other'],
        default: 'Home'
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
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
    },
    addresses: [addressSchema],
    preferredPaymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery']
    },
    preferredCuisine: [
        {
            type: String
        }
    ],
    dietaryRestrictions: [
        {
            type: String
        }
    ],
    receiveNewsletter: {
        type: Boolean,
        default: true
    },
    notificationPreferences: {
        email: {
            type: Boolean,
            default: true
        },
        sms: {
            type: Boolean,
            default: true
        },
        push: {
            type: Boolean,
            default: true
        }
    },
    orderHistory: [
        {
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order'
            },
            orderDate: { type: Date },
            status: {
                type: String,
                enum: ['Pending', 'Completed', 'Cancelled'],
                default: 'Pending'
            },
            totalAmount: {
                type: Number
            }
        }
    ],
    paymentMethods: [
        {
            cardType: {
                type: String,
                enum: ['Visa', 'MasterCard', 'American Express']
            },
            cardNumber: {
                type: String
            },
            expiryDate: {
                type: String
            },
            cardHolderName: {
                type: String
            }
        }
    ],
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    twoFactorEnabled: {
        type: Boolean,
        default: false
    },
    twoFactorCode: {
        type: String
    },
    twoFactorExpires: {
        type: Date
    },
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

module.exports = model('User', userSchema);