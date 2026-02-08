import express from 'express';
import Hospital from '../models/Hospital.js'; // Note the .js extension

const router = express.Router();

// POST: Add a new hospital
router.post('/', async (req, res) => {
    try {
        const newHospital = new Hospital(req.body);
        const saved = await newHospital.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET: Find Nearby Hospitals
router.get('/nearby', async (req, res) => {
    const { lat, long } = req.query;

    if (!lat || !long) {
        return res.status(400).json("Latitude and Longitude are required");
    }

    try {
        const hospitals = await Hospital.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(long), parseFloat(lat)]
                    },
                    $maxDistance: 5000 // 5km
                }
            }
        });
        res.status(200).json(hospitals);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;