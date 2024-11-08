const mongoose = require('mongoose');

const campsiteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    // Additional fields...
}, { timestamps: true });

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
