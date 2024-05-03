import React from "react";
import Navbar from "../../components/NavBar";
import './index.css';
import Footer from "../../components/Footer";
import ContactUsForm from "../../components/ContactUsForm";
import { Helmet } from 'react-helmet';

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact us page</title>
                <meta name="description" content="Contact us page for Organic skin care products" />
            </Helmet>
            <Navbar />
            <section>
                <div className="about-container">
                    <div className="info-description">
                        The "About" section of our website provides insight into the ethos, mission, and story behind our organic skincare business.
                        Discover the journey that led to the creation of our company, from our founder's passion for natural ingredients to our commitment to sustainability and ethical practices.
                        Learn about our dedication to crafting premium skincare products using only the finest organic ingredients, carefully selected for their purity and efficacy. Explore our values of transparency, authenticity, and empowerment as we strive to promote healthy skin and a greener planet.
                        Join us on our mission to redefine beauty standards and inspire a holistic approach to skincare that celebrates the harmony between nature and wellness.
                    </div>
                    <img src="https://www.senseorient.com/wp-content/uploads/2021/09/Natural-Organic-Skincare-Brands-.jpeg" className="info-img" />


                </div>
            </section>
            <section>
                <ContactUsForm />
            </section>

            <Footer />
        </>
    );
};


export default ContactUsPage;