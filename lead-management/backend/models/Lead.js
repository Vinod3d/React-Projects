import mongoose from "mongoose";
import validator from "validator"; 

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters"],
    },
    email: {
        required: [true, "Please provide an email"],
        type: String,
        unique: true,
        validator: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
     status: {
        type: String,
        enum: ['New', 'Contacted', 'Qualified', 'Lost', 'Cancelled', 'Confirmed'],
        default: 'New',
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,       
})

export default mongoose.model("Lead", leadSchema);