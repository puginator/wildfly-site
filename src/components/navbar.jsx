import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/wildflynobg-trimmy.png";



export default function NavBar() {
    return (
        <>
              <Navbar bg="light" variant="light" className="sticky-top p-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="110"
                            height="80"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="text-uppercase">
                        <Nav.Item className="font-weight-bold h5" >
                            <Link to="/">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="font-weight-bold h5">
                            <Link to="/beers">
                                <Nav.Link href="/beers">Beers</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="font-weight-bold h5">
                            <Link to="/aboutus">
                                <Nav.Link href="#about">About Us</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
     </>
    )
}