/*const mongoose = require('mongoose');

const campingHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    campground: { type: mongoose.Schema.Types.ObjectId, ref: 'Campground', required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

const CampingHistory = mongoose.model('CampingHistory', campingHistorySchema);

module.exports = CampingHistory; */

// const mongoose = require('mongoose');

// const campingHistorySchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Kullanıcı kimliği
//     campground: { type: mongoose.Schema.Types.ObjectId, ref: 'Campground' }, // Kamp alanı
//     activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }, // Aktivite
//     accommodation: { type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }, // Konaklama
//     restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }, // Restoran
//     favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }], // Favoriler
//     date: { type: Date, default: Date.now }, // Tarih
// });

// const CampingHistory = mongoose.model('CampingHistory', campingHistorySchema);

// module.exports = CampingHistory;