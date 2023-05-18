import React from "react";
import { stacks } from "../constant";

export const Stacks = () => {
  return stacks.map((stack) => {
    const { key, id, icon, name: title, description } = stack;
    return (
      <div key={key} id={id} className="stack-card">
        {icon}
        <div className="stack-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  });
}
