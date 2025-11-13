import React from "react";

function PopularCategories() {
    const categories = [
        {
            name: "Restaurants",
            icon: "bi bi-shop-window",
            count: "2,350",
            color: "#ff6b6b",
            bg: "rgba(255,107,107,0.1)",
        },
        {
            name: "Hotels",
            icon: "bi bi-building",
            count: "1,890",
            color: "#339af0",
            bg: "rgba(51,154,240,0.1)",
        },
        {
            name: "Hospitals",
            icon: "bi bi-hospital",
            count: "970",
            color: "#51cf66",
            bg: "rgba(81,207,102,0.1)",
        },
        {
            name: "Beauty Salons",
            icon: "bi bi-scissors",
            count: "1,240",
            color: "#d63384",
            bg: "rgba(214,51,132,0.1)",
        },
        {
            name: "Education",
            icon: "bi bi-mortarboard",
            count: "1,670",
            color: "#845ef7",
            bg: "rgba(132,94,247,0.1)",
        },
        {
            name: "Travel",
            icon: "bi bi-airplane",
            count: "1,150",
            color: "#f59f00",
            bg: "rgba(245,159,0,0.1)",
        },
        {
            name: "Repair Services",
            icon: "bi bi-tools",
            count: "890",
            color: "#12b886",
            bg: "rgba(18,184,134,0.1)",
        },
        {
            name: "Fitness Centers",
            icon: "bi bi-heart-pulse",
            count: "760",
            color: "#ff922b",
            bg: "rgba(255,146,43,0.1)",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
            }}
        >
            <div className="container text-center">
                <h2
                    className="fw-bold mb-4"
                    style={{ color: "#1c1c1c", fontSize: "2rem" }}
                >
                    🔥 Popular Categories
                </h2>
                <p
                    className="text-muted mb-5"
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                    Explore the most searched categories and discover trusted businesses across Nepal.
                </p>

                <div className="row g-4">
                    {categories.map((cat, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-3">
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "20px",
                                    border: `2px solid ${cat.color}`,
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = `0 8px 20px ${cat.bg}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                                }}
                            >
                                <div
                                    className="card-body d-flex flex-column align-items-center justify-content-center text-center"
                                    style={{ padding: "25px 15px" }}
                                >
                                    <div
                                        className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            backgroundColor: cat.bg,
                                            color: cat.color,
                                            fontSize: "2rem",
                                        }}
                                    >
                                        <i className={cat.icon}></i>
                                    </div>
                                    <h6 className="fw-bold" style={{ color: cat.color }}>
                                        {cat.name}
                                    </h6>
                                    <p className="text-muted small mb-0">
                                        {cat.count} businesses listed
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularCategories;
