import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const { data } = await api.get('/skills');
            setSkills(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching skills:', error);
            setLoading(false);
        }
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="skills">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Skills
                </motion.h1>

                {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
                    <motion.div
                        key={category}
                        className="skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h2 className="category-title">{category}</h2>
                        <div className="skill-tags">
                            {categorySkills.map((skill) => (
                                <span key={skill._id} className="skill-tag">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
