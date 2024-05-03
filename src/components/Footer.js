import React from "react";
import './index.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>#Harmony Herbals</p>
            <p>Embrace Nature's Beauty, Naturally!</p>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
            </ul>
        </footer>
    );
}

export default Footer;      