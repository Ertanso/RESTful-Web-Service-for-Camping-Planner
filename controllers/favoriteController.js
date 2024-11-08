const Favorite = require('../models/favoriteModel');

// Get user's favorite campsites
const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.user.id }).populate('campsite');
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a campsite to favorites
const addFavorite = async (req, res) => {
    const { campsite } = req.body;
    try {
        const existingFavorite = await Favorite.findOne({ user: req.user.id, campsite });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Campsite already in favorites' });
        }

        const favorite = await Favorite.create({
            user: req.user.id,
            campsite,
        });
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Remove a campsite from favorites
const removeFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        const favorite = await Favorite.findOneAndDelete({ _id: id, user: req.user.id });
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found or not authorized' });
        }
        res.status(200).json({ message: 'Favorite removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getFavorites,
    addFavorite,
    removeFavorite,
};
