import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-middle">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-footer f-contact">
                                    <h3>Get In Touch With Us</h3>
                                    <p className="phone">Phone: +91 000 000 00 00</p>
                                    <ul>
                                        <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                                        <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                                    </ul>
                                    <p className="mail">
                                        <Link to="mailto:support@shpercart.com">support@shpercart.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer our-app">
                                    <h3>Our Mobile App</h3>
                                    <ul className="app-btn">
                                        <li>
                                            <Link to="/">
                                                <i className="lni lni-apple"></i>
                                                <span className="small-title">Download on the</span>
                                                <span className="big-title">App Store</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="lni lni-play-store"></i>
                                                <span className="small-title">Download on the</span>
                                                <span className="big-title">Google Play</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h3>Information</h3>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                        <li><Link to="/">Downloads</Link></li>
                                        <li><Link to="/">Sitemap</Link></li>
                                        <li><Link to="/">FAQs Page</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h3>Shop Departments</h3>
                                    <ul>
                                        <li><Link to="/">Computers & Accessories</Link></li>
                                        <li><Link to="/">Smartphones & Tablets</Link></li>
                                        <li><Link to="/">TV, Video & Audio</Link></li>
                                        <li><Link to="/">Cameras, Photo & Video</Link></li>
                                        <li><Link to="/">Headphones</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center">


                            <div className="col-lg-12 text-center col-12">
                                <div className="copyright">
                                    <p>Designed and Developed by Salim Ali</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer