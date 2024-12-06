const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    associatedCampground: { type: mongoose.Schema.Types.ObjectId, ref: 'Campsite' }, // Doğru referans
    createdAt: { type: Date, default: Date.now },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
