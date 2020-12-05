import React from 'react'
import Slider from "react-slick";


//Styles
import './commentsSlider.css';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

export const CommentsSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,

    };

    return (
        <div>
            
            <div className='client-slider'>
                <Slider {...settings}>
                    <div className='slider-1'>
                        <div className="testimonials-rating">
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        </div>
                        <p>We have worked with Junto on a number of client projects as well as internally for our business. I couldn't be happier with our experience with the Junto team and the results they delivered.
                        <p className='author-name'>Brett W. •</p>
                        <p className='author-company'>Emerson Stone</p>
                    </p>
                    </div>
                    <div className='slider-1'>
                        <div className="testimonials-rating">
                        <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        </div>
                    <p>We have been working with Junto during our growth period and they have been nothing but professional. Junto has exceptional talent and is always timely. We look forward to a long term relationship with Junto.
                        <p className='author-name'>AUthor2 •</p>
                        <p className='author-company'>Comapny Two</p>
                    </p>
                    </div>
                    <div className='slider-1'>
                        <div className="testimonials-rating">
                        <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        </div>
                    <p>The Junto team does fantastic work that looks aesthetically pleasing and function perfectly. On top of that their customer service is second to none. I highly recommend them!
                        <p className='author-name'>Author 3. •</p>
                        <p className='author-company'>Comapny Three</p>
                    </p>
                    </div>
                    <div className='slider-1'>
                        <div className="testimonials-rating">
                        <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                            <img className='rating-star' src='https://junto.digital/wp-content/themes/junto/assets/img/star.svg' alt='*'></img>
                        </div>
                    <p>Junto has been a great partner for 4Rivers Equipment. They have been consistent about giving honest feedback, communicating expectations, and even providing unbiased assessments of our site performance.
                        <p className='author-name'>Author Four. •</p>
                        <p className='author-company'>Company Stone</p>
                    </p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
