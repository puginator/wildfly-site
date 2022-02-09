import React from "react";

export default function Footer() {
    return (
        <footer className="container-fluid bg-secondary text-center text-white p-5">
            <div >
                <h5 className="mb-0">Want to be the first to know about all things Wild Fly?</h5>
                <input type="text" className="form-control w-50" placeholder="Enter your email address to join our list" />
            </div>
            <div>
                <i class="fa-brands fa-instagram p-3"></i>
                <i class="fa-brands fa-twitter p-3"></i>
                <i class="fa-regular fa-envelope p-3"></i>
            </div>
        </footer>
    )
}