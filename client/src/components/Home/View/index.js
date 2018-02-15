import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './index.css';

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickGoTo(1)
    }
    previous() {
        this.slider.slickGoTo(2)
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            draggable: false,
            autoplay: true,
            autoplaySpeed: 5000,
            swipe: false,
            lazyLoad: true
        };
        return(
            <div>
                <Slider ref={c => this.slider = c } {...settings}>
                    <div className="banner">
                        <div className="bg"></div>
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="mdc-typography--title slide__title">Žanna <br className="br" />Dubska</h1>
                                <p className="mdc-typography--body1 slide__paragraph slide__paragraph--vahish-mobile">
                                    Your own personal style is an individually perfected look on the outside, and the confidence to match on the inside.
                                </p>
                                <p className="mdc-typography--body1 slide__paragraph">
                                    For many years prominent politicians, businessmen, and their spouses, star of show business, famous people, and of all the presidents of Latvia have trusted me to help them develop their personal style.
                                </p>
                                <p className="mdc-typography--body1 slide__paragraph slide__paragraph--vahish-mobile">
                                    Let me help you to discover your own signature style to make you look slimmer, younger, sexier, more attractive and professional.
                                </p>
                                <p className="mdc-typography--body1 slide__paragraph">
                                    I am an image consultant, stylist, and Ph.D.
                                </p>
                                <Link to="/about">
                                    <button className="mdc-button mdc-button--stroked slide__button">
                                        More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="image-grid">
                        <div className="image01"></div>
                        <div className="image02"></div>
                        <div className="image03"></div>
                        <div className="image04"></div>
                        <div className="image05"></div>
                        <div className="image06"></div>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default HomeCarousel;
