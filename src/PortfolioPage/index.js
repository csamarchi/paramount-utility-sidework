import React, {Component} from 'react';
import Nav from '../Nav';
import './style.css';

class PortfolioPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
      <div className="portfolioBackground">
        <Nav />
        <h1> Portfolio </h1>
              <div className="wrapper">
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal01"><img src="CAM00062-(Staples)_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal02"><img src="DSCF0383_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal03"><img src="DSCF0406_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal04"><img src="Eric_02_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal05"><img src="IMAG0001_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal06"><img src="ebcboring_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal07"><img src="large_bore_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal08"><img src="SAM_0036_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal09"><img src="tower_1_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal10"><img src="tower_02_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal11"><img src="tower-cactus_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div className="photo">
                    <p><a  data-toggle="modal" data-target="#imageModal12"><img src="DSCF0416_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                </div>
        </div>
      </div>
    )
  }
}

export default PortfolioPage;
