import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './index.css';

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Error page</title>
                <meta name="description" content="Error page for Organic skin care products" />
            </Helmet>
            <Navbar />
            <div class="content-center">
                <h2 class="error">404</h2>
                <p>PAGE NOT FOUND</p>
                <p>It looks like nothing was found at this location.</p>
                <Link to="/home" className="home-btn">BACK TO HOME</Link>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;