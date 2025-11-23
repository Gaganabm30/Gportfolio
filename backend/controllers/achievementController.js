const Achievement = require('../models/Achievement');

exports.getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAchievement = async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        const savedAchievement = await achievement.save();
        res.status(201).json(savedAchievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(achievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAchievement = async (req, res) => {
    try {
        await Achievement.findByIdAndDelete(req.params.id);
        res.json({ message: 'Achievement deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
