const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // Gecelik fiyat
    associatedCampground: { type: mongoose.Schema.Types.ObjectId, ref: 'Campsite' },
    createdAt: { type: Date, default: Date.now },
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
