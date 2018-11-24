import React, {Component} from 'react';
import Nav from '../Nav';

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
          <h2> ON-TIME. ON-BUDGET. SAFETY-FOCUSED.</h2>
          <p> Paramount Utility is a full service turnkey contractor dedicated to serving the telecommunications industry in the western-US. We specialize in building, maintaining and modernizing your wireless and wireline facilities; on-time and on-budget. Our experienced leadership team and crews are fully trained and acutely aware of the importance of safety – at all times.</p>
          <p>Our leadership team has over 90 years of wireless and wireline utility construction experience. Safety training and applying that training in the field is of paramount importance to all staff. Our goal is to produce an excellent product for you and your customers, and for our team members to complete that product safely and efficiently. Meet the team </p>
          <p>Paramount Utility Corporation. Paramount is a full service wireless and wireline construction contractor based in Denver, Colorado. Our wireless division is based in our Phoenix, Arizona regional office.</p>
          <p> Feel free for reach out to any member of the team to discuss your projects at (720) 726-4000 or via email at info@paramountutility.com.</p>
      </div>
    )
  }
}

export default About;
