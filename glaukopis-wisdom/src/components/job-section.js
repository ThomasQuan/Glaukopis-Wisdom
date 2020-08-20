import React, { useRef } from "react";

const JobSection = () => {

  return (
    <React.Fragment>
      <div className="job-section" id='job'>
        <div className="job-section-content transparent-border">
          <h1 className="job-section-content-title">
            Job Search Opportunities{" "}
          </h1>
          <h2 className="job-section-content-subtitle">
            Find your calling below, a new career is just one click away with
            our dedicated job board !
          </h2>
          <div className="comparison-section">
            <div>
              <h1>Introducing Glaukopis Job search</h1>
              <h2>Provide an in house bulletin boards dedicated to find :</h2>
              <ul>
                <li>Job post from different Job board</li>
                <li>Networking Event</li>
                <li>Company Job notice around you</li>
              </ul>
              <button className="transparent-border hover-effect">
                Find your job
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobSection;
