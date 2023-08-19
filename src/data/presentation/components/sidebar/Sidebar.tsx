import React from "react";
import "./sidebar.sass";
import { InformationContainer } from "../index";
import Avatar from "../../assets/Leonardo.webp";
import CurriculoHref from "../../../factories/download/leonardo_chermaut_curriculo_dev.pdf";

const CURRICULO_FILE = "leonardo_chermaut_curriculo_dev.pdf";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img className="avatar-profile" src={Avatar} alt="Foto do Leonardo Chermaut falando no microfone em público" />
      <InformationContainer />
      <a
        id="btn-download-portifolio"
        className="btn"
        href={CurriculoHref}
        download={CURRICULO_FILE}
        target="_blank"
        title="Link para download do currículo Leonardo Chermaut"
      >
        Download currículo
      </a>
    </aside>
  );
};
