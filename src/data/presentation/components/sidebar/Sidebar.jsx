import React from "react";
import "./sidebar.sass";
import { InformationContainer } from "../index";
import Avatar from "../../assets/Leonardo.png";
import curriculo from "../../../factories/download/leonardo_chermaut_curriculo.pdf"

const download = "leonardo_chermaut_curriculo.pdf";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img className="avatar-profile" src={Avatar} alt="Foto do Leonardo Chermaut falando no microfone em público" />
      <InformationContainer />
      <a
        id="btn-download-portifolio"
        className="btn"
        href={curriculo}
        download={download}
        target="_blank"
      >
        Download currículo
      </a>
    </aside>
  );
};
