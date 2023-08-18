import React from "react";
import {
  TechnologiesContainer,
  AboutContainer,
  ProjectsContainer,
} from "../index";
import "./maincontent.sass";

export const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};
