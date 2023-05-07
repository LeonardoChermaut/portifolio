import "./technologies.sass";
import { Bar } from "../../index";
import { mappedStacks } from "./utils/mappedStacks";

export const TechnologiesContainer = () => {
  return (
    <section className="stacks-container">
      <div className="sub-container">
        <h2>Tecnologias</h2>
        <Bar />
      </div>
      <div className="stacks-grid">{mappedStacks}</div>
    </section>
  );
};
