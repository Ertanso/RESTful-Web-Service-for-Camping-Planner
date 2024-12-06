const Restaurant = require('../models/restaurantModel');

// Tüm restoran önerilerini listele
const listRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Restoran önerileri alınırken bir hata oluştu', error: error.message });
    }
};

module.exports = {
    listRestaurants,
};

// Belirli bir restoran detayını getir
const getRestaurantDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restoran bulunamadı.' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu', error: error.message });
    }
};

module.exports = {
    listRestaurants,
    getRestaurantDetails,
};
