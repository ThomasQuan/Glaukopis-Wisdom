import React from "react";
import Library from "../assets/photo/shunya-koide-1emWndlDHs0-unsplash.jpg";
import { ReactComponent as ImgPlaceHolder } from "../assets/svg/photo.svg";

const EduSection = () => {
  return (
    <React.Fragment>
      <div className="edu-section">
        <img src={Library}></img>
        <div className="edu-content">
          <h1>A center for all education around the internet</h1>
          <div className="statement-content">
            <p>
              Our mission is to help individual study and prepare for their
              future dream job is to help limit the search time and increase the
              learning time.
              <br />
              <br />
              We have search all over the internet for more than thousands of
              resources including Online courses, University book, YouTube
              videos, and more. <br />
              <br />
              We also have created a community hub for individual to help teach
              and coach job seeker to their success which you can check further
              along.
            </p>
            <div className="support-gallary">
              <ImgPlaceHolder className='svg-img' />
              <ImgPlaceHolder className='svg-img' />
              <ImgPlaceHolder className='svg-img' />
              <ImgPlaceHolder className='svg-img' />
              <ImgPlaceHolder className='svg-img' />
            </div>
            <button className="transparent-border"> Start Exploring</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EduSection;
