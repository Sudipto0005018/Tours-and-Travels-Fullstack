import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="layout-footer bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ fontFamily: 'serif' }}>Contact Us</h2>
                        <p>Have questions? Get in touch with us.</p>
                        <div style={{ padding: '20px' }}>
                            <Link to="/">
                                {/* You can link to your contact page */}
                                <Button variant="secondary">Follow Us</Button>
                            </Link>
                        </div>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
                                <FaGithub />
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="google">
                                <FaGoogle />
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="whatsapp">
                                <FaWhatsapp />
                            </a>
                        </div>
                        <hr style={{ color: 'whitesmoke' }} />
                        <p>©2024, Wanderlust. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
