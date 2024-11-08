const Gear = require('../models/gearModel');

// Get all gear items
const getAllGear = async (req, res) => {
    try {
        const gear = await Gear.find();
        res.status(200).json(gear);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single gear item by ID
const getGearById = async (req, res) => {
    const { id } = req.params;
    try {
        const gearItem = await Gear.findById(id);
        if (!gearItem) {
            return res.status(404).json({ message: 'Gear item not found' });
        }
        res.status(200).json(gearItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new gear item
const createGear = async (req, res) => {
    const { name, category, description, ecoFriendly } = req.body;
    try {
        const newGear = await Gear.create({ name, category, description, ecoFriendly });
        res.status(201).json(newGear);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a gear item
const updateGear = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, ecoFriendly } = req.body;
    try {
        const updatedGear = await Gear.findByIdAndUpdate(id, { name, category, description, ecoFriendly }, { new: true });
        if (!updatedGear) {
            return res.status(404).json({ message: 'Gear item not found' });
        }
        res.status(200).json(updatedGear);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a gear item
const deleteGear = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGear = await Gear.findByIdAndDelete(id);
        if (!deletedGear) {
            return res.status(404).json({ message: 'Gear item not found' });
        }
        res.status(200).json({ message: 'Gear item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllGear,
    getGearById,
    createGear,
    updateGear,
    deleteGear,
};
