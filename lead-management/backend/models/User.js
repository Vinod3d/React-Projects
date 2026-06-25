import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION, JWT_SECRET } from "../config/Index.js";


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters"],
    },
    email :{
        required: [true, "Please provide an email"],
        type: String,
        unique: true,
        validator: [validator.isEmail, "Please provide a valid email"],
    },
    password : {
        required: [true, "Please provide a password"],
        type: String,
        minLength: 4,
        select: false,
    },
},
{
    timestamps: true,
  }
)


// Hash password before saving to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT token
userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
    });
};


export default mongoose.model("User", userSchema);