const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: [String],
    githubLink: { type: String },
    demoLink: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
