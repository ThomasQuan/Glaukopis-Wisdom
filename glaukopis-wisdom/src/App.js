import React, { useEffect } from "react";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from "./components/intro-section";
import EduSection from "./components/edu-section";
import JobSection from "./components/job-section";
import CommunitySection from "./components/com-section";
import ProfessionalWorkshop from "./components/pro-workshop";
import EndSection from "./components/end-section";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientError from "./components/construction-site/404";
import InProgress from "./components/construction-site/inprogress";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <IntroSection></IntroSection>
            <div className="gap-title" id="edu">
              <h1>Educational Programs</h1>
            </div>
            <EduSection ></EduSection>
            <div className="gap-title" id="job" >
              <h1>Job Opportunities</h1>
            </div>
            <JobSection></JobSection>
            <div className="gap-title" id="com">
              <h1>Community Hub</h1>
            </div>
            <CommunitySection></CommunitySection>
            <div className="gap-title" id="pro">
              <h1>Professional Workshop</h1>
            </div>
            <ProfessionalWorkshop></ProfessionalWorkshop>
            <EndSection></EndSection>
          </Route>
          <Route path="/inprogress" exact>
            <InProgress />
          </Route>
          <Route path="*">
            <ClientError />
          </Route>
        </Switch>
      </div>
    </Router>

    // <div className="App">
    //   <IntroSection></IntroSection>
    //   <div className="gap-title">
    //     <h1>Educational search program</h1>
    //   </div>
    //   <EduSection></EduSection>
    //   <JobSection></JobSection>
    //   <CommunitySection></CommunitySection>
    //   <ProfessionalWorkshop></ProfessionalWorkshop>
    //   <EndSection></EndSection>
    // </div>
  );
}

export default App;
