import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/wildflynobg-trimmy.png";



export default function NavBar() {
    return (
        <>
              <Navbar bg="light" variant="light" className="sticky-top">
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
                    <Nav variant="pills" activeKey="#home" className="">
                        <Nav.Item className="font-weight-bold" >
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="font-weight-bold">
                            <Nav.Link href="#features">Beers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="font-weight-bold">
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
     </>
    )
}