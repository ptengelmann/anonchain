// server/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import dataRoutes from './routes/dataRoutes';
import authRoutes from './routes/authRoutes'; // Import auth routes

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/data', dataRoutes);
app.use('/api/auth', authRoutes); // Mount authentication routes

export default app;
