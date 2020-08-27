import React from "react";
import "./App.scss";
import IntroSection from "./components/intro-section";
import EduSection from "./components/edu-section";
import JobSection from "./components/job-section";
import CommunitySection from "./components/com-section";
import ProfessionalWorkshop from "./components/pro-workshop";
import EndSection from "./components/end-section";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientError from "./components/construction-site/404";
import InProgress from "./components/construction-site/inprogress";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <IntroSection></IntroSection>
            <div className="gap-title">
              <h1>Educational Programs</h1>
            </div>
            <EduSection></EduSection>
            <JobSection></JobSection>
            <CommunitySection></CommunitySection>
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
