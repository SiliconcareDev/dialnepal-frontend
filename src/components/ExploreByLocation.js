import React from "react";

function ExploreByLocation() {
    const cities = [
        {
            name: "Kathmandu",
            image: "https://images.unsplash.com/photo-1562514155-444b0df3c3fd?auto=format&fit=crop&w=800&q=60",
            listings: "2,450+ Listings",
        },
        {
            name: "Pokhara",
            image: "https://images.unsplash.com/photo-1602937446117-6b78f9fa3cf7?auto=format&fit=crop&w=800&q=60",
            listings: "1,100+ Listings",
        },
        {
            name: "Lalitpur",
            image: "https://images.unsplash.com/photo-1614854260231-fd7bdf27d8dc?auto=format&fit=crop&w=800&q=60",
            listings: "980+ Listings",
        },
        {
            name: "Biratnagar",
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60",
            listings: "850+ Listings",
        },
        {
            name: "Butwal",
            image: "https://images.unsplash.com/photo-1598007300164-8e37f515f3e8?auto=format&fit=crop&w=800&q=60",
            listings: "720+ Listings",
        },
    ];

    return (
        <section className="py-5 bg-white" id="explore-location">
            <div className="container text-center">
                <h2 className="fw-bold mb-4">Explore by Location</h2>
                <p className="text-muted mb-5">
                    Discover businesses and services available in your favorite cities.
                </p>

                <div className="row g-4 justify-content-center">
                    {cities.map((city, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                            <div
                                className="city-card position-relative rounded overflow-hidden shadow-sm"
                                style={{
                                    backgroundImage: `url(${city.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "200px",
                                }}
                            >
                                <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end text-start p-3">
                                    <h5 className="text-white fw-semibold mb-1">
                                        {city.name}
                                    </h5>
                                    <p className="text-light small">{city.listings}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CSS for overlay */}
            <style>{`
                .city-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
                }
                .city-card:hover {
                    transform: scale(1.03);
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
}

export default ExploreByLocation;
