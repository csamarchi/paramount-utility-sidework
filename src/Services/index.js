import React, {Component} from 'react';
import Nav from '../Nav';
import './style.css';

class Services extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div className="servicesBackground">
          <Nav />
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
            <div className="engineering">
              <h1> ENGINEERING</h1>
              <p>Successful projects begin with quality engineering. </p>
              <p>Paramount Utility offers engineering and design services that allow us to provide clients with a blueprint to a successful project outcome – on time, on budget and safety focused. Our engineers, designers and fielders are experts in their field, offering a wide array of knowledge and expertise. </p>
              <p>Our engineers bring decades of experience to the design, engineering and implementation of advanced telecommunications projects. We bring the technological know-how, quality and integrity to your projects, both large and small. Paramount Utility also provides overall project management, feasibility studies, design, detailed engineering, project coordination and management of the actual construction. </p>
              <p>The following is an overview of the engineering services we provide clients throughout the western-US. </p>
            </div>
          </div>

      </div>
    )
  }
}

export default Services;
