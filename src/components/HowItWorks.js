import React from "react";

function HowItWorks() {
    return (
        <section className="py-5 bg-light" id="how-it-works">
            <div className="container text-center">
                <h2 className="fw-bold mb-4">How It Works</h2>
                <p className="text-muted mb-5">
                    Finding the right business is simple. Just follow these easy steps.
                </p>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4">
                            <div className="icon-circle bg-primary text-white mx-auto mb-3">
                                <i className="bi bi-search fs-3"></i>
                            </div>
                            <h5 className="fw-semibold">1. Search for a Business</h5>
                            <p className="text-muted">
                                Type what you need and find verified local businesses instantly.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4">
                            <div className="icon-circle bg-success text-white mx-auto mb-3">
                                <i className="bi bi-person-lines-fill fs-3"></i>
                            </div>
                            <h5 className="fw-semibold">2. View Details</h5>
                            <p className="text-muted">
                                Explore ratings, reviews, contact numbers, and service details.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4">
                            <div className="icon-circle bg-warning text-white mx-auto mb-3">
                                <i className="bi bi-building-add fs-3"></i>
                            </div>
                            <h5 className="fw-semibold">3. List Your Business</h5>
                            <p className="text-muted">
                                Join our platform to reach thousands of potential customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for icon circle */}
            <style>{`
                .icon-circle {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
            `}</style>
        </section>
    );
}

export default HowItWorks;
