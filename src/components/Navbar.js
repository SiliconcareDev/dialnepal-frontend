// src/components/Navbar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4 text-uppercase" href="/">
                    <i className="bi bi-telephone-forward-fill text-danger me-2"></i>
                    DialNepal
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/listings">Listings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 rounded-pill"
                            type="search"
                            placeholder="Search businesses..."
                            aria-label="Search"
                        />
                        <button className="btn btn-danger rounded-pill" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

