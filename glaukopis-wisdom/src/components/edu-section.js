import React from "react";
import Library from "../assets/photo/shunya-koide-1emWndlDHs0-unsplash.jpg";
import { ReactComponent as OnlineClass } from "../assets/svg/online-class.svg";
import { ReactComponent as Pobcast } from "../assets/svg/podcast.svg";
import { ReactComponent as School } from "../assets/svg/school.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";
import { ReactComponent as Ebook } from "../assets/svg/ebook.svg";
import { useHistory } from "react-router-dom";

const EduSection = () => {
  const history = useHistory();

  function tempNavHandle() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="edu-section" id="edu">
        <img src={Library} alt="library"></img>
        <div className="edu-content">
          <h1>Shorten your search time - increase your learning</h1>
          <div className="statement-content">
            <p className='statement-content-detail'>
              Our online course selection has been vetted and verified to
              provide you with the industry’s most renowned learning materials.
              Our up to date programs are actively implemented and will help to
              give you a leading edge in your field of interest.
            </p>
            <p>
              <b>Our library is at your fingertips</b>
            </p>
            <div className="support-gallary">
              <OnlineClass className="svg-img" />

              <Pobcast className="svg-img" />

              <School className="svg-img" />

              <Youtube className="svg-img" />

              <Ebook className="svg-img" />
            </div>
            <button
              className="transparent-border hover-effect"
              onClick={tempNavHandle}
            >
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EduSection;
