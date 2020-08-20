import React from "react";
import WelcomeIllustration from "../assets/photo/undraw_welcome_3gvl.png";
const EndSection = () => {
  return (
    <React.Fragment>
      <div className="end-section">
        <div>
          <img src={WelcomeIllustration}></img>
          <h1>Let's jump over to our platform and discover the undiscover</h1>
          <button className="transparent-border hover-effect">
            Join now
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EndSection;
