const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  lastVisit: Date,
  missedMeds: Number,
  wearableStatus: String, // "Normal", "Irregular"
  riskScore: Number
});

module.exports = mongoose.model('Patient', PatientSchema);