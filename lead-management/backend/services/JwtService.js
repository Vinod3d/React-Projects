import { COOKIE_EXPIRATION } from "../config/Index.js";

export const jwtService = (user, message, statusCode, res) => {
    const token = user.createJWT();
    res.status(statusCode).cookie("token", token, {
        expires: new Date(
            Date.now() + COOKIE_EXPIRATION * 24 * 60 * 60 * 1000 
        ),
        httpOnly: true,
        sameSite: "None",
        secure: true,
    }).json({
        success: true,
        message,
        token,
        user
    })
}