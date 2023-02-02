import "./project.sass";
import gifDev from "../../../assets/leodev.gif";

export const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>

      <h3 className="sub-title-project">Alterdata Open Space</h3>
      <img
        className="gif-dev"
        src={gifDev}
        alt="Desenho do super mário, sentado e programando no computador a noite."
      />
      <div className="about-project-conteiner">
        <p>
          Onde os requisitos projeto, consistiam na criação de uma aplicação
          "Cool Work", onde apenas os colaboradores internos da empresa teriam
          acesso.
          <p>
            Previamente autorizados, a aplicação permitiria o usuário agendar o
            dia, ou, os dias de trabalho, assim também como, os respectivos
            horários de entrada e saída. Foi implementado uma representação
            virtual real do ambiente interno da empresa, onde os acentos eram
            clicáveis, dando maior acessibilidade e conforto para o usuário.
          </p>
          <p>
            Após o agentamento concluído, o sistema envia um convite para os
            emails selecionados, caso houvessem e colaborador poderia fazer as
            seguintes ações após uma sessão cadastrada; poderia efetuar o
            cancelamento, exclusão, edição do agendamento e pesquisa.
          </p>
          <p>
            O projeto seguiu o padrão SCRUM tendo a planning, as dailys, retro e
            a presença do Tech-Lead junto ao Product Manager.
            <br></br>
            Fui responsável pelo back-end em Java 11 e Spring Boot, com o banco
            de dados Postgres.
            <br></br>O front-end foi feito em React JS, Styled Component e
            Material UI, onde fui revisador das estilizações, identidade visual,
            tipografia, paletas de cores etc.
            <br></br>A ferramenta de versionamento utilizada pela a equipe foi o
            github, sendo um projeto privado da empresa Alterdata Software, que
            é responsável por ser um dos patrocinadores e idealizadores do
            projeto imersivo Serratec.
          </p>
        </p>
      </div>
    </section>
  );
};
