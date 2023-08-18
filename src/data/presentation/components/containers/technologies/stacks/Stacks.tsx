import React from "react";
import PropTypes from "prop-types";

type StackType = {
  key: number,
  id: string,
  title: string,
  description: string,
  icon: React.ReactNode,
}


export const Stacks = ({ stacks }) => {
   return stacks.map(({ key, icon, title, description, id }: StackType, _) => {
    return (
      <div key={key} id={id} className="stack-card">
        {icon}
        <div className="stack-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  })
}

Stacks.propTypes = {
  stacks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

