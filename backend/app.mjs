import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/config.mjs';
import userRoute from './src/routes/userRoute.mjs';
import productRoutes from './src/routes/productRoute.mjs';
import authRoutes from './src/routes/authRoute.mjs';


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoutes);
app.use('/api/auth' , authRoutes)

export default app;
