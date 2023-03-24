import "./about.sass";
import gifSuperMario from "../../../assets/mariodev.gif";
import { Bar } from "../../index";

export const AboutContainer = () => {
  return (
    <section className="about-container">
      <div className="sub-container">
        <h2>Sobre Mim</h2> <Bar />
      </div>
      <p>
        Formado em desenvolvimento software Full-Stack com conhecimento técnico
        em codificação, análise de dados e criação de códigos para o front e
        back end. Cursando ensino superior em Tecnologia da Informação.<br></br>
        <p>
          Experiência em Java Spring Boot, Github com versionamento de código em
          equipe, metodologias ágeis como SCRUM (dailys, plannings, retro etc.),
          componentização funcional com React e React Hooks, Javascript e
          focando em TypeScript. Prototipagem em Figma caso necessários, boas
          noções de estilização UI UX com CSS3 FlexBox e GridLayout, Sass,
          Styled Components, HTML5 semântico, Boostrap, MaterialUI etc.
        </p>
        Meu objetivo profissional é me comprometer com squads interativos,
        dinâmicos e que priorizem a demanda em equipe, a qualidade entre os
        colaboradores, facilitando assim o desenvolvimento de aplicativos.
      </p>
      <img
        className="gif-super-mario"
        src={gifSuperMario}
        alt="Desenho do super mário, sentado e programando no computador a noite."
      />
    </section>
  );
};
