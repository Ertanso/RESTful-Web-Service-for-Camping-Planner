const Comment = require('../models/commentModel');

// Bir kategori ve ID'ye göre yorumları getir
const getComments = async (req, res) => {
    const { category, id } = req.params;
    try {
        const comments = await Comment.find({ category, relatedId: id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Yorumlar alınırken bir hata oluştu', error: error.message });
    }
};

// Belirli bir kamp alanındaki yorumları listele
const listCommentsForCampground = async (req, res) => {
    const { campgroundId } = req.params;

    try {
        const comments = await Comment.find({ category: 'campground', relatedId: campgroundId })
            .populate('user', 'name'); // Yorum yapan kullanıcının adını getir
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Yorumlar alınırken bir hata oluştu', error: error.message });
    }
};

module.exports = {
    listCommentsForCampground,
    getComments,
};


