const express = require('express');
const { getAchievements, createAchievement, updateAchievement, deleteAchievement } = require('../controllers/achievementController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAchievements);
router.post('/', protect, createAchievement);
router.put('/:id', protect, updateAchievement);
router.delete('/:id', protect, deleteAchievement);

module.exports = router;
