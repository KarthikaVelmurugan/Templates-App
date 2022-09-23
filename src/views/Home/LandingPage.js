import React from "react";
import landingImage from "../../assets/images/landingImage.png";
const LandingPage = () => {
  return (
    <>
      <div className="landingInfo">

          <div className="title">One Step Closer to Choose Your Invoice Template</div>
          <div className="subtitle">Explore various desings of invoice templates which has all the information properties as you need. Its your great choice , come and choose it. You can test your invoice xml with your favoraite customized XSL templates as your wish.</div>
          <button className="btn">Get Started</button>
      </div>
      <div className="landingImage">
        <img
          src={landingImage}
          alt="OneBill Software Templates App Landing Image"
        />
      </div>
    </>
  );
};

export default LandingPage;
