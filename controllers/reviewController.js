const Review = require('../models/reviewModel');

// Get all reviews for a campsite
const getReviewsForCampsite = async (req, res) => {
    const { campsiteId } = req.params;
    try {
        const reviews = await Review.find({ campsite: campsiteId }).populate('user', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a review
const createReview = async (req, res) => {
    const { content, rating, campsite } = req.body;
    try {
        const review = await Review.create({
            user: req.user.id,
            content,
            rating,
            campsite,
        });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a review
const updateReview = async (req, res) => {
    const { id } = req.params;
    const { content, rating } = req.body;
    try {
        const review = await Review.findOneAndUpdate(
            { _id: id, user: req.user.id },
            { content, rating },
            { new: true }
        );
        if (!review) {
            return res.status(404).json({ message: 'Review not found or not authorized' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findOneAndDelete({ _id: id, user: req.user.id });
        if (!review) {
            return res.status(404).json({ message: 'Review not found or not authorized' });
        }
        res.status(200).json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getReviewsForCampsite,
    createReview,
    updateReview,
    deleteReview,
};
