import React from "react";
import { InformationContainer } from "../containers/information/InformationContainer";
import Avatar from "../../assets/Leonardo.png";
import "./sidebar.sass";

const url = "/src/download/leonardo_chermaut_cv.pdf";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img className="avatar-profile" src={Avatar} alt="Leonardo Chermaut" />
      <InformationContainer />
      <a id="btn-download-portifolio" className="btn" href={url} target="_blank" download>
        Download currículo
      </a>
    </aside>
  );
};
