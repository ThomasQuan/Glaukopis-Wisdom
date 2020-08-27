import React from "react";
import DocumentIllustration from "../assets/photo/document.png";
import InterviewIllustration from "../assets/photo/undraw_interview_rmcf.png";
import { useHistory } from "react-router-dom";

const ProfessionalWorkshop = () => {
  const history = useHistory();

  function tempNavHandle() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="pro-section" id="workshop">
        <div className="pro-section-content">
          <div className="pro-section-title">
            <div className="pro-section-title-content">
              <h1>Hiring Workshop</h1>
              <h2>
                Job in mind? Strengthen your skills and ace your next job
                interview with ease!
              </h2>
            </div>
            <div className="pro-section-title-img">
              <img src={InterviewIllustration} alt="interview "></img>
            </div>
          </div>

          <div className="pro-section-desc">
            <div className="pro-section-desc-container">
              <h1>Resume Review</h1>
              <p>
                We provide a wide range of resume samples, examples, and
                guidelines to prepare and/or perfect your resume writing.
              </p>
              <button className="transparent-border hover-effect">
                Review now
              </button>
            </div>
            <div className="pro-section-desc-container">
              <h1>Interview Guideline(s)</h1>
              <p>
                What is an employer looking for in an interview? What might they
                ask? How should you dress? Find out all that and more here!
              </p>
              <button className="transparent-border hover-effect">
                Prepare now
              </button>
            </div>
            <div className="pro-section-desc-container">
              <h1>Cover Letter Criteria</h1>
              <p>
                Want to stand out from the crowd but not sure how. We’ll tell
                you exactly how a cover letter can make or break your job
                search.
              </p>
              <button className="transparent-border hover-effect">
                Review now
              </button>
            </div>
         
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfessionalWorkshop;
