import React, {Component} from 'react';
import Nav from '../Nav';

class PortfolioPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
        <h1> Portfolio </h1>

              <div class="row">
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal01"><img src="../images/CAM00062-(Staples)_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal02"><img src="images/DSCF0383_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal03"><img src="images/DSCF0406_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal04"><img src="images/Eric_02_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal05"><img src="images/IMAG0001_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal06"><img src="images/ebcboring_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
              </div>

                <div class="row">
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal07"><img src="images/large_bore_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal08"><img src="images/SAM_0036_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal09"><img src="images/tower_1_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal10"><img src="images/tower_02_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal11"><img src="images/tower-cactus_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                  <div>
                    <p><a  data-toggle="modal" data-target="#imageModal12"><img src="images/DSCF0416_thumb.jpg" class="img-responsive pu_portfolio_image" /></a></p>
                  </div>
                </div>

      </div>
    )
  }
}

export default PortfolioPage;
