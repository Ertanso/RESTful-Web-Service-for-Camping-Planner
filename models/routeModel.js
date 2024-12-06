/*const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startingPoint: { type: String, required: true },
    endingPoint: { type: mongoose.Schema.Types.ObjectId, ref: 'Campground', required: true }, // Referans
    createdAt: { type: Date, default: Date.now },
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route; */

const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startingPoint: { type: String, required: true },
    endingPoint: { type: mongoose.Schema.Types.ObjectId, ref: 'Campsite', required: true }, // Kamp alanıyla referans
    createdAt: { type: Date, default: Date.now },
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;

