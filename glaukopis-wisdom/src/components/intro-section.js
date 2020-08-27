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
        <div className="intro-content">
          <h1 className="intro-title">Glaukopis Wisdom</h1>
          <h2 className="intro-subtitle">
            Your curated library of learning materials, job postings, and
            dedicated networking communities -
            <b> All within a single sources!</b>
          </h2>
          <div className="button-container">
            <a href="#edu" className="transparent-border hover-effect" style={{borderRadius : '0px'}}>
              Educational Programs
            </a>
            <a href="#job" className="transparent-border hover-effect" style={{borderRadius : '0px'}}>
              Job Opportunities
            </a>
            <a href="#community" className="transparent-border hover-effect" style={{borderRadius : '0px'}}>
              Community Hub
            </a>
            <a href="#workshop" className="transparent-border hover-effect" style={{borderRadius : '0px'}}>
              Professional Workshop
            </a>
          </div>
        </div>
        {/* Fix this problem to make to more visiable and User friendly */}
        <div className="intro-cont transparent-border ">
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
