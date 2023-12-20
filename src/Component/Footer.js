import React from "react";
import "../Component/Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-container">{`Copyright © MediShift ${year}`}</footer>
    );
}

export default Footer;
