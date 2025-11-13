import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <footer
            className="text-dark pt-5 mt-auto"
            style={{
                background: "linear-gradient(135deg, #f9fafc 0%, #eef2f7 100%)",
                borderTop: "1px solid #e0e4ea",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.9rem",
                color: "#555",
                marginTop: "auto",
            }}
        >
            <div className="container">
                <div className="row gy-4">
                    {/* Brand Section */}
                    <div className="col-md-4">
                        <img
                            src="/logo.png"
                            alt="DialNepal Logo"
                            width="180"
                            height="55"
                            className="mb-3"
                            style={{ objectFit: "contain" }}
                        />
                        <p className="text-muted small lh-lg mb-0">
                            Discover trusted businesses, services, and local experiences across
                            Nepal — connecting people and opportunities seamlessly.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2">
                        <h6 className="fw-semibold mb-3 text-uppercase text-secondary">
                            Quick Links
                        </h6>
                        <ul className="list-unstyled text-muted small mb-0">
                            <li><a href="/" className="footer-link">Home</a></li>
                            <li><a href="/about" className="footer-link">About</a></li>
                            <li><a href="/contact" className="footer-link">Contact</a></li>
                            <li><a href="/listings" className="footer-link">Listings</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-md-3">
                        <h6 className="fw-semibold mb-3 text-uppercase text-secondary">
                            Our Services
                        </h6>
                        <ul className="list-unstyled text-muted small mb-0">
                            <li>Business Directory</li>
                            <li>Promotions & Ads</li>
                            <li>Verified Listings</li>
                            <li>Local Support</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="col-md-3">
                        <h6 className="fw-semibold mb-3 text-uppercase text-secondary">
                            Connect With Us
                        </h6>
                        <div className="d-flex gap-3 fs-5 mb-3">
                            <a
                                href="https://facebook.com"
                                aria-label="Facebook"
                                className="social-icon"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                aria-label="Instagram"
                                className="social-icon"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                aria-label="Twitter"
                                className="social-icon"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                aria-label="YouTube"
                                className="social-icon"
                            >
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>

                        <div className="text-muted small">
                            <i className="bi bi-telephone text-primary me-1"></i> +977 9800000000 <br />
                            <i className="bi bi-envelope text-primary me-1"></i> info@dialnepal.com
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: "#dee2e6" }} />
                <div className="text-center text-muted small pb-4">
                    © {new Date().getFullYear()} <strong>DialNepal</strong> | Designed with ❤️ in Nepal
                </div>
            </div>

            {/* Inline CSS */}
            <style jsx="true">{`
                .footer-link {
                    text-decoration: none;
                    color: #6c757d;
                    display: inline-block;
                    margin-bottom: 6px;
                    transition: all 0.3s ease;
                }
                .footer-link:hover {
                    color: #007bff;
                    transform: translateX(3px);
                }
                .social-icon {
                    color: #6c757d;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    color: #007bff;
                    transform: scale(1.15);
                }
                footer {
                    width: 100%;
                    bottom: 0;
                }
                
            `}</style>
        </footer>
    );
};

export default Footer;
