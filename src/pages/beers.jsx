import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Card, Container } from "react-bootstrap";
import image from "../images/overflowtaps.png";

export default function Beers() {
    return (
        <>  
            <NavBar />
            <Container className="mb-5 m-auto row">
                <Card style={{ width: '18rem', padding: '0' }} className="mr-5 mt-5">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Wet Line West Coast IPA</Card.Title>
                        <Card.Text>
                        West Coast IPA with a timeless malt profile and bitterness. Brewed with 100% Skagit Valley Malt.
                        </Card.Text>
                        <Card.Text>ABV: 6%</Card.Text>
                        <Card.Text>IBU: 60</Card.Text>
                        <Card.Text>Hops: Citra, El Dorado</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted w-100">Batch 0001</Card.Footer>
                </Card>
                <Card style={{ width: '18rem', padding: '0' }} className="mt-5 mr-5">
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>Wet Line West Coast IPA</Card.Title>
                        <Card.Text>
                        West Coast IPA with a timeless malt profile and bitterness. Brewed with 100% Skagit Valley Malt.
                        </Card.Text>
                        <Card.Text>ABV: 6%</Card.Text>
                        <Card.Text>IBU: 60</Card.Text>
                        <Card.Text>Hops: Citra, El Dorado</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted w-100">Batch 0001</Card.Footer>
                </Card>
                <Card style={{ width: '18rem', padding: '0' }} className="mt-5 mr-5">
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>Wet Line West Coast IPA</Card.Title>
                        <Card.Text>
                        West Coast IPA with a timeless malt profile and bitterness. Brewed with 100% Skagit Valley Malt.
                        </Card.Text>
                        <Card.Text>ABV: 6%</Card.Text>
                        <Card.Text>IBU: 60</Card.Text>
                        <Card.Text>Hops: Citra, El Dorado</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted w-100">Batch 0001</Card.Footer>
                </Card>
            </Container>
            <Footer />
        </>
    )
};
