import React, {Component} from 'react';

class Footer extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className="footer">
        <p> © 2015 Paramount Utility Corp. </p>
        <p className="privacyText" > Privacy Policy </p>
      </div>
    )
  }
}
export default Footer;
