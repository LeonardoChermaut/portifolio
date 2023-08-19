import React from "react";
import PropTypes from "prop-types";
import "../socialnetwork.sass";

type NetworkType = {
    id: number,
    name: string,
    href: string,
    icon: React.ReactNode,
    target: string,
    className: string,
    title: string,
}

export const Networks = ({ socialNetworks }) => {
    return socialNetworks.map(({ id, name, href, icon, target, className, title }: NetworkType, _: undefined) => {
        const openSocialMedia = () => window.open(href);
        
        return (        
            <button
                type="button"
                key={id}
                onClick={() => openSocialMedia()}
                name={name}
                title={title}
                formTarget={target}
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
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            target: PropTypes.string.isRequired,
            className: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};
