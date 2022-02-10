import React from "react";
import MailchimpFormContainer from "./mailchimpform";

export default function Footer() {
    return (
        <footer className="container-fluid bg-secondary text-center text-white p-5 justify-content-md-center">
            <div>
                <h5 className="mb-0">Want to be the first to know about all things Wild Fly?</h5>
                <h5 className="mb-3">Join our email list below.</h5>
                <MailchimpFormContainer />
            </div>
            <div className="m-4">
                <a href="https://www.instagram.com/WildFlyBrewing/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram p-3 fa-2x text-dark"></i>
                </a>
                <a href="https://www.twitter.com/WildFlyBrewing/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter p-3 fa-2x text-dark"></i>
                </a>
                <a href="mailto: wildflybrewing@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-envelope p-3 fa-2x text-dark"></i>
                </a>
            </div>
        </footer>
    )
}