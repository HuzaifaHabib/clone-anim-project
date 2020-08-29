import React from 'react'
import './hero-home.gif'

//styles
import './HomeComponent.css'

export const HomeComponent = () => {

    return (
        <>
            <div className='top-section' >
                <div class="title-box">
                    <p className='hero-subtitle'>HI, WE'RE JUNTO</p>
                    <h1 className='hero-title'>We're here to help you</h1>
                    <h1 className='hero-title'>grow your business.</h1>
                    <div className='btn-container'>
                        <a href='/' className='hero-home-btn home-btn-1'>Let's make it happen</a>
                        <a href='/' className='hero-home-btn home-btn-2'>How we work <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div className="service-div-container">
                <div className="service-div-1">
                    <p>ATTRACT MORE VISITORS</p>
                    <h3>SEO & Content Marketing</h3>
                    <h3>Results-driven strategy and premium content creation.</h3>
                    <h5>Start This Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h5>

                </div>
                <div className="service-div-2">
                    <p>IMPRESS YOUR AUDIENCE</p>
                    <h3>Web Design & Development </h3>
                    <h3>Mobile friendly, easily editable and search optimized.</h3>
                    <h5>Start This Service  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="testimonial-clients">
                <p>OUR CLIENTS’ GOALS ARE OUR GOALS</p>
                <h2>Here’s what they have to say.</h2>
                <div className="testimonials-comment">
                    <div className="testimonials-rating">
                        <img src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        <img src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        <img src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        <img src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        <img src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
