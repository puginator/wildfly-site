import React from "react";

export default function Footer() {
    return (
        <footer className="container-fluid bg-secondary text-center text-white p-5 justify-content-md-center">
            <form className="">
                <h5 className="mb-0">Want to be the first to know about all things Wild Fly?</h5>
                <h5 className="mb-3">Join our email list below.</h5>
                <input type="email" className="form-control w-25 m-auto rounded-0" placeholder="Enter your email address" />
                <button className="btn btn-dark w-25 rounded-0">Submit</button>
            </form>
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