import React from "react";
import Navbar from "../../components/NavBar";
import './index.css';
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet';

const ShopPage = () => {
    return (
        <>
            <Helmet>
                <title>Shop page</title>
                <meta name="description" content="Shop page for Organic skin care products" />
            </Helmet>
            <Navbar />
            <section className="products">
                <h3 className="title">Some of our Products:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <hr />

                <div className="grid">
                    <div className="card-wrapper">
                        <div className="product-img">
                            <img src="https://i.pinimg.com/originals/80/ec/ca/80ecca9ba936f852ff069736988d662b.png" height="100%" width="100%" loading="lazy" />
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <h1>Vitamin C Oil</h1>
                                <h2>by harmony herbals</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                            <div>
                                <p className="price-text"><span>16</span>$</p>
                            </div>
                            <div className="product-price-btn">

                                <button type="button">buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="product-img">
                            <img src="https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/c10b7a4d-305a-41b5-922d-c48cb11c7670/Sustainably+Chic+%7C+Sustainable+Beauty+Blog+%7C+Best+Organic+Sustainable+Natural+Skincare+Brands+%7C+100%25+Pure.jpg" height="100%" width="100%" loading="lazy" />
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <h1>Face scrub</h1>
                                <h2>by harmony herbals</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                            </div>
                            <div>
                                <p className="price-text"><span>30</span>$</p>
                            </div>
                            <div className="product-price-btn">

                                <button type="button">buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};


export default ShopPage;