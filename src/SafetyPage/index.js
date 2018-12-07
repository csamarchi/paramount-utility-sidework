import React, {Component} from 'react';
import Nav from '../Nav';
import './style.css';

class SafetyPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div className="safetyBackground">
          <Nav />
          <div className="safetyContainer">
              <h1> Safety </h1>
                <p> We pride ourselves on building a culture of safety. </p>
                <p> The Paramount Utility leadership team values the safety and well-being of our employees. We routinely verify certifications, sponsor training and conduct meetings to convey the importance of safety. We have deployed the necessary resources to reduce potential hazards, prevent accidents and injuries, and assure safe work practices. </p>
                <p> Our commitment to safety is shared at all levels within the company. Our experienced safety director and contract OSHA-certified trainers work together to educate our employees on safe practices, and ensure their compliance.</p>
                <p>Our field-oriented employees are required to have and maintain the following training / certifications:</p>
                <p> All field personnel: </p>
                  <ul>
                    <li>OSHA 10 Construction Safety and Health </li>
                    <li> OSHA 30 Construction Safety and Health (all Leads)</li>
                    <li> CPR / AED / Basic First Aid</li>
                  </ul>
                <p> Wireless personnel:</p>
                  <ul>
                    <li>RF Safety and Awareness </li>
                    <li>Tower Safety and Climbing (appropriate employees)</li>
                    <li> Additional client / carrier requirements (e.g. AT&Ts Ask Yourself,etc.)</li>
                  </ul>
                <p>Paramount Utility has adopted the best practices from our and our clients safety manuals. Safety is an on-going and continual process. </p>
                <p>Everyone is in charge of safety.</p>
            </div>
       </div>
      </div>
    )
  }
}

export default SafetyPage;
