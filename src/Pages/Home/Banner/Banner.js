import React from 'react';
import './Banner.css';
import car from "../../../images/car.jpg";

const Banner = () => {
    return (
      <section class="home-sec d-flex justify-content-center align-items-center">
        <div class="container ">
          <div class="row home-row">
            <div class="col-lg-6 col-md-6 col-sm-12 ">
              <p>
                Computer-controlled digital transistorized with electronic
                advance
              </p>
              <h1>Tesla car</h1>
              <h4>Automated manual transmission</h4>
              <p>
                Tesla cars come standard with advanced hardware capable of
                providing Autopilot features, and full self-driving
                capabilities—through software updates designed to improve
                functionality over time. Tesla's Autopilot AI team drives the
                future of autonomy of current and new generations of vehicles.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img class="img-fluid" src={car} alt="honda pic" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;