import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ReactPageScroller from "react-page-scroller";
import {Pager} from "react-bootstrap";

import HomePage from '../HomePage';
import Services from '../Services';
import SafetyPage from '../SafetyPage';
import PortfolioPage from '../PortfolioPage';
import About from '../About';
import Contact from '../Contact';
import './style.css';

class Nav extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <nav className = "navBar">
        <ul>
          <li><Link to='/'> <img className='paramountSmall' src='paramountsmall.svg' /> </Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to ='/services'>Services</Link></li>
          <li><Link to ='/safety'>Safety</Link></li>
          <li><Link to = '/portfolio'>Portfolio</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;
