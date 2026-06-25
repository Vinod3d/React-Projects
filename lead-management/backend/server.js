import express from 'express';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import { FRONTEND_URL, JWT_SECRET, MONGO_URI, PORT } from './config/Index.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import errorHandlers from './middleware/errorHandlers.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use(cookieParser(JWT_SECRET));

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Import routes
app.use('/api/auth', authRoutes);
app.use(errorHandlers);


const port = PORT || 5000;


const start = async () => {
    try {
        await connectDB(MONGO_URI);
        app.listen(port, () => {
        console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

start();