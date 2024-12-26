const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Kullanıcı route'unu içe aktarın
//const routeRoutes = require('./routes/routeRoutes'); //route1 için
// Load environment variables
require('dotenv').config();
const mongoose = require('mongoose');
// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // JSON veri gönderimlerini işler
// Import routes

const campsiteRoutes = require('./routes/campsiteRoutes');
const gearRoutes = require('./routes/gearRoutes');
const activityRoutes = require('./routes/activityRoutes');
const profileRoutes = require('./routes/profileRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const routeRoutes = require('./routes/routeRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');



// Route usage
app.use('/api/users', userRoutes);
app.use('/api/campgrounds', campsiteRoutes);
app.use('/api/gear', gearRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/route-recommendations', routeRoutes);
app.use('/api/camping-equipment', equipmentRoutes);
app.use('/api', routeRoutes);

app.use('/api/activities', activityRoutes);

const accommodationRoutes = require('./routes/accommodationRoutes');
app.use('/api/accommodations', accommodationRoutes);

const restaurantRoutes = require('./routes/restaurantRoutes');
app.use('/api/restaurants', restaurantRoutes);

const commentRoutes = require('./routes/commentRoutes');
app.use('/api/comments', commentRoutes);





const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
