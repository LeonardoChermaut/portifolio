import { mappedSocialNetworks } from "./utils/mappedSocials";
import "./socialnetwork.sass";

export const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {mappedSocialNetworks}
    </section>
  );
};
