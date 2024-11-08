const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    ecoFriendly: { type: Boolean, default: false },
    // Additional fields can be added as needed...
}, { timestamps: true });

const Gear = mongoose.model('Gear', gearSchema);

module.exports = Gear;
