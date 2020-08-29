import React from "react";
import Thankyou from "../assets/photo/morvanic-lee-GiUJ02Yj_io-unsplash.jpg";
import { ReactComponent as Owl } from "../assets/svg/owl.svg";

import { useHistory } from "react-router-dom";

const EndSection = () => {
  const history = useHistory();

  function NavBusinessPage() {
    window.location.href = "https://glaukopis-wisdom.vercel.app";
  }
  function NavTempPage() {
    history.push("/inprogress");
  }
  return (
    <React.Fragment>
      <div className="end-section">
        <div>
          <img src={Thankyou} alt="undraw welcome"></img>
          <div>
            <Owl className="end-logo"></Owl>
            <h1>Start your new career today!</h1>
            <button
              className="transparent-border "
              onClick={NavTempPage}
            >
              Join now
            </button>
            <button
              className="transparent-border hover-effect"
              onClick={NavBusinessPage}
              style={{color : 'black', backgroundColor : '#b47775' ,marginTop : '2vh' }}
            >
              Explore more
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EndSection;
