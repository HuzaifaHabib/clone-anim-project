import React from 'react';
import './footerComponent.css';



function FooterComponent() {


    return (
        <div>
            <div className='footer-seperator'>
                <h2 className="hero-title footer-title ">Insights from the Junto team.</h2>
            </div>
            <div className='footer-body'>
                <div className='footer-paragraph'>
                    <p>Agency 2.0</p>
                    <h1>Junto is redefining the way digital agencies work. We make digital marketing simple, approachable, and results-driven. Junto's in-house marketing experts collaborate with top-vetted freelancers from around the world to deliver SEO, content marketing, and web development services to companies at an unparalleled value.</h1>
                    <a href='/' className='hero-home-btn footer-btn-1'>Learn More About Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <div className="footer-column-container" >
                        <div className="footer-column">
                            <div className="inner">
                                <div className="widget_text widget"><div className="textwidget custom-html-widget">
                                    <img className="footer__logo" src="https://junto.digital/wp-content/uploads/2018/09/junto-logo-white.png" alt="Junto logo" />
                                    <p>We’re a Denver-based Digital Marketing agency powered by top-vetted freelancers from around the globe. </p>
                                    <a className="footer__email" href="/">hello@junto.digital</a></div></div>
                            </div>
                        </div>
                        <div className="footer-column">
                            <div className="menu-about-container">
                            <h4 className="widget__title">About</h4>
                                <ul id="menu-about" className="menu">
                                    <li id="menu-item-1840" className="footer-menu-li">
                                        <a href="https://junto.digital/about/">About</a>
                                    </li>
                                    <li id="menu-item-1839" className="footer-menu-li">
                                        <a href="https://junto.digital/contact/">Contact Us</a>
                                    </li>
                                    <li id="menu-item-2290" className="footer-menu-li">
                                        <a href="https://junto.digital/careers/">Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column">
                            <div className="menu-services-container">
                            <h4 className="widget__title">Services</h4>
                                <ul id="menu-services" className="menu">
                                    <li id="menu-item-1842" className="footer-menu-li">
                                        <a href="https://junto.digital/denver-content-marketing-services/">Content Marketing</a>
                                    </li>
                                    <li id="menu-item-2407" className="footer-menu-li">
                                        <a href="https://junto.digital/denver-web-development-services/">Website Development</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column">
                            <div className="menu-keep-in-touch-container">
                            <h4 className="widget__title">Keep In Touch</h4>
                                <ul id="menu-keep-in-touch" className="menu">
                                    <li id="menu-item-1848" className="footer-menu-li">
                                        <a href="https://www.facebook.com/juntodigital/">Facebook</a>
                                    </li>
                                    <li id="menu-item-1849" className="footer-menu-li">
                                        <a href="https://twitter.com/junto_digital">Twitter</a>
                                    </li>
                                    <li id="menu-item-1850" className="footer-menu-li">
                                        <a href="https://www.linkedin.com/company/junto-digital/">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p className='copy-right-p'>Made with <span role='img' aria-label='Love'>❤️</span> by Hero</p>
                </div>
            </div>
        </div>



    )
}

export default FooterComponent
