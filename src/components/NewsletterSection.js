import React from "react";

function NewsletterSection() {
    return (
        <section
            className="py-5 text-center"
            style={{
                background: "#ffffff",
                borderTop: "1px solid #f0f0f0",
            }}
        >
            <div className="container">
                <h2 className="fw-bold mb-3">Stay Updated!</h2>
                <p className="text-muted mb-4">
                    Subscribe to our newsletter to get the latest updates, offers, and business insights.
                </p>

                <div
                    className="d-flex justify-content-center align-items-center flex-wrap gap-2"
                    style={{
                        maxWidth: "500px",
                        margin: "0 auto",
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="form-control rounded-pill px-4 py-2"
                        style={{
                            flex: 1,
                            minWidth: "250px",
                            border: "1px solid #dce4f0",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        }}
                    />
                    <button
                        className="btn rounded-pill px-4 py-2 fw-semibold"
                        style={{
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "2px solid #007bff",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#0056b3";
                            e.target.style.borderColor = "#0056b3";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#007bff";
                            e.target.style.borderColor = "#007bff";
                        }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;
