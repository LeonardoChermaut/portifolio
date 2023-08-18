import React from "react";
import PropTypes from "prop-types";

export const Softskills = ({ softskills }) => {
    return softskills.map((skill, index) => {
        const { name, src, description, alt } = skill;
        return (
            <div key={index} className="info-card">
                <img id={name} src={src} alt={alt} />
                <div>
                    <p className="description">{description}</p>
                </div>
            </div>
        );
    });
};

Softskills.propTypes = {
    softskills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ),
};
