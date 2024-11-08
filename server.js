const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Kullanıcı route'unu içe aktarın

// Load environment variables
dotenv.config();

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

// Route usage
app.use('/api/users', userRoutes);
app.use('/api/campsites', campsiteRoutes);
app.use('/api/gear', gearRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/favorites', favoriteRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
