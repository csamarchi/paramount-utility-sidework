import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Services from './Services';
import SafetyPage from './SafetyPage';
import PortfolioPage from './PortfolioPage';
import About from './About';
import Contact from './Contact';


const My404 = () => {
  return (
    <div>
      Youre Lost
    </div>
    )
};

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/services" component={ Services } />
        <Route exact path="/safety" component={ SafetyPage } />
        <Route exact path="/portfolio" component={ PortfolioPage } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route component={My404} />
      </Switch>
    </main>
    )
};



export default App;
