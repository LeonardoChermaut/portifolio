import React from "react";
import "./bar.sass"

export const Bar = () => {
  return (
    <React.Fragment>
    <div className="container">
      <div className="progress progress-striped">
        <div className="progress-bar"></div>
      </div>
    </div>
    </React.Fragment>
  );
};
