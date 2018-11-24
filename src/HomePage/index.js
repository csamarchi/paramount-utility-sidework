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
        <h1 className="homeText"> Paramount Utilies </h1>
        <div className="logo" />
          <div>
            <h2>ON-TIME, ON-BUDGET, SAFETY-FOCUSED</h2>
            <p>Paramount Utility Corporation is a full service turnkey contractor dedicated to serving the wireless and wireline telecommunications industries in the western-US. We specialize in building your facilities; on-time and on-budget. Our experienced leadership team and crews are fully trained and acutely aware of the importance of safety – at all times. </p>
              <button>Wireless </button>
              <button>Civil/Wireline </button>
              <button>Engineer </button>
            <p>Give us a call to discuss your projects at (720) 726-4000 or contact us via email at info@paramountutility.com. </p>
          </div>
      </div>
    )
  }
}

export default HomePage;
