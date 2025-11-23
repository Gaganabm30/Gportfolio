const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Frontend, Backend, Tools, etc.
    image: { type: String } // Optional icon URL
});

module.exports = mongoose.model('Skill', skillSchema);
