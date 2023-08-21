import React from "react";
import PropTypes from "prop-types";
import "../socialnetwork.sass";

interface INetwork {
    id: number,
    name: string,
    href: string,
    icon: React.ReactNode,
    target: string,
    className: string,
    title: string,
}

type SocialMediaType = {
    socialNetworks: INetwork[],
}

export const Networks = ({ socialNetworks }: SocialMediaType ) => {
    const openSocialMedia = (href: string): WindowProxy | null => window.open(href);
    
    return socialNetworks.map(({ id, name, href, icon, target, className, title }) => {
        return (        
            <button
                type="button"
                key={id}
                onClick={() => openSocialMedia(href)}
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
