const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    campsite: { type: mongoose.Schema.Types.ObjectId, ref: 'Campsite', required: true },
    // Optional fields...
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
