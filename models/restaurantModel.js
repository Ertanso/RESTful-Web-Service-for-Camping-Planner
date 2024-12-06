const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true }, // Mutfağın türü (örneğin: İtalyan, Türk)
    rating: { type: Number, default: 0 }, // Ortalama puan
    createdAt: { type: Date, default: Date.now },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
