const Equipment = require('../models/equipmentModel');

// Kamp ekipman önerilerini listele
const listCampingEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.find(); // Tüm ekipmanları getir
        res.status(200).json(equipment); // JSON olarak döndür
    } catch (error) {
        res.status(500).json({ message: 'Kamp ekipman önerileri alınırken bir hata oluştu', error: error.message });
    }
};

module.exports = {
    listCampingEquipment,
};
