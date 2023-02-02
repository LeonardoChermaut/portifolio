import { TechnologiesContainer } from "../containers/technologies/TechnologiesContainer";
import { AboutContainer } from "../containers/about/AboutContainer";
import { ProjectsContainer } from "../containers/project/ProjectsContainer";
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
