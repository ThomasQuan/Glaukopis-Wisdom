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
            A search platform with dedicated community hub for you to search for all learning
            materials, job posts and tips around the internet
            <b>within a single platform</b>
          </h2>
          <div className="button-container">
            <a href='#edu' className="transparent-border hover-effect">
              Educational program
            </a>
            <a href='#job' className="transparent-border hover-effect">
              Job Opportunities
            </a>
            <a href='#community' className="transparent-border hover-effect">
              Community Hub
            </a>
            <a href='#workshop' className="transparent-border hover-effect">
              Professional Workshop
            </a>
          </div>
        </div>
        <div className="intro-cont transparent-border ">
          <h2>Scroll down to checkout our feature</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
