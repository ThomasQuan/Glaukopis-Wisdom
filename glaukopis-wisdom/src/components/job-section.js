import React from "react";
import { useHistory } from "react-router-dom";
import BriefCase from "../assets/photo/briefcase-walk.jpg";
import { ReactComponent as Indeed } from "../assets/svg/indeed-logo.svg";
import { ReactComponent as Monster } from "../assets/svg/monster-logo.svg";
import { ReactComponent as Google } from "../assets/svg/Google__G__Logo.svg";
import { ReactComponent as LinkedIn } from "../assets/svg/linkedin.svg";
import { ReactComponent as IBM } from "../assets/svg/IBM_logo.svg";
import { ReactComponent as Deloitte } from "../assets/svg/Deloitte.svg";

const JobSection = () => {
  const history = useHistory();

  function NavBusinessPage() {
    window.location.href = "https://glaukopis-wisdom.vercel.app";
  }

  return (
    <React.Fragment>
      <div className="section" data-aos="fade-up">
        <img className="job-img" src={BriefCase} alt="library"></img>

        <div className="content">
          <h1>
            Job board like any other - but more precise and related to your
            field of interest.
          </h1>
          <div className="statement-content">
            <p
              className="statement-content-detail"
              style={{ textAlign: "start" }}
            >
              With our in house bulletin boards that are made to be the first
              stop on your employment pursuits. We offer links to job search
              engines, companies hiring around you, and business postings for
              both contract and internship availabilities.
            </p>
            <p>
              <b>
                We search for multiple job boards to help you find what you need
              </b>
            </p>
            <div className="support-gallary">
              <Indeed className="svg-img" />
              <Monster className="svg-img" />
              <Google className="svg-img" />
              <LinkedIn className="svg-img" />
              <IBM className="svg-img" />
              <Deloitte className="svg-img" />
            </div>
            <button
              className="transparent-border hover-effect"
              onClick={NavBusinessPage}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* <div className="job-section" id="job">
        <div className="job-section-content transparent-border">
          <h1 className="job-section-content-title">Job Opportunities </h1>
          <h3 className="job-section-content-subtitle">
            Our in house bulletin boards are made to be the first stop on your
            employment pursuits. We offer links to job search results, companies
            hiring around you, and business postings for both contract and
            internship availabilities.
          </h3>
          <div className="comparison-section">
            <div>
              <h2>Introducing Glaukopis Job Search For:</h2>
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
      </div> */}
    </React.Fragment>
  );
};

export default JobSection;
