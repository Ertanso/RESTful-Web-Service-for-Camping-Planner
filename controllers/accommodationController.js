const Accommodation = require('../models/accommodationModel');


// // Tüm konaklama önerilerini listele
// const listAccommodations = async (req, res) => {
//     try {
        

//         const accommodations = await Accommodation.find();
//         res.status(200).json(accommodations);
       
//     } catch (error) {
//         res.status(500).json({ message: 'An error occurred while retrieving accommodation recommendations', error: error.message });
//     }
// };
const listAccommodations = async (req, res) => {
    try {
       
        const accommodations = await Accommodation.find({ campId });
        res.status(200).json(accommodations);

    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving accommodation recommendations', error: error.message });
    }
};

const mongoose = require('mongoose');
//Belirli bir konaklama detayını getir
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




module.exports = {
   
    listAccommodations,
    getAccommodationDetails,   
};


