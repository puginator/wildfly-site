import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import family from "../images/familyphoto.jpeg";
import collage1 from "../images/collage1.jpg";
import collage2 from "../images/collage2.jpg";
import collage3 from "../images/collage3.jpg";
import collage4 from "../images/collage4.jpg";
import collage5 from "../images/collage5.jpg";
import collage6 from "../images/collage6.jpg";
import collage7 from "../images/collage7.jpg";
import collage8 from "../images/collage8.jpg";



export default function AboutUs() {
    return (
        <>
            <NavBar />
            <Container className="flex mt-5 mb-5 justify-content-between">
                <img src={family} alt="" className="hero-image rounded" />
                <div className=" w-50">
                    <h1 className="text-center">Who is Wild Fly?</h1>
                    <p>Wild Fly Brewing is a small (very small), family operated micro brewery. We started with the simple idea of turning what we loved doing into our something new + enjoyable for our community and sustainable for our family. Our little brewery is located less than a mile from our home in downtown Everson, WA</p>
                    <p>We are so excited to be sharing our passion of beer with our small community.</p>
                    <p>Cheers,</p>
                    <p className="text-center">The Wild Fly Team</p>
                </div>
            </Container>
            <div className="container-fluid p-5 text-center bg-secondary">
                <img src={collage1} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage2} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage7} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage4} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage8} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage6} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage5} alt="" className="img-thumbnail rounded thumbnail" />
                <img src={collage3} alt="" className="img-thumbnail rounded thumbnail" />

            </div>
            <Footer />
        </>
    )
};
