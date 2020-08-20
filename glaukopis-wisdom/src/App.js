import React from "react";
import "./App.scss";
import IntroSection from "./components/intro-section";
import EduSection from "./components/edu-section";
import JobSection from "./components/job-section";
import CommunitySection from "./components/com-section";
import ProfessionalWorkshop from "./components/pro-workshop";
import EndSection from "./components/end-section";
function App() {
  return (
    <div className="App">
      <IntroSection></IntroSection>
      <div className="gap-title">
        <h1>Educational search program</h1>
      </div>
      <EduSection></EduSection>
      <JobSection></JobSection>
      <CommunitySection></CommunitySection>
      <ProfessionalWorkshop></ProfessionalWorkshop>
      <EndSection></EndSection>
    </div>
  );
}

export default App;
