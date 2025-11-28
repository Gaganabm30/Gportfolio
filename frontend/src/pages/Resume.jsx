import { motion } from 'framer-motion';
import { FaFileDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import BackgroundAnimation from '../components/BackgroundAnimation';
import './Resume.css';

const Resume = () => {
    const floatingIcons = [
        { Icon: FaBriefcase, delay: 0, position: { top: '15%', left: '10%' } },
        { Icon: FaGraduationCap, delay: 0.5, position: { top: '25%', right: '15%' } },
        { Icon: FaFileDownload, delay: 1, position: { bottom: '20%', left: '12%' } },
    ];

    return (
        <div className="resume">
            <BackgroundAnimation icons={floatingIcons} />
            <div className="resume-container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Resume
                </motion.h1>

                <motion.div
                    className="resume-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="resume-preview glass-card">
                        <object
                            data="/resume.pdf"
                            type="application/pdf"
                            className="resume-iframe"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white' }}>
                                <p>Unable to display PDF file.</p>
                                <a href="/resume.pdf" download className="btn" style={{ marginTop: '1rem' }}>Download instead</a>
                            </div>
                        </object>
                    </div>
                    <a
                        href="/resume.pdf"
                        download="Gagana_BM_Resume.pdf"
                        className="btn download-btn"
                    >
                        <FaFileDownload />
                        <span>Download Resume</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
