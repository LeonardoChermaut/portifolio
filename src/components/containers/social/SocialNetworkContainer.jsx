import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./socialnetwork.sass";

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
