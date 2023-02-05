import "./project.sass";
import gifDev from "../../../assets/leodev.gif";
import { Bar } from "../../bar/Bar";

export const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <div className="sub-container">
      <h2>Projetos</h2>
      <Bar />
      </div>

      <div className="about-project-conteiner">
        <h3 className="sub-title-project">Alterdata Open Space</h3>
        <img
          className="gif-dev"
          src={gifDev}
          alt="Desenho do super mário, sentado e programando no computador a noite."
        />
        <p>
          Este foi o nome criado para a aplicação de uso interno da empresa. Os
          colaboradores previamente autorizados, podem agendar seus dias e
          horários de trabalho, tudo através de uma interface intuitiva e fácil
          de usar.
        </p>
        <p>
          Este sistema representa um ambiente virtual e real da empresa, com cadeiras totalmente
          clicáveis  e com as imagens para melhor acessibilidade. <br></br> Após o agendamento
          ser concluído, caso houvessem colaboradores convidados para a sessão, os colaboradores recebera um e-mail com informações
          de horário, acentos e as respectivas datas de entrada e saída. <br></br>O colaborador responsável pelo cadastro pode cancelar, excluir ou editar
          o agendamento a qualquer momento.
        </p>
        <p>
          O projeto foi supervisionado com o processo SCRUM, incluindo
          planejamento, reuniões administrativas, retrospectiva e com a
          liderança técnica e o gerente de produto presente.
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
