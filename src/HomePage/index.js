import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Nav from '../Nav';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
      </div>
    )
  }
}

export default HomePage;
