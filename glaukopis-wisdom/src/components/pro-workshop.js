import React from "react";
import DocumentIllustration from "../assets/photo/document.png";
import InterviewIllustration from "../assets/photo/undraw_interview_rmcf.png";

const ProfessionalWorkshop = () => {
  return (
    <React.Fragment>
      <div className="pro-section">
        <div className="pro-section-content">
          <div className="pro-section-title">
            <h1>Hiring Workshop</h1>
            <img src={DocumentIllustration} alt="document"></img>
          </div>
          <h2>
            Job in mind? Strengthen your skills and ace your next job interview
            with ease.
          </h2>
          <div className="pro-section-desc">
            <div className="pro-section-desc-container">
              <h1>Resume Review</h1>
              <p>
                We provide a wide range of resume samples, examples, and
                guidelines to prepare and/or perfect your resume writing.
              </p>
            </div>
            <div className="pro-section-desc-container">
              <h1>Interview tips</h1>
              <p>
                What is an employer looking for in an interview? What might they
                ask? How should you dress? Find out all that and more here!
              </p>
            </div>
            <div className="pro-section-desc-container">
              <h1>Cover letter</h1>
              <p>
                Want to stand out from the crowd but not sure how. We’ll tell
                you exactly how a cover letter can make or break your job
                search.
              </p>
            </div>
            <div className="pro-section-desc-container">
              <button className='transparent-border hover-effect'>Visit the workshop</button>
            </div>
          </div>
        </div>
        <img src={InterviewIllustration}></img>
      </div>
    </React.Fragment>
  );
};

export default ProfessionalWorkshop;
