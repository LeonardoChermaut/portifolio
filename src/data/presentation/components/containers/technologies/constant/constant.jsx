import { SiStyledcomponents, SiSpring, SiMaterialdesign } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPostgresql,
    DiReact,
    DiJava,
} from "react-icons/di";

const stacks = [
    {
        key: 1,
        id: "java",
        name: "Java",
        description: "Java 11 em diante, Programação Orientada a Objetos.",
        icon: <DiJava />,
    },
    {
        key: 2,
        id: "js",
        name: "JavaScript",
        description:
            "Vanilla, JSON, fetchAPI, axios, funções assíncronas, tratamento de erros, DOM",
        icon: <DiJsBadge />,
    },
    {
        key: 3,
        id: "react",
        name: "React JS",
        description: "React Hooks, context, componentização funcional etc. ",
        icon: <DiReact />,
    },
    {
        key: 4,
        id: "styled",
        name: "Styled Component",
        description:
            "Estilização de componentes estáticos ou dinâmicos (via props).",
        icon: <SiStyledcomponents />,
    },
    {
        key: 5,
        id: "html",
        name: "HTML 5",
        description: "HTML semântico, boas práticas, acessibilidade, SEO etc.",
        icon: <DiHtml5 />,
    },
    {
        key: 6,
        id: "css",
        name: "CSS 3",
        description: "Boas práticas, responsividade, flex-box, grid-layout etc.",
        icon: <DiCss3 />,
    },
    {
        key: 7,
        id: "material",
        name: "Material",
        description: "Material UI, Material Design, para HTML ou React.",
        icon: <SiMaterialdesign />,
    },
    {
        key: 8,
        id: "bootstrap",
        name: "Bootstrap",
        description: "Bootstrap para HTML ou React Boostrap.",
        icon: <FaBootstrap />,
    },
    {
        key: 9,
        id: "spring",
        name: "Spring Boot",
        description:
            "Injeção de dependências, JWT, APIRestFul, padrão MVC, Jpa , Hibernate etc.",
        icon: <SiSpring />,
    },
    {
        key: 10,
        id: "postgresql",
        name: "PostgreSQL",
        description: "Querys, tratamentos, criação e integração.",
        icon: <DiPostgresql />,
    },
];


export { stacks } 