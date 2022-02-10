import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import family from "../images/familyphoto.jpeg";

export default function AboutUs() {
    return (
        <>
            <NavBar />
            <Container className="flex mt-5 mb-5">
                <img src={family} alt="" className="hero-image rounded" />
                <div className=" w-50">
                    <h1>Who is Wild Fly?</h1>
                    <p>Wild Fly Brewing is a small (very small), family operated micro brewery. We started with the simple idea of turning what we loved doing into our something new + enjoyable for our community and sustainable for our family. Our little brewery is located less than a mile from our home in downtown Everson, WA</p>
                    <p>We are so excited to be sharing our passion of beer with our small community.</p>
                    <p>Cheers,</p>
                    <p>The Wild Fly Team</p>
                </div>
            </Container>
            <Footer />
        </>
    )
};
