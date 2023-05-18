import "./technologies.sass";
import { Bar } from "../../index";
import { Stacks } from "./stacks/Stacks";

export const TechnologiesContainer = () => {
  return (
    <section className="stacks-container">
      <div className="sub-container">
        <h2>Tecnologias</h2>
        <Bar />
      </div>
      <div className="stacks-grid"><Stacks /></div>
    </section>
  );
};
