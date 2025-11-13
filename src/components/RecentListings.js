import React from "react";

function RecentListings() {
    const listings = [
        {
            name: "Everest View Restaurant",
            category: "Restaurant",
            location: "Kathmandu, Nepal",
            phone: "+977 9801234567",
            email: "info@everestview.com",
            image: "https://images.unsplash.com/photo-1555992336-03a23cbe927b?auto=format&fit=crop&w=800&q=60",
            userImage: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4.8,
        },
        {
            name: "Himalayan Grand Hotel",
            category: "Hotel",
            location: "Pokhara, Nepal",
            phone: "+977 9811122334",
            email: "contact@himalayangrand.com",
            image: "https://images.unsplash.com/photo-1582719478181-2fdf2d6f1f35?auto=format&fit=crop&w=800&q=60",
            userImage: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 4.6,
        },
        {
            name: "City Health Hospital",
            category: "Hospital",
            location: "Biratnagar, Nepal",
            phone: "+977 9841239876",
            email: "care@cityhealth.com",
            image: "https://images.unsplash.com/photo-1588776814546-5b32a0d69c83?auto=format&fit=crop&w=800&q=60",
            userImage: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 4.9,
        },
        {
            name: "GlowUp Beauty Salon",
            category: "Beauty Salon",
            location: "Lalitpur, Nepal",
            phone: "+977 9808765432",
            email: "hello@glowupbeauty.com",
            image: "https://images.unsplash.com/photo-1604654894612-742ffac636f6?auto=format&fit=crop&w=800&q=60",
            userImage: "https://randomuser.me/api/portraits/women/14.jpg",
            rating: 4.7,
        },
    ];

    return (
        <section className="py-5" style={{ backgroundColor: "#f8fbff" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ fontSize: "2.2rem", color: "#1c1c1c" }}>
                        🏢 Recent Listings
                    </h2>
                    <p className="text-muted mb-0">
                        Discover newly added businesses and services near you.
                    </p>
                </div>

                <div className="row g-4">
                    {listings.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                            <div
                                className="card border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                    backgroundColor: "#fff",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 10px 25px rgba(0,0,0,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 15px rgba(0,0,0,0.05)";
                                }}
                            >
                                {/* Cover image */}
                                <div
                                    className="position-relative"
                                    style={{ height: "170px", overflow: "hidden" }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <span
                                        className="badge position-absolute top-0 end-0 m-2"
                                        style={{
                                            backgroundColor: "rgba(0,123,255,0.9)",
                                            color: "#fff",
                                            fontSize: "0.85rem",
                                            padding: "6px 10px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        {item.category}
                                    </span>
                                </div>

                                {/* Card content */}
                                <div className="card-body text-start">
                                    <div className="d-flex align-items-center mb-3">
                                        <div
                                            className="rounded-circle overflow-hidden border"
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <img
                                                src={item.userImage}
                                                alt="User"
                                                className="w-100 h-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="fw-semibold mb-1">{item.name}</h6>
                                            <p className="text-muted small mb-0">
                                                <i className="bi bi-geo-alt"></i> {item.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact info */}
                                    <div className="small text-dark mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <span>{item.phone}</span>
                                    </div>
                                    <div className="small text-dark mb-3">
                                        <i className="bi bi-envelope text-primary me-2"></i>
                                        <span>{item.email}</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center border-top pt-2">
                                        <div className="text-warning">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`bi ${i < Math.round(item.rating)
                                                            ? "bi-star-fill"
                                                            : "bi-star"
                                                        }`}
                                                ></i>
                                            ))}
                                        </div>
                                        <span
                                            className="fw-semibold"
                                            style={{ color: "#007bff", fontSize: "0.9rem" }}
                                        >
                                            {item.rating} ★
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-5">
                    <button
                        className="btn px-4 py-2 fw-semibold"
                        style={{
                            border: "2px solid #007bff",
                            color: "#007bff",
                            background: "#fff",
                            borderRadius: "30px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "#007bff";
                            e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "#fff";
                            e.target.style.color = "#007bff";
                        }}
                    >
                        View All Listings
                    </button>
                </div>
            </div>
        </section>
    );
}

export default RecentListings;
