import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import "./socialnetwork.sass";

const subject = "?subject=Contato Portfolio"
const socialNetworks = [
  {
    name: "github",
    url: "https://github.com/LeonardoChermaut",
    icon: <FaGithub />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/leoschrmt",
    icon: <FaInstagram />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/leonardochermaut/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "email",
    url: `mailto:chermauts@hotmail.com${subject}`,
    icon: <AiOutlineMail />,
  },
  {
    name: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=5521966609888",
    icon: <AiOutlineWhatsApp />,
  },
];


export const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};
