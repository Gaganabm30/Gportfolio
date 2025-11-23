import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        © 2025 <span>Gagana B M</span>. All rights reserved.
                    </p>
                    <div className="footer-social">
                        <a
                            href="https://github.com/Gaganabm30"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/gaganabm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/__.g_a_g_a_n_a.__"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
