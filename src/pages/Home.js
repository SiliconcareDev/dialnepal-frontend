import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <section className="bg-light text-center py-5">
                <Container>
                    <h1 className="display-4 fw-bold">Welcome to DialNepal</h1>
                    <p className="lead">Find and connect with local businesses across Nepal — quickly and easily.</p>
                    <Button variant="primary" size="lg" href="/listings">
                        Explore Businesses
                    </Button>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="text-center">
                        <Col md={4}>
                            <i className="bi bi-search fs-1 text-primary"></i>
                            <h5 className="mt-3">Search Businesses</h5>
                            <p>Find local shops, services, and professionals by category or location.</p>
                        </Col>
                        <Col md={4}>
                            <i className="bi bi-geo-alt fs-1 text-primary"></i>
                            <h5 className="mt-3">Location-Based Results</h5>
                            <p>Discover businesses nearest to you using Google Maps integration.</p>
                        </Col>
                        <Col md={4}>
                            <i className="bi bi-star fs-1 text-primary"></i>
                            <h5 className="mt-3">Ratings & Reviews</h5>
                            <p>View honest feedback and choose the best businesses in Nepal.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;
