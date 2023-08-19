import React from "react";
import PropTypes from "prop-types";

type SoftskillsType = {
    id: number,
    name: string,
    src: string,
    description: string,
    alt: string,
}

export const Softskills = ({ softskills }) => {
    return softskills.map(({id, name, src, description, alt }: SoftskillsType, _: undefined) => {
        return (
            <div key={id} className="info-card">
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
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ),
};
