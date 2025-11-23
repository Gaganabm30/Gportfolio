const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String },
    description: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Achievement', achievementSchema);
