const mongoose = require('mongoose');

const campingHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    campground: { type: mongoose.Schema.Types.ObjectId, ref: 'Campground', required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

const CampingHistory = mongoose.model('CampingHistory', campingHistorySchema);

module.exports = CampingHistory;
