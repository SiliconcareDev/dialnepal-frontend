import React from "react";
import Slider from "react-slick";

function AdvertisementSection() {
    const ads = [
        {
            id: 1,
            title: "50% Off on Car Services",
            description: "Get the best car repair and maintenance at half price!",
            image: "https://images.unsplash.com/photo-1515923152115-758a6b16c3b3?auto=format&fit=crop&w=600&q=80",
            color: "#fff4e6",
            borderColor: "#ffa94d"
        },
        {
            id: 2,
            title: "Premium Salon Offers",
            description: "Book your appointment today and get exciting discounts!",
            image: "https://images.unsplash.com/photo-1596464716121-fc1cf4f3cf5e?auto=format&fit=crop&w=600&q=80",
            color: "#e7f5ff",
            borderColor: "#339af0"
        },
        {
            id: 3,
            title: "Restaurants Near You",
            description: "Discover amazing places to eat and exclusive meal deals.",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80",
            color: "#f8f0fc",
            borderColor: "#ae3ec9"
        },
        {
            id: 4,
            title: "Home Cleaning Services",
            description: "Book professional home cleaners in your area easily.",
            image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=600&q=80",
            color: "#ebfbee",
            borderColor: "#40c057"
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            },
        ],
    };

    return (
        <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
                <h2 className="text-center mb-4 fw-bold" style={{ color: "#343a40" }}>
                    🏆 Featured Advertisements
                </h2>
                <Slider {...settings}>
                    {ads.map((ad) => (
                        <div key={ad.id} className="px-3">
                            <div
                                className="card h-100 border-3 shadow-sm"
                                style={{
                                    backgroundColor: ad.color,
                                    borderColor: ad.borderColor,
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                            >
                                <img
                                    src={ad.image}
                                    alt={ad.title}
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold" style={{ color: ad.borderColor }}>
                                        {ad.title}
                                    </h5>
                                    <p className="text-muted small">{ad.description}</p>
                                    <button
                                        className="btn fw-semibold"
                                        style={{
                                            backgroundColor: ad.borderColor,
                                            color: "#fff",
                                            borderRadius: "25px",
                                            padding: "8px 20px",
                                            border: "none",
                                        }}
                                    >
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default AdvertisementSection;
