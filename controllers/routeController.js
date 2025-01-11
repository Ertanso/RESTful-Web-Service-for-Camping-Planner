/*
const Route = require('../models/routeModel');

// Belirli bir rotanın detaylarını getir
const getRouteDetails = async (req, res) => {
    const { id } = req.params; // Rotanın ID'sini al
    try {
        const route = await Route.findById(id); // Rotayı ID ile bul
        if (!route) {
            return res.status(404).json({ message: 'Rota bulunamadı.' });
        }
        res.status(200).json(route); // Rotayı JSON olarak döndür
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu', error: error.message });
    }
};



const listRouteRecommendations = async (req, res) => {
    try {
        const { startingPoint } = req.query;
        const filter = startingPoint ? { startingPoint } : {};

        // endingPoint alanını Campground detaylarıyla doldur
        const routes = await Route.find(filter).populate('endingPoint', 'name location description');
        if (!routes.length) {
            return res.status(404).json({ message: 'Rota bulunamadı.' });
        }
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
    }
};


module.exports = {
    listRouteRecommendations,
    getRouteDetails,
}; */


// const Route = require('../models/routeModel');
// const Campground = require('../models/campsiteModel');


// // Rota detaylarını getirme
// const getRouteDetails = async (req, res) => {
//     try {
//         const { id } = req.params; // URL'den rota id'sini al

//         // Veritabanında rotayı bul ve endingPoint ile birlikte detayları getir
//         const route = await Route.findById(id).populate('endingPoint', 'name location description');

//         if (!route) {
//             return res.status(404).json({ message: 'Rota bulunamadı.' });
//         }

//         res.status(200).json(route); // Rotanın detaylarını döndür
//     } catch (error) {
//         res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
//     }
// };

// // Rotaları listeleme
// const listRouteRecommendations = async (req, res) => {
//     try {
//         const { startingPoint } = req.query; // Query parametresinden başlangıç noktasını al
//         const filter = startingPoint ? { startingPoint } : {}; // Filtre uygula (eğer varsa)

//         // Rotaları, endingPoint olarak referans edilen Campsite detaylarıyla birlikte getir
//         const routes = await Route.find(filter).populate('endingPoint', 'name location description');
//         if (!routes.length) {
//             return res.status(404).json({ message: 'Rota bulunamadı.' });
//         }

//         res.status(200).json(routes);
//     } catch (error) {
//         res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
//     }
// };

// module.exports = {
//     listRouteRecommendations,
//     getRouteDetails,
    
// };


const Route = require('../models/routeModel');
const Campground = require('../models/campsiteModel');


// Rota detaylarını getirme
const getRouteDetails = async (req, res) => {
    try {
        const { id } = req.params; // URL'den rota id'sini al

        // Veritabanında rotayı bul ve endingPoint ile birlikte detayları getir
        const route = await Route.findById(id).populate('endingPoint', 'name location description');

        if (!route) {
            return res.status(404).json({ message: 'Rota bulunamadı.' });
        }

        res.status(200).json(route); // Rotanın detaylarını döndür
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
    }
};

// Rotaları listeleme
const listRouteRecommendations = async (req, res) => {
    try {
        const { startingPoint } = req.query; // Query parametresinden başlangıç noktasını al
        const filter = startingPoint ? { startingPoint } : {}; // Filtre uygula (eğer varsa)

        // Rotaları, endingPoint olarak referans edilen Campsite detaylarıyla birlikte getir
        const routes = await Route.find(filter).populate('endingPoint', 'name location description');
        if (!routes.length) {
            return res.status(404).json({ message: 'Rota bulunamadı.' });
        }

        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
    }
};

module.exports = {
    listRouteRecommendations,
    getRouteDetails,
    
};