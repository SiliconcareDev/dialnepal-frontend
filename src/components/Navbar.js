import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-white shadow-sm sticky-top"
            style={{
                fontFamily: "'Poppins', sans-serif",
                transition: "all 0.3s ease",
                zIndex: 1000,
                fontSize: "0.95rem",
            }}
        >
            <div className="container py-1">
                {/* Brand */}
                <Link
                    className="navbar-brand d-flex align-items-center gap-2"
                    to="/"
                    style={{ textDecoration: "none" }}
                >
                    <img
                        src="/logo.png"
                        alt="DialNepal"
                        width="170"
                        height="50"
                        className="rounded"
                        style={{ objectFit: "contain" }}
                    />
                </Link>

                {/* Toggle (Mobile) */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list fs-3 text-primary"></i>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        {/* Free Listing */}
                        <li className="nav-item mx-1">
                            <Link
                                to="/free-listing"
                                className="btn btn-primary rounded-pill px-3 py-1 fw-semibold shadow-sm"
                                style={{
                                    backgroundColor: "#e7f1ff",
                                    color: "#0d6efd",
                                    border: "1px solid #cfe2ff",
                                }}
                            >
                                <i className="bi bi-plus-circle me-1"></i> Free Listing
                            </Link>
                        </li>

                        {/* Advertise */}
                        <li className="nav-item mx-1">
                            <Link
                                to="/advertise"
                                className="btn rounded-pill px-3 py-1 fw-semibold shadow-sm"
                                style={{
                                    backgroundColor: "#fff6e6",
                                    color: "#f7b267",
                                    border: "1px solid #ffe0b2",
                                }}
                            >
                                <i className="bi bi-bullseye me-1"></i> Advertise
                            </Link>
                        </li>

                        {/* Login */}
                        <li className="nav-item mx-1">
                            <Link
                                to="/login"
                                className="btn rounded-pill px-3 py-1 fw-medium shadow-sm"
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    color: "#495057",
                                    border: "1px solid #dee2e6",
                                }}
                            >
                                <i className="bi bi-person me-1"></i> Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Custom CSS */}
            <style jsx="true">{`
                .btn {
                    transition: all 0.25s ease;
                }
                .btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }
                .navbar {
                    backdrop-filter: blur(8px);
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
