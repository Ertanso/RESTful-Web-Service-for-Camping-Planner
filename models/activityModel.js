const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., hiking, bird watching
    description: { type: String, required: true },
    ecoFriendly: { type: Boolean, default: true },
    location: { type: String },
    // Additional fields can be added as needed...
}, { timestamps: true });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
