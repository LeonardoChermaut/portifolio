import React from "react";
import { InformationContainer } from "../containers/information/InformationContainer";
import Avatar from "../../assets/Leonardo.png";
import "./sidebar.sass";

const PATH = "../../download/curriculum.pdf";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = PATH;
  link.download = "curriculum.pdf";
  link.click();
};

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img className="avatar-profile" src={Avatar} alt="Leonardo Chermaut" />
      <InformationContainer />
      <button
        id="btn-download-portifolio"
        className="btn"
        onClick={downloadResume}
      >
        Download currículo
      </button>
    </aside>
  );
};
