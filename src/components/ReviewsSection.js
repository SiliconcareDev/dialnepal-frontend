import React from "react";

function ReviewsSection() {
    const reviews = [
        {
            name: "Sanjay Thapa",
            role: "Business Owner, Pokhara",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            review:
                "DialNepal has transformed the way my restaurant connects with customers. The listing process was smooth, and the visibility we gained is amazing!",
            rating: 5,
        },
        {
            name: "Asha Shrestha",
            role: "Salon Manager, Kathmandu",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            review:
                "Very user-friendly platform! I’ve received multiple new customers after listing my business here. The support team is very responsive too.",
            rating: 4.8,
        },
        {
            name: "Kiran Lama",
            role: "Hotel Manager, Chitwan",
            image: "https://randomuser.me/api/portraits/men/40.jpg",
            review:
                "I highly recommend DialNepal for any local business owner. It’s simple, effective, and helps customers find us easily.",
            rating: 4.9,
        },
        {
            name: "Sita Gurung",
            role: "Teacher, Biratnagar",
            image: "https://randomuser.me/api/portraits/women/52.jpg",
            review:
                "I often use DialNepal to find trusted local services. The interface is clean and results are accurate. Love it!",
            rating: 5,
        },
    ];

    return (
        <section
            className="py-5 position-relative"
            style={{
                background: "linear-gradient(135deg, #f9fbff 0%, #eef5ff 100%)",
            }}
        >
            <div className="container">
                {/* Title */}
                <div className="text-center mb-5">
                    <h2
                        className="fw-bold"
                        style={{ color: "#1c1c1c", fontSize: "2.2rem" }}
                    >
                        💬 Our Reviews
                    </h2>
                    <p className="text-muted mb-0">
                        What Our Customers Are Saying
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div
                    id="reviewsCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {reviews.map((item, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div
                                            className="card border-0 shadow-sm text-center p-4"
                                            style={{
                                                borderRadius: "20px",
                                                background: "#fff",
                                            }}
                                        >
                                            <div className="mb-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="rounded-circle border"
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        objectFit: "cover",
                                                        border: "3px solid #007bff",
                                                    }}
                                                />
                                            </div>
                                            <p
                                                className="text-secondary mb-3"
                                                style={{
                                                    fontSize: "1.1rem",
                                                    lineHeight: "1.6",
                                                }}
                                            >
                                                “{item.review}”
                                            </p>
                                            <h5 className="fw-semibold mb-0">
                                                {item.name}
                                            </h5>
                                            <small className="text-muted d-block mb-3">
                                                {item.role}
                                            </small>
                                            <div className="text-warning mb-2">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#reviewsCarousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bg-dark rounded-circle p-2"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#reviewsCarousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bg-dark rounded-circle p-2"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;
