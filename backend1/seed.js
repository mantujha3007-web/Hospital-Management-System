import mongoose from 'mongoose';
import Hospital from './models/Hospital.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/healthcare_hackathon";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected for Seeding"))
  .catch(err => console.error(err));

const seedHospitals = [
  {
    name: "City General Hospital",
    specialties: ["ER", "Cardiology"],
    location: { type: "Point", coordinates: [72.8777, 19.0760] }, // Coordinates for Mumbai
    waitTimes: "20 min",
    contact: "555-0123"
  },
  {
    name: "Westside Trauma Center",
    specialties: ["Trauma", "Orthopedics"],
    location: { type: "Point", coordinates: [72.83, 19.10] }, // Nearby location
    waitTimes: "45 min",
    contact: "555-0987"
  }
];

const seedDB = async () => {
  await Hospital.deleteMany({}); // Clears old data
  await Hospital.insertMany(seedHospitals);
  console.log("🌱 Database Seeded with Hospitals!");
  mongoose.connection.close();
};

seedDB();