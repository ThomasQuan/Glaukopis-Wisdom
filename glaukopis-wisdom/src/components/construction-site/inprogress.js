import React from "react";
import { Link } from "react-router-dom";

const InProgress = () => {
  return (
    <React.Fragment>
      <div className="inprogress-container">
        <h1>
          Our production website will be available soon, <br /> Stay tune.{" "}
        </h1>
        <Link to="/" className="link-back">
          <i className="fas fa-backward "> Head back</i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default InProgress;
