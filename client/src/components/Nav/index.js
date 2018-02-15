import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ }) => (
  [
    <NavLink key="about" to="/about">About</NavLink>,
    <NavLink key="philosophy" to="/philosophy">Philosophy</NavLink>,
    <NavLink key="services" to="/services">Services</NavLink>,
      <NavLink key="book" to="/book">The Book</NavLink>,
      <NavLink key="news" to="/news">News/Events</NavLink>,
      <NavLink key="contact" to="/contact">Contact</NavLink>
  ]
);