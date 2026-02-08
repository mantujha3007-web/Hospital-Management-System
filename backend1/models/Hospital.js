import mongoose from 'mongoose';

const HospitalSchema = new mongoose.Schema({
  // New fields from your JSON
  sr_no: String,
  ward: String,
  name: String,
  address: String,
  no_of_beds: Number,
  contact_no: String, // Note: Your JSON has "contact_no", not "contact"

  // Fields we add automatically
  specialties: { type: [String], default: ["General", "Emergency"] }, 
  waitTimes: { type: String, default: "15 min" }, 

  // CRITICAL: The Map REQUIRES this. We will generate it in the script.
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' } // [Longitude, Latitude]
  }
});

// This index allows the "Find Nearby" query to work
HospitalSchema.index({ location: '2dsphere' });

export default mongoose.model('Hospital', HospitalSchema);