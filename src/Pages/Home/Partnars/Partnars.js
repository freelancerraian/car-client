import React from 'react';
import './Partnars.css';
import img1 from "../../../images/2.jpg";
import img2 from "../../../images/Adidas-logo.jpg";
import img3 from "../../../images/download (1).png";
import img4 from "../../../images/download.png";
import img5 from "../../../images/Hyundai-logo.jpg";
import img6 from "../../../images/png.png";

const Partnars = () => {
    return (
      <div>
        <section className="partnars">
          <div className="part-head">
            <h1>PARTNERS</h1>
            <div className="spon-logo">
              <img src={img1} alt="sponsar" />
              <img src={img2} alt="sponsar" />
              <img src={img3} alt="sponsar" />
              <img src={img4} alt="sponsar" />
              <img src={img5} alt="sponsar" />
              <img src={img6} alt="sponsar" />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Partnars;