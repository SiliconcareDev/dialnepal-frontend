import React from "react";

function PartnerWithUs() {
    return (
        <section
            className="py-5 position-relative text-center"
            style={{
                background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)",
                overflow: "hidden",
            }}
        >
            {/* Decorative background circles */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "300px",
                    height: "300px",
                    background: "rgba(0,123,255,0.06)",
                    top: "-80px",
                    left: "-100px",
                    zIndex: 0,
                }}
            ></div>
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "250px",
                    height: "250px",
                    background: "rgba(255,193,7,0.1)",
                    bottom: "-60px",
                    right: "-80px",
                    zIndex: 0,
                }}
            ></div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <h2 className="fw-bold mb-3">Partner With Us</h2>
                <p className="text-muted mb-4 fs-5">
                    Join thousands of businesses already growing with <strong>DialNepal</strong>.
                    Get discovered, attract more customers, and manage your online reputation.
                </p>
                <button
                    className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold"
                    style={{
                        border: "2px solid #007bff",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = "#007bff";
                        e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#007bff";
                    }}
                >
                    List Your Business
                </button>
            </div>
        </section>
    );
}

export default PartnerWithUs;
