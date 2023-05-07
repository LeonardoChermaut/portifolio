import { socialNetworks } from "./constants/constants";
import "./socialnetwork.sass";

const mappedSocialNetworks = (socialNetworks = []) => socialNetworks.map((network) => {
    const { id: key, name, url: href, icon, target, className } = network;
    return (
      <a
        key={key}
        href={href}
        target={target}
        className={className}
        name={name}
      >
        {icon}
      </a>
    );
  });

export const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {mappedSocialNetworks(socialNetworks)}
    </section>
  );
};
