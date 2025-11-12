import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-5">
            <Container>
                <p className="mb-0">© {new Date().getFullYear()} DialNepal — All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
