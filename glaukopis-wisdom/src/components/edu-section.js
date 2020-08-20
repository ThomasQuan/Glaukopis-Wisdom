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
          <h1>Shorten the search duration - increase the learning capacity</h1>
          <div className="statement-content">
            <ul>
              <li>
                We provide a range of learning materials from YouTube online
                videos to e-book, all within our dedicated library.
              </li>
              <li>
                Our library cover all different kind of subject materials,
                ranging from Business,Art to Robotics Engineers.
              </li>
            </ul>
            <p>All to satisfy your thirst for knowledge.</p>
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
