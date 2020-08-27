import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const JobSection = () => {
  const history = useHistory();

  function tempNavHandle() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="job-section" id="job">
        <div className="job-section-content transparent-border">
          <h1 className="job-section-content-title">Job Opportunities </h1>
          <h2 className="job-section-content-subtitle">
            Our in house bulletin boards are made to be the first stop on your
            employment pursuits. We offer links to job search results, companies
            hiring around you, and business postings for both contract and
            internship availabilities.
          </h2>
          <div className="comparison-section">
            <div>
              <h1>Introducing Glaukopis Job Search For:</h1>
              <div className="button-container">
                <div className="transparent-border">Job Links</div>
                <div className="transparent-border">Company Postings</div>
                <div className="transparent-border">Networking Events</div>
              </div>
              <button
                className="transparent-border hover-effect"
                onClick={tempNavHandle}
              >
                Find your career
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobSection;
