import "./project.sass";
import gifDev from "../../../assets/leodev.gif";

export const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>

      <div className="about-project-conteiner">
        <h3 className="sub-title-project">Alterdata Open Space</h3>
        <img
          className="gif-dev"
          src={gifDev}
          alt="Desenho do super mário, sentado e programando no computador a noite."
        />
        <p>
          Este foi o nome criado para a aplicação de uso interno da empresa. Os
          colaboradores previamente autorizados podem agendar seus dias e
          horários de trabalho, tudo através de uma interface intuitiva e fácil
          de usar.
        </p>
        <p>
          O sistema representa um ambiente virtual da empresa, com cadeiras
          clicáveis ​​para melhor acessibilidade. <br></br> Após o agendamento
          ser concluído, os colaboradores receberam um e-mail com informações
          sobre a sessão. <br></br>Eles também podem cancelar, excluir ou editar
          o agendamento a qualquer momento.
        </p>
        <p>
          O projeto foi supervisionado com o processo SCRUM, incluindo
          planejamento, reuniões administrativas, retrospectiva e com a
          liderança técnica e o gerente de produto presente.{" "}
        </p>
        <p>
          Eu fiquei responsável pelo desenvolvimento do back-end com Java 11 e
          Spring Boot, e também trabalhei na revisão do front-end feito com
          React JS, Styled Components e Material UI.<br></br> A equipe usou o
          Github como ferramenta de versionamento e o projeto é patrocinado pela
          Alterdata Software.
        </p>
      </div>
    </section>
  );
};
