import React, { useState } from 'react'
import './hero-home.gif'
import Typed from 'react-typed';
import { Container, Row, Col, Form } from 'reactstrap';
import IntegrationSection from './IntegrationSection';

import FooterComponent from './footerComponent'


//Componenets
import { CommentsSlider } from './CommentsSlider'
import CaseStudySlider from './CaseStudySlider'

//styles
import './HomeComponent.css'


// Service div 1 to show on Hover

const Sd1 = (props) => {
    return (
        <div className="s-d-a1 service-div-active" onMouseEnter={props.hoverTrue} onMouseLeave={props.hoverFalse}>
            <div clas="service-box-top">
                <p className='service-div-active-p'>ATTRACT MORE VISITORS</p>
                <h3 className="service-box-title">SEO & Content Marketing</h3>
            </div>
            <div className="service-box-button">
                <a href='/'>Learn More</a>
            </div>
            <div className='service-box-content'>
                <h3 className="service-box-content-title">Results-driven strategy and premium content creation.</h3>
                <div className='service-box-content-description'>
                    <h6>Our SEO services have one goal: drive qualified prospects to your website. From content creation and promotion to white-hat link building, learn how we can help you outrank the competition.</h6>
                    <div className="service-box__content-list">
                        <li>Advanced technical SEO foundation with a comprehensive search strategy</li>
                        <li>Ongoing content strategy, creation, and targeted promotion to maximize thought leadership</li>
                        <li>Monthly reporting calls with our in-house marketing experts to identify growth and opportunities</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Service div 2 to show on Hover

const Sd2 = (props) => {
    return (
        <div className="s-d-a2 service-div-active" onMouseEnter={props.hoverTrue} onMouseLeave={props.hoverFalse}>
            <p className='service-div-active-p'>IMPRESS YOUR AUDIENCE</p>
            <div clas="service-box-top">
                <h3 className="service-box-title">Mobile friendly, easily editable and search optimized.</h3>
            </div>
            <div className="service-box-button">
                <a href='/'>Learn More</a>
            </div>
            <div className='service-box-content'>
                <h3 className="service-box-content-title">Results-driven strategy and premium content creation.</h3>
                <div className='service-box-content-description'>
                    <h6>Your website is your best salesperson. Which is why we optimize every site for visibility. Our websites look damn good on mobile and are optimized for both conversions and search engines.</h6>
                    <div className="service-box__content-list">
                        <li>Fully customized, multi-page websites built to drive results</li>
                        <li>Custom themes designed to easily update copy and imagery</li>
                        <li>Optimized for mobile, conversions and search engines</li>
                    </div>
                </div>
            </div>

        </div>
    )
}


// Main Parent Component
export const HomeComponent = () => {

    // States to manage hover
    const [sd1Hovering, setsd1Hovering] = useState(false);
    const [sd2Hovering, setsd2Hovering] = useState(false);

    /// Hover handeling on SD1 to prevent flickering and enable a full element hover
    const sd1hoverTrue = () => {
        setsd1Hovering(true)
        console.log('SD1 hover True')
    }
    const sd1hoverFalse = () => {
        setsd1Hovering(false)
        console.log('SD1 hover False')

    }
    /// Hover handeling on SD2 to prevent flickering and enable a full element hover

    const sd2hoverTrue = () => {
        setsd2Hovering(true)
        console.log('SD1 hover True')
    }
    const sd2hoverFalse = () => {
        setsd2Hovering(false)
        console.log('SD1 hover False')

    }

    return (
        <div className="home-body">
            <div className='top-section' >
                <div className="title-box">
                    <p className='hero-subtitle'>HI, WE'RE JUNTO</p>
                    <h1 className='hero-title'>We're here to help you</h1>

                    <div className='typed-title'>

                    <Typed
                        strings={[
                            'Out Rank the competition',
                            'Grow Your business',
                            'Generate more leads',
                            'Close more deals']}
                        typeSpeed={40}
                        backSpeed={50}
                        showCursor={true}
                        loop >
                    </Typed>
                        </div>
                    <div className='btn-container'>
                        <a href='/' className='hero-home-btn home-btn-1'>Let's make it happen</a>
                        <a href='/' className='hero-home-btn home-btn-2'>How we work <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="service-div-container">
                    <div className="service-div-1"
                        onMouseEnter={() => setsd1Hovering(true)}
                        onMouseLeave={() => setsd1Hovering(false)}
                    >
                        <p>ATTRACT MORE VISITORS</p>
                        <h3>SEO & Content Marketing</h3>
                        <h3>Results-driven strategy and premium content creation.</h3>
                        <h5>Start This Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h5>

                    </div>

                    {/* conditional rendering of SD1 hover div */}

                    {sd1Hovering ? <Sd1 hoverTrue={() => { sd1hoverTrue() }} hoverFalse={() => { sd1hoverFalse() }} /> : null}

                    <div className="service-div-2"
                        onMouseOver={() => setsd2Hovering(true)}
                        onMouseOut={() => setsd2Hovering(false)}
                    >
                        <p>IMPRESS YOUR AUDIENCE</p>
                        <h3>Web Design & Development </h3>
                        <h3>Mobile friendly, easily editable and search optimized.</h3>
                        <h5>Start This Service  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                    </div>

                    {/* conditional rendering of SD2 hover div */}

                    {sd2Hovering ? <Sd2 hoverTrue={() => { sd2hoverTrue() }} hoverFalse={() => { sd2hoverFalse() }} /> : null}
                </div>

            </div>
            <div className="testimonial-clients">
                <p className="testimonial-p">OUR CLIENTS’ GOALS ARE OUR GOALS</p>
                <h2 className="testimonail-h2">Here’s what they have to say.</h2>
            </div>
            <div className='comment-slider'>
                <CommentsSlider />
            </div>
            <div className='client-img'>
                <Row>
                    <Col md={2}>
                        <img className='client-logo' width={300} height={76} src="https://junto.digital/wp-content/uploads/2018/08/Cardinal-Group-Logo-300x76.png" alt='*'></img>
                    </Col>
                    <Col md={2}>
                        <img className='client-logo' src='https://junto.digital/wp-content/uploads/logo-4-rivers.png' alt='*'></img>
                    </Col>
                    <Col md={2}>
                        <img className='client-logo' src='https://junto.digital/wp-content/uploads/2018/08/Emerson-Stone-Logo-300x152.png' alt='*'></img>
                    </Col>
                    <Col md={2}>
                        <img className='client-logo' src='https://junto.digital/wp-content/uploads/logo-brevite.png' alt='*'></img>
                    </Col>
                    <Col md={2}>
                        <img className='client-logo' src='https://junto.digital/wp-content/uploads/logo-denver-design-district.png' alt='*'></img>
                    </Col>
                </Row>
            </div>
            <div >
                <CaseStudySlider />
            </div>
            <div className='bottom-section-up'>
                <IntegrationSection />
            </div>
            <div className='footer-section'>
                <FooterComponent />
            </div>
        </div>
    )
}
