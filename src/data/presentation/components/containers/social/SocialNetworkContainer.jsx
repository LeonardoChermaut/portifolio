import React from "react";
import { Networks } from "./networks"
import { socialNetworks } from "./constant";
import "./socialnetwork.sass";

export const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      <Networks socialNetworks={socialNetworks} />
    </section>
  );
};
