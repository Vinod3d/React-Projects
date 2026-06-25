import User from "../models/User.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
import { jwtService } from "../services/JwtService.js";

export const register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.find({ email });
        if (existingUser.length > 0) {
           return next(CustomErrorHandler.alreadyExist('User already exists'));
        }

        const user = new User({
            name,
            email,
            password
        })

        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(CustomErrorHandler.badRequest('Please provide email and password'));
    }

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return next(CustomErrorHandler.wrongCredentials('Invalid email or password'));
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return next(CustomErrorHandler.wrongCredentials('Invalid email or password'));
        }

        jwtService(user, 'User logged in successfully', 200, res);
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        }).json({
            success: true,
            message: 'User logged out successfully'
        });
    } catch (error) {
        next(error);
    }
}