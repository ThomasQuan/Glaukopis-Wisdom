import React from "react";
import Galaxy2 from "../../assets/photo/matt-gross-uPa8mFbySYw-unsplash.jpg";
import { Link } from "react-router-dom";

const ClientError = () => {
  return (
    <React.Fragment>
      <div className="client-error-container">
        <div>
          <img src={Galaxy2} alt="unsplash matt gross universe"></img>
        </div>
        <h1>
          Error 404: Page not found
          <br />
          Instead here is a picture of space.
        </h1>
        <Link to="/" className="link-back">
          <i className="fas fa-rocket fa-4x"> </i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ClientError;
