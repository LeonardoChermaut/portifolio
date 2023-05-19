import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

export const socialNetworks = [
    {
      id: 1,
      name: "github",
      href: "https://github.com/LeonardoChermaut",
      icon: <FaGithub />,
      target: "_blank",
      className: "social-btn",
      title: "Link para o repositório do Leonardo Chermaut no GitHub",
    },
    {
      id: 2,
      name: "instagram",
      href: "https://www.instagram.com/leoschrmt",
      icon: <FaInstagram />,
      target: "_blank",
      className: "social-btn",
      title: "Link para o perfil do Leonardo Chermaut no Instagram",
    },
    {
      id: 3,
      name: "linkedin",
      href: "https://www.linkedin.com/in/leonardochermaut/",
      icon: <FaLinkedinIn />,
      target: "_blank",
      className: "social-btn",
      title: "Link para o perfil do Leonardo Chermaut no LinkedIn",
    },
    {
      id: 4,
      name: "email",
      href: `mailto:chermauts@hotmail.com?subject=Contato Portfolio`,
      icon: <AiOutlineMail />,
      target: "_blank",
      className: "social-btn",
      title: "Link para o e-mail do Leonardo Chermaut",
    },
    {
      id: 5,
      name: "whatsapp",
      href: "https://api.whatsapp.com/send?phone=5521966609888",
      icon: <AiOutlineWhatsApp />,
      target: "_blank",
      className: "social-btn",
      title: "Link para o WhatsApp do Leonardo Chermaut",
    },
  ];

