import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './Achievements.css';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAchievements();
    }, []);

    const fetchAchievements = async () => {
        try {
            const { data } = await api.get('/achievements');
            setAchievements(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching achievements:', error);
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="achievements">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Achievements
                </motion.h1>

                <div className="timeline">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={achievement._id}
                            className="timeline-item card"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {achievement.image && (
                                <div className="achievement-image">
                                    <img src={achievement.image} alt={achievement.title} />
                                </div>
                            )}
                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                {achievement.date && <p className="date">{achievement.date}</p>}
                                <p className="description">{achievement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
