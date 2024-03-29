import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join to Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can subscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" className="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/signup">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rigths">TRVL 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            >
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
