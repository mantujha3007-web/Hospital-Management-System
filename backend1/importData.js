import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Hospital from './models/Hospital.js';

dotenv.config();

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/healthcare_hackathon";
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

const importData = async () => {
  try {
    // 1. Read your JSON file
    const data = fs.readFileSync('./hospitals.json', 'utf-8');
    const jsonHospitals = JSON.parse(data);

    console.log(`📂 Found ${jsonHospitals.length} hospitals. Processing...`);

    // 2. Add Fake Coordinates to each hospital
    const hospitalsWithGeo = jsonHospitals.map(h => {
      return {
        ...h, // Copy all existing fields (sr_no, name, address, etc.)
        
        // Add Defaults
        specialties: ["General Care", "Trauma"],
        waitTimes: Math.floor(Math.random() * 60) + " min", // Random wait time

        // 📍 SIMULATE LOCATION (Random Spot in Mumbai)
        // Mumbai Latitude: 18.90 to 19.25
        // Mumbai Longitude: 72.80 to 73.00
        location: {
          type: "Point",
          coordinates: [
            72.80 + Math.random() * (73.00 - 72.80), // Longitude
            18.90 + Math.random() * (19.25 - 18.90)  // Latitude
          ]
        }
      };
    });

    // 3. Delete old data and insert new
    await Hospital.deleteMany({});
    console.log("🧹 Old data cleared.");

    await Hospital.insertMany(hospitalsWithGeo);
    console.log(`🎉 Successfully Imported ${hospitalsWithGeo.length} Hospitals with locations!`);

    process.exit();
  } catch (error) {
    console.error("❌ Error Importing:", error);
    process.exit(1);
  }
};

importData();