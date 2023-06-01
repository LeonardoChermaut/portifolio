import React from "react";
import PropTypes from "prop-types";
import "../socialnetwork.sass";

const openSocialMedia = href => window.open(href);

export const Networks = ({ socialNetworks }) => {
    return socialNetworks.map((network, index) => {
        const { name, href, icon, target, className, title } = network;
        return (        
            <button
                type="button"
                key={index}
                onClick={() => openSocialMedia(href)}
                name={name}
                title={title}
                target={target}
                className={className}
            >   
                {icon}
            </button>
        );
    })
}

Networks.propTypes = {
    socialNetworks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            target: PropTypes.string.isRequired,
            className: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};
