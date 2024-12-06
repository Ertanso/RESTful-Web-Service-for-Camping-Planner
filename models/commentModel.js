const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    category: { type: String, required: true }, // Örneğin: "campground", "route", "activity"
    relatedId: { type: mongoose.Schema.Types.ObjectId, required: true }, // İlgili öğenin ID'si
    createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
