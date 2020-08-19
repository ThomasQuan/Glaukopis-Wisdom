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
          <h3>
            Why bother going around the internet, wasting hours on hours
            searching for the right source of education or job post for your
            returning position or the next job when all is done for you with
            Glaukopis Wisdom.
          </h3>
          <div className="button-container">
            <button className="transparent-border">Learn</button>
            <button className="transparent-border">Job Search</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
