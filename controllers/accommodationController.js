const Accommodation = require('../models/accommodationModel');

// Tüm konaklama önerilerini listele
const listAccommodations = async (req, res) => {
    try {
        
        const { campgroundId } = req.query;
        const filter = campgroundId ? { associatedCampground: campgroundId } : {};

        const accommodations = await Accommodation.find(filter).populate('associatedCampground', 'name location description price');
        
        if (!activities.length) {
            return res.status(404).json({ message: 'Accommodations is not found.' });
        }

        res.status(200).json(accommodations);
       
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving accommodation recommendations', error: error.message });
    }
};



// Belirli bir konaklama detayını getir
const getAccommodationDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const accommodation = await Accommodation.findById(id);
        if (!accommodation) {
            return res.status(404).json({ message: 'Konaklama bulunamadı.' });
        }
        res.status(200).json(accommodation);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu', error: error.message });
    }
};
const addAccommodation = async (req, res) => {
    const { name, location, description, price } = req.body;
    try {
        const newAccommodation = new Accommodation({ name, location, description, price });
        await newAccommodation.save();
        res.status(201).json(newAccommodation); // 201 Created
    } catch (error) {
        res.status(500).json({ message: 'Konaklama eklenirken bir hata oluştu', error: error.message });
    }
};

// Konaklama güncelle
const updateAccommodation = async (req, res) => {
    const { id } = req.params;
    const updates = req.body; // Güncellenecek alanlar
    try {
        const updatedAccommodation = await Accommodation.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedAccommodation) {
            return res.status(404).json({ message: 'Konaklama bulunamadı.' });
        }
        res.status(200).json(updatedAccommodation);
    } catch (error) {
        res.status(500).json({ message: 'Konaklama güncellenirken bir hata oluştu', error: error.message });
    }
};
module.exports = {
    listAccommodations,
    getAccommodationDetails,
    addAccommodation,
    updateAccommodation,
   
};


