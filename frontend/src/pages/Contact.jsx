import { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <div className="contact">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Contact Me
                </motion.h1>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <form onSubmit={handleSubmit} className="contact-form card">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
