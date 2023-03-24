import "./technologies.sass";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPostgresql,
  DiReact,
  DiJava
} from "react-icons/di";
import {
  SiStyledcomponents,
  SiSpring,
  SiMaterialdesign,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { Bar } from "../../index";

const stacks = [
  {
    id: "java",
    name: "Java",
    description: "Java 11 em diante, Programação Orientada a Objetos.",
    icon: <DiJava />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "Vanilla, JSON, fetchAPI, axios, funções assíncronas, tratamento de erros, DOM",
    icon: <DiJsBadge />,
  },
  {
    id: "react",
    name: "React JS",
    description: "React Hooks, context, componentização funcional etc. ",
    icon: <DiReact />,
  },
  {
    id: "styled",
    name: "Styled Component",
    description:
      "Estilização de componentes estáticos ou dinâmicos (via props).",
    icon: <SiStyledcomponents />,
  },
  {
    id: "html",
    name: "HTML 5",
    description: "HTML semântico, boas práticas, acessibilidade, CEO etc.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS 3",
    description: "Boas práticas, responsividade, flex-box, grid-layout etc.",
    icon: <DiCss3 />,
  },
  {
    id: "material",
    name: "Material",
    description: "Material UI, Material Design, para HTML ou React.",
    icon: <SiMaterialdesign />,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description: "Bootstrap para HTML ou React Boostrap.",
    icon: <FaBootstrap />,
  },
  {
    id: "spring",
    name: "Spring Boot",
    description:
      "Injeção de dependências, JWT, APIRestFul, padrão MVC, Jpa , Hibernate etc.",
    icon: <SiSpring />,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Querys, tratamentos, criação e integração.",
    icon: <DiPostgresql />,
  },
];

export const TechnologiesContainer = () => {
  return (
    <section className="stacks-container">
      <div className="sub-container">
      <h2>Tecnologias</h2>
      < Bar />
      </div>
      <div className="stacks-grid">
        {stacks.map((stack) => (
          <div className="stack-card" id={stack.id} key={stack.id}>
            {stack.icon}
            <div className="stack-info">
              <h3>{stack.name}</h3>
              <p>{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
