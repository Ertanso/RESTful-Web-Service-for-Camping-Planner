const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    campsite: { type: mongoose.Schema.Types.ObjectId, ref: 'Campsite', required: true },
}, { timestamps: true });

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
