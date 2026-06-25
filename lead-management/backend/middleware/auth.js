import { JWT_SECRET } from "../config/Index.js";
import jwt from "jsonwebtoken";
import CustomErrorHandler from "../services/CustomErrorHandler.js";

const auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return next(CustomErrorHandler.unAuthorized("You Are Not logged in"));
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export default auth;