import "./about.sass";
import superMarioDev from "../../../assets/mariodev.mp4";
import { Bar } from "../../index";
import React from "react";

export const AboutContainer = () => {
  return (
    <section className="about-container">
      <div className="sub-container">
        <h2>Sobre Mim</h2> <Bar />
      </div>
      <p>
        Formado em desenvolvimento software Full-Stack com conhecimento técnico
        em codificação, análise de dados e criação de códigos para o front e
        back end. Cursando ensino superior em Tecnologia da Informação.
      </p>
      <p>
        Experiência com back-end Java Spring, Git, metodologias ágeis, 
        ReactJS e acho relevante dizer que tenho focado em aprofundar meus conhecimentos em clean code, 
        solid, linters e principalmente no TypeScript com NestJS o que tem me agradado bastante.
        <br></br>
        Prototipagens com Figma ou Adobe XD caso necessários, 
        boas noções de estilização e conhecimento em alguns dos diversos frameworks do front-end.
      </p>
      <p>
          Além de Softwares, tenho background com hardwares em geral, montagem, manutenção, 
          upgrades etc, conhecimentos sólidos com Windows, scripts, ferramentas avançadas e confortável com distros linux.
      </p>
      <p>
        Hoje meu objetivo profissional é me comprometer com squads interativos, dinâmicos, 
        que priorizem a comunicação, a demanda em equipe, a organização sobre tudo, 
        o que facilita no desenvolvimento e no foco nas tarefas.
      </p>
      <video autoPlay loop muted
        className="video-super-mario"
        alt="Desenho do super mário, sentado e programando no computador a noite."
      >
        <source src={superMarioDev} type="video/mp4" />
      </video>
    </section>
  );
};
