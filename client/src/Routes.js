import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './containers/Home/View';
import AboutContainer from './containers/About/View';
import PhilosophyContainer from './containers/Philosophy';
import ServicesContainer from './containers/Services';
import BookContainer from './containers/Book';
import NewsContainer from './containers/News';
import ContactContainer from './containers/Contact';

export default ({ }) => (
    [
        <Route key="home" exact path="/" component={HomeContainer}></Route>,
        <Route key="about" exact path="/about" component={AboutContainer}></Route>,
        <Route key="philosophy" exact path="/philosophy" component={PhilosophyContainer}></Route>,
        <Route key="services" exact path="/services" component={ServicesContainer}></Route>,
        <Route key="book" exact path="/book" component={BookContainer}></Route>,
        <Route key="news" exact path="/news" component={NewsContainer}></Route>,
        <Route key="contact" exact path="/contact" component={ContactContainer}></Route>
    ]
);
