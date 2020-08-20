import React from "react";
import { ReactComponent as Owl } from "../assets/svg/owl.svg";

const IntroSection = () => {
  return (
    <React.Fragment>
      <div className="intro-section">
        <div className="intro-header">
          <div className="intro-logo">
            <Owl></Owl>
          </div>
        </div>
        <div className="intro-content transparent-border">
          <h1 className="intro-title">Glaukopis Wisdom</h1>
          <h2 className="intro-subtitle">
            A place for you to search for all learning materials, job posts and
            tips around the internet <b>within a single platform</b>
          </h2>
          <div className="button-container">
            <button className="transparent-border">Educational program</button>
            <button className="transparent-border">Job Opportunities</button>
            <button className="transparent-border">Community Hub</button>
            <button className="transparent-border">
              Professional Workshop
            </button>
          </div>
        </div>
        <div className="intro-cont transparent-border ">
          <h1>Scroll to learn more</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
