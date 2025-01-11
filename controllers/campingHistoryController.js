const CampingHistory = require('../models/campingHistoryModel');

// Kullanıcının kamp geçmişini listele
const listCampingHistory = async (req, res) => {
    const userId = req.user.id; // Kullanıcı kimliği (protect middleware ile gelir)

    try {
        const history = await CampingHistory.find({ user: userId })
            .populate('campground', 'name location ') // Kamp alanı bilgilerini ekle
            .populate('activity', 'name location associatedCampground') // Aktivite bilgilerini ekle
            .populate('accommodation', 'name  location price') // Konaklama bilgilerini ekle
            .populate('restaurant', 'name location: rating') // Restoran bilgilerini ekle
            .populate('favorites', 'name'); // Favori bilgilerini ekle
        
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Kamp geçmişi alınırken bir hata oluştu', error: error.message });
    }
};

module.exports = { listCampingHistory };
