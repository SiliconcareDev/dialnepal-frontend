import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AdvertisementSection from "../components/AdvertisementSection";
import PopularCategories from "../components/PopularCategories";
import RecentListings from "../components/RecentListings";
import ReviewsSection from "../components/ReviewsSection";
import HowItWorks from "../components/HowItWorks";
import ExploreByLocation from "../components/ExploreByLocation";
import PartnerWithUs from "../components/PartnerWithUs";
import NewsletterSection from "../components/NewsletterSection";

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#fff" }}>
            <Navbar />

            <HeroSection />
            <HowItWorks />
            <AdvertisementSection />
            <PopularCategories />
            <ExploreByLocation />
            <RecentListings />
            <ReviewsSection />
            <PartnerWithUs />
            <NewsletterSection />
            <Footer />
        </div>
    );
}

export default Home;
