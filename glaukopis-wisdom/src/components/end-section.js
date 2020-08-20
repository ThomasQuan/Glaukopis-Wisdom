import React from "react";
import WelcomeIllustration from "../assets/photo/undraw_welcome_3gvl.png";
import { useHistory } from "react-router-dom";

const EndSection = () => {
  const history = useHistory();

  function tempNavHandle() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="end-section">
        <div>
          <img src={WelcomeIllustration} alt='undraw welcome'></img>
          <h1>Let's jump over to our platform and discover the undiscover</h1>
          <button
            className="transparent-border hover-effect"
            onClick={tempNavHandle}
          >
            Join now
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EndSection;
