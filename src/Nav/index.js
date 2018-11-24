import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';


const Nav = () => {
  return (
      <nav className = "navBar">
        <ul>
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

export default Nav;
