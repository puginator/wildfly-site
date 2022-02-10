import React from "react";

export default function About() {
    return(
        <div className="p-5 text-center w-75 m-auto">
            <h1>A very tiny brewery.</h1>
            <p>Wild Fly Brewing is a nano-brewery in the Kine Kombucha building - brewing very, very small batches.</p>
            <p>We love beer, and as a licensed microbrewery for Kine, we decided to have some fun brewing tiny experimental batches of beer under the Wild Fly brand to share with some of our long time beer friends that enjoy having fun with beer as much as we do.</p>
            <p>Follow us on instagram for beer release info.</p>
            <a href="https://www.instagram.com/WildFlyBrewing/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Follow @wildflybrewing<i className="fa-brands fa-instagram p-2"></i> </a>
        </div>
    )
};