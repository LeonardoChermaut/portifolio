import { SiStyledcomponents, SiSpring, SiMaterialdesign, SiTypescript, SiNestjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPostgresql,
    DiReact,
    DiJava,
} from "react-icons/di";
import React from "react";

export const stacks = [
    {
        key: 1,
        id: "nestjs",
        title: "NestJS",
        description: "APIRestFul com Programação Orientada a Objetos, Injeção de dependencias, Design Patterns, TypeORM, Jwt Authentication etc.",
        icon: <SiNestjs />,
    },
    
    {
        key: 2,
        id: "typescript",
        title: "TypeScript",
        description: "Programação Orientada a Objetos, Tipagem Estática, Interfaces, Generics etc.",
        icon: <SiTypescript />,
    },
    {
        key: 3,
        id: "java",
        title: "Java",
        description: "Java 8+, Programação Orientada a Objetos",
        icon: <DiJava />,
    },
    {
        key: 4,
        id: "javascript",
        title: "JavaScript",
        description: "Vanilla, JSON, fetchAPI, funções assíncronas async/await, Promises, Currying, tratamento de erros, DOM etc.",
        icon: <DiJsBadge />,
    },
    {
        key: 5,
        id: "react",
        title: "React JS",
        description: "React Hooks, context, componentização funcional etc. ",
        icon: <DiReact />,
    },
    {
        key: 6,
        id: "styled-component",
        title: "Styled Component",
        description:
            "Estilização de componentes estáticos ou dinâmicos (via props).",
        icon: <SiStyledcomponents />,
    },
    {
        key: 7,
        id: "html",
        title: "HTML 5",
        description: "HTML semântico, boas práticas, acessibilidade, SEO etc.",
        icon: <DiHtml5 />,
    },
    {
        key: 8,
        id: "css",
        title: "CSS 3",
        description: "Boas práticas, responsividade, flex-box, grid-layout etc.",
        icon: <DiCss3 />,
    },
    {
        key: 9,
        id: "material",
        title: "Material",
        description: "Material UI, Material Design, para HTML ou React.",
        icon: <SiMaterialdesign />,
    },
    {
        key: 10,
        id: "bootstrap",
        title: "Bootstrap",
        description: "Bootstrap para HTML ou React Boostrap.",
        icon: <FaBootstrap />,
    },
    {
        key: 11,
        id: "spring",
        title: "Spring Boot",
        description: "Injeção de dependências, JWT, APIRestFul, padrão MVC, Jpa , Hibernate etc.",
        icon: <SiSpring />,
    },
    {
        key: 12,
        id: "postgresql",
        title: "PostgreSQL",
        description: "Querys, tratamentos, criação e integração.",
        icon: <DiPostgresql />,
    },
];