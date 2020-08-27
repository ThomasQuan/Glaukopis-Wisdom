import React from "react";
import Community from "../assets/photo/united-nations-covid-19-response.jpg";
import "react-step-progress-bar/styles.css";
import ProgressStep from "./utils/progress-step-container";
import { useHistory } from "react-router-dom";

const CommunitySection = () => {
  const history = useHistory();

  function tempNavHandle() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="com-section" id="community">
        <img
          src={Community}
          alt="united-nations-covid-19-response-unsplash"
        ></img>
        <div className="com-section-content">
          <div className="com-section-content-title-container">
            <h1>Community Hub</h1>
          </div>
          <h2>
            Our community hub is a gateway for teachers, students, businesses,
            and individuals - All working, learning, and improving as one.
          </h2>
          <h2>
          Join the forum, search subjects, ask questions, find answers, and help yourself and our community grow.
          </h2>

          <button
            className="transparent-border hover-effect"
            onClick={tempNavHandle}
          >
            Visit our hub
          </button>
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
