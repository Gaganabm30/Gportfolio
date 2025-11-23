import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import './Home.css';

const Home = () => {
    const floatingIcons = [
        { Icon: FaReact, delay: 0, position: { top: '15%', left: '10%' } },
        { Icon: FaNodeJs, delay: 0.2, position: { top: '25%', right: '15%' } },
        { Icon: SiMongodb, delay: 0.4, position: { bottom: '20%', left: '12%' } },
        { Icon: SiExpress, delay: 0.6, position: { top: '60%', right: '10%' } },
        { Icon: FaDatabase, delay: 0.8, position: { bottom: '30%', right: '20%' } },
        { Icon: SiJavascript, delay: 1, position: { top: '40%', left: '8%' } },
        { Icon: FaCode, delay: 1.2, position: { bottom: '15%', right: '25%' } },
    ];

    return (
        <div className="home">
            {/* Animated Background */}
            <div className="home-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            {/* Floating Tech Icons */}
            <div className="floating-icons">
                {floatingIcons.map(({ Icon, delay, position }, index) => (
                    <motion.div
                        key={index}
                        className="floating-icon"
                        style={position}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: delay,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 2
                        }}
                    >
                        <Icon />
                    </motion.div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="greeting"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.div>

                    <motion.h1
                        className="hero-title gradient-text"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Gagana B M
                    </motion.h1>

                    <motion.div
                        className="title-decoration"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <span className="highlight">MERN Stack Developer</span> |
                        <span className="highlight"> Data Structures & Algorithms</span> |
                        <span className="highlight"> Computer Science Enthusiast</span>
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        Crafting modern, scalable web applications with cutting-edge technologies.
                        Passionate about solving complex problems and building innovative solutions.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <Link to="/about" className="btn">
                            <span>About Me</span>
                        </Link>
                        <Link to="/projects" className="btn btn-secondary">
                            <span>View Projects</span>
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <span>View Resume</span>
                        </a>
                        <a href="/resume.pdf" download className="btn btn-secondary">
                            <span>Download Resume</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        <a href="https://github.com/Gaganabm30" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/gaganabm" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
