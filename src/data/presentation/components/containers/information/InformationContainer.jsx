import React from "react";
import "./information.sass";
import { SocialNetworkContainer } from "../../index";
import { QRCodeWpp, banner } from "./constant";
import { Softskills } from "./softskills";

export const InformationContainer = () => {
  return (
    <section id="information">
      <div className="banner-container">
        <img
          className="banner-img"
          src={banner}
          alt="Banner escrito o nome Leonardo Chermaut e dando boas saudações."
        />
      </div>
      <Softskills />
      <img className="qr-code" src={QRCodeWpp} alt="Imagem do QR Code de redirecionamento para uma conversa no Whatsapp" />
      <SocialNetworkContainer />
    </section>
  );
};
