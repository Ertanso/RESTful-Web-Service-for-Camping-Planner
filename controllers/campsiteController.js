const Campsite = require('../models/campsiteModel');

// Get all campsites
const getAllCampsites = async (req, res) => {
    try {
        const campsites = await Campsite.find();
        res.status(200).json(campsites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single campsite by ID
const getCampsiteById = async (req, res) => {
    const { id } = req.params;
    try {
        const campsite = await Campsite.findById(id);
        if (!campsite) {
            return res.status(404).json({ message: 'Campsite not found' });
        }
        res.status(200).json(campsite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new campsite
const createCampsite = async (req, res) => {
    const { name, location, description } = req.body;
    try {
        const newCampsite = await Campsite.create({ name, location, description });
        res.status(201).json(newCampsite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a campsite
const updateCampsite = async (req, res) => {
    const { id } = req.params;
    const { name, location, description } = req.body;
    try {
        const updatedCampsite = await Campsite.findByIdAndUpdate(id, { name, location, description }, { new: true });
        if (!updatedCampsite) {
            return res.status(404).json({ message: 'Campsite not found' });
        }
        res.status(200).json(updatedCampsite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a campsite
const deleteCampsite = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCampsite = await Campsite.findByIdAndDelete(id);
        if (!deletedCampsite) {
            return res.status(404).json({ message: 'Campsite not found' });
        }
        res.status(200).json({ message: 'Campsite deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCampsites,
    getCampsiteById,
    createCampsite,
    updateCampsite,
    deleteCampsite,
};
