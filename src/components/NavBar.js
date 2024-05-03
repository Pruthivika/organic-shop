import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import logo from '../images/logo.png'
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <header className="nav-container">
                <div className="inner-header">
                    <div className="container-header">
                        <div className="main-header">
                            <div className="logo">
                                <Link to="/home"><img src={logo} height={80} /></Link>
                            </div>
                            <nav className="list-items active" id="navbar">
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/home"><FaCartPlus /></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;