import React from "react";
import { InformationContainer } from "../containers/information/InformationContainer";
import Avatar from "../../assets/Leonardo.png";
import "./sidebar.sass";

const url = "https://drive.google.com/uc?export=download&id=1E_gU7B2M71SIHzqhwxbH_B9ErekqUldD";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img className="avatar-profile" src={Avatar} alt="Leonardo Chermaut" />
      <InformationContainer />
      <a
        id="btn-download-portifolio"
        className="btn"
        href={url}
        target="_blank"
      >
        Download currículo
      </a>
    </aside>
  );
};
