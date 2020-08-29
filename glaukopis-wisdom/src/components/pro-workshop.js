import React from "react";
import InterviewIllustration from "../assets/photo/undraw_interview_rmcf.png";
import { useHistory } from "react-router-dom";
import HandShake from "../assets/photo/cytonn-photography-n95VMLxqM2I-unsplash.jpg";
import { BrowserRouter as Link } from "react-router-dom";

import Slider from "react-slick";

const ProfessionalWorkshop = () => {
  const history = useHistory();

  function NavBusinessPage() {
    window.location.href = "https://glaukopis-wisdom.vercel.app";
  }
  function NavTempPage() {
    history.push("/inprogress");
  }
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    fade : true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      <div className="section" data-aos="fade-down">
        <img src={HandShake} alt="library"></img>
        <div className="content">
          <h1>
            Job in mind? Strengthen your skills and ace your next job interview
            with ease!
          </h1>
          <div className="statement-content">
            <div className="support-gallary-workshop">
              <Slider {...settings}>
                <div className="carousel-div">
                  <h2>Resume Review</h2>
                  <p>
                    We provide a wide range of resume samples, examples, and
                    guidelines to prepare and/or perfect your resume writing.
                  </p>
                  <button
                    className="transparent-border hover-effect carousel-btn"
                    onClick={NavTempPage}
                  >
                    Review now
                  </button>
                </div>
                <div>
                  <h2>Interview Guidance</h2>
                  <p>
                    What is an employer looking for in an interview? What might
                    they ask? How should you dress? Find out all that and more
                    here!
                  </p>
                  <button
                    className="transparent-border hover-effect carousel-btn"
                    onClick={NavTempPage}
                  >
                    Prepare now
                  </button>
                </div>
                <div>
                  <h2>Cover Letter Criteria</h2>
                  <p>
                    Want to stand out from the crowd but not sure how. We’ll
                    tell you exactly how a cover letter can make or break your
                    job search.
                  </p>
                  <button
                    className="transparent-border hover-effect carousel-btn"
                    onClick={NavTempPage}
                  >
                    Review now
                  </button>
                </div>
              </Slider>
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
      {/* <div className="pro-section" id="workshop">
        <div className="pro-section-content">
          <div className="pro-section-title">
            <div className="pro-section-title-content">
              <h1 style={{fontWeight : 'normal'}}>
                Job in mind? Strengthen your skills and ace your next job
                interview with ease!
              </h1>
            </div>
            <div className="pro-section-title-img">
              <img src={InterviewIllustration} alt="interview "></img>
            </div>
          </div>

          <div className="pro-section-desc">
            <div className="pro-section-desc-container">
              <h2>Resume Review</h2>
              <p>
                We provide a wide range of resume samples, examples, and
                guidelines to prepare and/or perfect your resume writing.
              </p>
              <button className="transparent-border hover-effect">
                Review now
              </button>
            </div>
            <div className="pro-section-desc-container">
              <h2>Interview Guideline(s)</h2>
              <p>
                What is an employer looking for in an interview? What might they
                ask? How should you dress? Find out all that and more here!
              </p>
              <button className="transparent-border hover-effect">
                Prepare now
              </button>
            </div>
            <div className="pro-section-desc-container">
              <h2>Cover Letter Criteria</h2>
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
      </div> */}
    </React.Fragment>
  );
};

export default ProfessionalWorkshop;
