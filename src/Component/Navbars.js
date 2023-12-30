import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbars.css";

function Navbars() {
    return (
        <>
            <Navbar expand="lg" className="navbar-container">
                <Container style={{ marginLeft: "7%", padding: "0.5% 2%" }}>
                    <Navbar.Brand href="/" className="navbar-brand">
                        MediShift
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-3">
                            <Nav.Link href="/" className="navbar-item">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/portal" className="navbar-item">
                                Portal
                            </Nav.Link>
                            <Nav.Link href="/login" className="navbar-item">
                                Login
                            </Nav.Link>
                            <Nav.Link href="/signup" className="navbar-item">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
