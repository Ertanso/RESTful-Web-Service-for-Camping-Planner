const mongoose = require('mongoose');
const Campground = require('./models/campsiteModel');
const Route = require('./models/routeModel');

mongoose.connect('mongodb://localhost:27017/camping-planner', { useNewUrlParser: true, useUnifiedTopology: true });

const seedData = async () => {
    const campground = await Campground.create({
        name: 'Beautiful Campground',
        location: 'Mountain Range',
        description: 'A scenic campground in the mountains.',
    });

    await Route.create([
        {
            name: 'Scenic Mountain Route',
            description: 'A beautiful route through the mountains.',
            startingPoint: 'CityA',
            endingPoint: campground._id,
        },
        {
            name: 'River Side Route',
            description: 'A peaceful route along the river.',
            startingPoint: 'CityA',
            endingPoint: campground._id,
        },
    ]);

    console.log('Veriler başarıyla eklendi!');
    mongoose.disconnect();
};

seedData();
