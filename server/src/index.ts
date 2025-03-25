import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import dataRoutes from './routes/dataRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// API Routes
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
