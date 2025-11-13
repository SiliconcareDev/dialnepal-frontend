import React from "react";

function HeroSection() {
    return (
        <section
            className="hero-section d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #f8fbff 0%, #f0f6ff 100%)",
                fontFamily: "'Poppins', sans-serif",
                minHeight: "90vh",
                padding: "60px 0",
            }}
        >
            {/* Decorative Background Shapes */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "rgba(0,123,255,0.07)",
                    top: "-80px",
                    left: "-100px",
                    zIndex: 0,
                }}
            ></div>
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "300px",
                    height: "300px",
                    background: "rgba(255,193,7,0.1)",
                    bottom: "-60px",
                    right: "-80px",
                    zIndex: 0,
                }}
            ></div>

            {/* Main Content */}
            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Heading */}
                <h1
                    className="fw-bold mb-3"
                    style={{
                        color: "#1c1c1c",
                        fontSize: "3rem",
                        lineHeight: "1.3",
                    }}
                >
                    Discover Nepal’s Best <br />
                    <span style={{ color: "#007bff" }}>Businesses & Services</span>
                </h1>

                <p
                    className="text-muted mb-4 mx-auto"
                    style={{
                        maxWidth: "700px",
                        fontSize: "1.1rem",
                        lineHeight: "1.7",
                    }}
                >
                    Find verified businesses, professionals, and service providers — all in one place.
                </p>

                {/* Search Bar */}
                <div
                    className="bg-white rounded-4 shadow-sm p-3 mx-auto d-flex align-items-center justify-content-between"
                    style={{
                        maxWidth: "800px",
                        border: "2px solid #d0e2ff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                >
                    <div className="d-flex align-items-center flex-grow-1">
                        <span
                            className="input-group-text bg-transparent border-0 fs-4 text-primary"
                            style={{
                                marginRight: "10px",
                                borderRight: "2px solid #cce5ff",
                            }}
                        >
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-0 fs-5"
                            placeholder="Search for businesses, services, or categories..."
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                color: "#333",
                            }}
                        />
                    </div>
                    <button
                        className="btn rounded-3 px-4 py-2 fw-semibold"
                        style={{
                            border: "2px solid #007bff",
                            background: "linear-gradient(90deg, #007bff, #00b4d8)",
                            color: "#fff",
                            boxShadow: "0 3px 10px rgba(0,123,255,0.25)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "linear-gradient(90deg, #0056b3, #007bff)";
                            e.target.style.borderColor = "#0056b3";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "linear-gradient(90deg, #007bff, #00b4d8)";
                            e.target.style.borderColor = "#007bff";
                        }}
                    >
                        Search
                    </button>
                </div>



            </div>
        </section>
    );
}

export default HeroSection;
