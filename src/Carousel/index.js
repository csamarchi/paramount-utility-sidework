import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Nav from '../Nav';

class CarouselPage extends Component {
  constructor() {
    super();

  }

  render() {

          return (
          <div >
          <Nav />
          <Carousel>
            <div className="wirelessServices">
              <h1> WIRELESS SERVICES </h1>
              <p>Paramount Utility is a full service turnkey contractor dedicated to serving the wireless industry in the western-US. We specialize in building, maintaining and modernizing your wireless facilities; on-time and on-budget. We provide professional services on a project basis or to augment your current staff while filling a short term requirement. </p>
              <p>The following is an overview of the services we provide clients throughout the western-US. </p>
            </div>
            <div className="civilWirelineServices">
              <h1> CIVIL / WIRELINE SERVICES </h1>
              <p>Paramount Utility is a full service turnkey contractor dedicated to serving the wireless industry in the western-US. We specialize in building, maintaining and modernizing your wireless facilities; on-time and on-budget. We provide professional services on a project basis or to augment your current staff while filling a short term requirement. </p>
              <p>The following is an overview of the services we provide clients throughout the western-US. </p>
            </div>
          </Carousel>
          </div>
          )
        }
      }

export default CarouselPage;
