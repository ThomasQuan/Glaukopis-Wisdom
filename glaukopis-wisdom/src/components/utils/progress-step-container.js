import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
const ProgressStep = () => {
  return (
    <React.Fragment>
      <ProgressBar
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        percent={100}
      >
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ height: "max-content", textAlign: "center" }}
            >
              <i className="fas fa-users fa-1x"></i>
              <p style={{ margin: "1vh 0 0 0", fontSize: '2vh' }}>Register</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ height: "max-content", textAlign: "center" }}
            >
              <i className="fas fa-edit fa-1x"></i>
              <p style={{ margin: "1vh 0 0 0", fontSize: '2vh' }}>Create post</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ height: "max-content", textAlign: "center" }}
            >
              <i className="fas fa-brain fa-1x"></i>
              <p style={{ margin: "1vh 0 0 0", fontSize: '2vh' }}>Be Creative !</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ height: "max-content", textAlign: "center" }}
            >
              <i className="fas fa-upload fa-1x"></i>
              <p style={{ margin: "1vh 0 0 0", fontSize: '2vh' }}>Post!</p>
            </div>
          )}
        </Step>
      </ProgressBar>
    </React.Fragment>
  );
};

export default ProgressStep;
