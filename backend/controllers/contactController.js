const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
