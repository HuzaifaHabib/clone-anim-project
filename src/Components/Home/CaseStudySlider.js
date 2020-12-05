import React from 'react';
import Slider from "react-slick";
import './CaseStudySlider.css';
// import 'slick-carousel/slick/slick.css';
// import "slick-carousel/slick/slick-theme.css";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", height: '4rem', width: '4rem' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", height: '4rem', width: '4rem', }}
            onClick={onClick}
        />
    );
}

const CaseStudySlider = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        arrows: true,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    // const slider1Style = {

    // }

    return (
        <div>
            <div className='case-study-slider'>
                <center>
                    <Slider {...settings}>
                        <div className="case-studyimage cs-img-1" >
                            <div className='casestudy-content'>


                                <div className="case-study-content">

                                    <div className="case-study__subtitle">Case Study</div>

                                    <h3 className="case-study__title">Helping Choose Wheels Grow Organic Traffic 124%</h3>
                                    <div className="case-study__description">
                                        <p>Their site had been hit with a Google penalty and traffic was down 80%. See how we helped one affiliate partner to recover [and grow 124% in 6 months].</p>
                                    </div>
                                    <div className="case-study-author">
                                        <div className="author__image">
                                            <img width="150" height="150" src="https://junto.digital/wp-content/uploads/2018/09/Pat-Ahern-Junto-Denver-Marketing-150x150.jpg"
                                                className="attachment-medium size-medium"
                                                alt="Pat Ahern Junto Denver Marketing 150x150"
                                                title="Pat Ahern Junto Denver Marketing 150x150"
                                            />
                                        </div>
                                        <div className="author-name-sd2">Pat Ahern</div>
                                    </div>
                                    <div className="case-study-link">
                                        <a href="https://junto.digital/blog/affiliate-marketing-case-study/" >Read Case Study</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="case-studyimage cs-img-2" >
                            <div className="case-study-content">
                                <div className="case-study__subtitle">Case Study</div>
                                <h3 className="case-study__title">How We Helped Ridester to See a 487.1% Organic Traffic Growth</h3>
                                <div className="case-study__description">
                                    <p>Competition in their industry was increasing, and their online growth was staggering. Read our content marketing case study to see exactly how we helped Ridester to grow 487.1% (so far).</p>
                                </div>
                                <div className="case-study-author">
                                    <div className="author__image">
                                        <img width="150" height="150" src="https://junto.digital/wp-content/uploads/2018/09/Pat-Ahern-Junto-Denver-Marketing-150x150.jpg" className="attachment-medium size-medium" alt="Pat Ahern Junto Denver Marketing 150x150" title="Pat Ahern Junto Denver Marketing 150x150" />
                                    </div>
                                    <div className="author-name-sd2">Pat Ahern</div>
                                </div>

                                <div className="case-study-link">
                                    <a href="https://junto.digital/blog/content-marketing-case-study/" >Read Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className="case-studyimage cs-img-3" >

                            <div className="case-study-content">

                                <div className="case-study__subtitle">Case Study</div>

                                <h3 className="case-study__title">How we helped First Editing recover from a search penalty and increase goal completions by 118%</h3>
                                <div className="case-study__description">
                                    <p>From redesigning their website to uncovering an SEO penalty - Discover how we increased goal completions for First Editing by 118%.</p>
                                </div>

                                <div className="case-study-author">
                                    <div className="author__image">
                                        <img width="150" height="150" src="https://junto.digital/wp-content/uploads/2018/09/david-freund-profile-150x150.jpg" className="attachment-medium size-medium" alt="david freund profile 150x150" title="david freund profile 150x150" />
                                    </div>
                                    <div className="author-name--sd2">David Freund</div>
                                </div>
                                <div className="case-study-link">
                                    <a href="https://junto.digital/blog/website-redesign-case-study/" >Read Case Study <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </center>

            </div>
        </div>
    )
}

export default CaseStudySlider;
