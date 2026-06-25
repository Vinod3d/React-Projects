import { config } from "dotenv";
config();

export const {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    JWT_EXPIRATION,
    COOKIE_EXPIRATION,
    FRONTEND_URL,
    MODE
} = process.env;