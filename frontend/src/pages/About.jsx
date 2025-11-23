import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h1>

                <div className="about-content">
                    <motion.div
                        className="profile-section"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="profile-image">
                            <img src="/gagana.jpg" alt="Gagana B M" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="bio-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="bio">
                            Hello! I'm Gagana B M, a passionate MERN stack developer with a strong foundation in Data Structures and Algorithms.
                            I love building modern, responsive web applications and solving complex problems.
                            Currently exploring new technologies and working on exciting projects.
                        </p>

                        <div className="social-links">
                            <a href="https://github.com/Gaganabm30" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/gaganabm" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="https://www.instagram.com/__.g_a_g_a_n_a.__" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram /> Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
