const Profile = require('../models/profileModel');

// Get user's profile
const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('favoriteCampsites pastTrips');
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user's profile
const updateProfile = async (req, res) => {
    const { bio, favoriteCampsites, pastTrips } = req.body;
    try {
        const profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { bio, favoriteCampsites, pastTrips },
            { new: true }
        ).populate('favoriteCampsites pastTrips');

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProfile,
    updateProfile,
};
