import React from "react";
import "./progressbar.sass"

export const ProgressBar = () => {
  return (
    <div className="container">
      <div className="progress progress-striped">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};
