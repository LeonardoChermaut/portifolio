import React from "react";
import PropTypes from "prop-types";

interface ISoftskills {
    id: number,
    name: string,
    src: string,
    description: string,
    alt: string,
}

type SoftskillsType = {
    softskills: ISoftskills[],
}

export const Softskills = ({ softskills }: SoftskillsType) => {
    return softskills.map(({id, name, src, description, alt }) => {
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
