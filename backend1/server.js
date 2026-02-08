import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import Routes
import hospitalRoutes from './routes/hospitals.js';
// import patientRoutes from './routes/patients.js'; // Uncomment when you create this file

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/healthcare_hackathon";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Connection Error:", err));

// Define Routes
// NOTE: In ES Modules, you must include the .js extension when importing local files!
app.use('/api/hospitals', hospitalRoutes);
// app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));