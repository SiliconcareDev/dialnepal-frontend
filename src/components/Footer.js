// src/components/Footer.js
import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container text-center">
                <h4 className="fw-bold mb-3">DialNepal</h4>
                <p className="text-muted mb-4">
                    Your trusted business directory for every city in Nepal.
                </p>

                <div className="d-flex justify-content-center gap-3 mb-3">
                    <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
                </div>

                <p className="mb-0 text-muted">
                    © {new Date().getFullYear()} DialNepal. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
