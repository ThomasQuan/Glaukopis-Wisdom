import React from "react";
import Community from "../assets/photo/united-nations-covid-19-response.jpg";
import CommunityIllustration from "../assets/photo/community_hub_illustration.png";
import "react-step-progress-bar/styles.css";
import ProgressStep from "./utils/progress-step-container";
const CommunitySection = () => {
  return (
    <React.Fragment>
      <div className="com-section">
        <img
          src={Community}
          alt="united-nations-covid-19-response-unsplash"
        ></img>
        <div className="com-section-content">
          <div className='com-section-content-title-container'>
            <h1>Community Hub</h1>
            <button className="transparent-border hover-effect">
              Visit our hub
            </button>
          </div>
          <h2>
            Our community hub is a gateway for teachers, students, businesses,
            and individuals - All working, learning, and improving as one.
          </h2>

          <div className="com-process-bar">
            <h1> The process is simple</h1>

            <ProgressStep></ProgressStep>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommunitySection;
