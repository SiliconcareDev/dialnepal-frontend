import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Welcome to DialNepal</h1>
                <p>Find local businesses and services near you.</p>
            </div>
            <Footer />
        </>
    );
}

export default Home;
