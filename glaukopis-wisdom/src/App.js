import React from "react";
import "./App.scss";
import IntroSection from "./components/intro-section";
import EduSection from "./components/edu-section";
import JobSection from "./components/job-section";
function App() {
  return (
    <div className="App">
      <IntroSection></IntroSection>
      <div className="gap">
        <h1>Learn more about what we do</h1>
      </div>
      <EduSection></EduSection>
      <JobSection></JobSection>
    </div>
  );
}

export default App;
