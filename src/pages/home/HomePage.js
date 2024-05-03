import React, { Suspense } from "react";
import Navbar from "../../components/NavBar";
import './index.css';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name="description" content="Home page for Organic skin care products" />
            </Helmet>
            <Navbar />

            <section className="hero">
                <Suspense fallback={<Loader />}> <div className="background-image"></div></Suspense>
                <div className="hero-content-area">
                    <h1>Embrace Nature's Beauty, Naturally!</h1>
                    <h3>Transform Your Skin with Pure, Organic Bliss</h3>
                    <Link to="/contact" className="contact-us-btn">Contact Us Now</Link>
                </div>
            </section>

            <section className="products">
                <h3 className="title">Some of our products:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <hr />

                <ul className="grid">
                    <li className="small image-1"></li>
                    <li className="large image-2"></li>
                    <li className="large image-3"></li>
                    <li className="small image-4"></li>
                </ul>
            </section>

            <section className="feedbacks">
                <h3 className="title">Reviews from our customers:</h3>
                <hr />
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="author">- Lorem</p>
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="author">- Lorem</p>
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="author">- Lorem</p>
            </section>

            <section className="subscription">
                <h3 className="title">Learn more</h3>
                <p>Ready to experience nature's finest for your skin?
                    Dive into our collection of premium organic skincare products, meticulously crafted to nourish and rejuvenate your skin.
                    Just sign up for our mailing list!</p>
                <hr />
                <form>
                    <input type="email" placeholder="Email" />
                    <button className="subscribe-btn">Subscribe Now</button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default HomePage;