import React from "react";
import Library from "../assets/photo/shunya-koide-1emWndlDHs0-unsplash.jpg";
import { ReactComponent as OnlineClass } from "../assets/svg/online-class.svg";
import { ReactComponent as Pobcast } from "../assets/svg/podcast.svg";
import { ReactComponent as School } from "../assets/svg/school.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";
import { ReactComponent as Ebook } from "../assets/svg/ebook.svg";

const EduSection = () => {
  return (
    <React.Fragment>
      <div className="edu-section">
        <img src={Library}></img>
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
            <button className="transparent-border hover-effect"> Start Exploring</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EduSection;
