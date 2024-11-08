const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String },
    favoriteCampsites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Campsite' }],
    pastTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    // Add additional fields as needed...
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
