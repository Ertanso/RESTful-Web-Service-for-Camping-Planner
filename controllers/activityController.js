const Activity = require('../models/activityModel');

// Get all activities
const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single activity by ID
const getActivityById = async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await Activity.findById(id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new activity
const createActivity = async (req, res) => {
    const { name, type, description, ecoFriendly, location } = req.body;
    try {
        const newActivity = await Activity.create({ name, type, description, ecoFriendly, location });
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an activity
const updateActivity = async (req, res) => {
    const { id } = req.params;
    const { name, type, description, ecoFriendly, location } = req.body;
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(id, { name, type, description, ecoFriendly, location }, { new: true });
        if (!updatedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete an activity
const deleteActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedActivity = await Activity.findByIdAndDelete(id);
        if (!deletedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Etkinlikleri listeleme
const listActivities = async (req, res) => {
    try {
        const { campgroundId } = req.params;
        const filter = campgroundId ? { associatedCampground: campgroundId } : {};

        // Filtreye göre etkinlikleri getir ve associatedCampground detaylarını dahil et
        const activities = await Activity.find(filter).populate('associatedCampground', 'name location description');

        if (!activities.length) {
            return res.status(404).json({ message: 'Etkinlik bulunamadı.' });
        }

        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu.', error: error.message });
    }
};







// Belirli bir aktivitenin detaylarını getir
const getActivityDetails = async (req, res) => {
    const { id } = req.params; // Aktivite ID'sini al
    try {
        const activity = await Activity.findById(id); // Aktiviteyi bul
        if (!activity) {
            return res.status(404).json({ message: 'Aktivite bulunamadı.' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: 'Bir hata oluştu', error: error.message });
    }
};


module.exports = {
    getAllActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity,
    listActivities,
    listActivities,
    getActivityDetails,
};