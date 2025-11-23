import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import api from '../api/axios';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await api.get('/projects');
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="projects">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Projects
                </motion.h1>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project._id}
                            className="project-card card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="project-image">
                                <img src={project.image.startsWith('http') ? project.image : `http://localhost:5000${project.image}`} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags?.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
