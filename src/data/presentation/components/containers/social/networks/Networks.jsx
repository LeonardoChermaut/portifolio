import React from "react";
import { socialNetworks } from "../constant";
import "../socialnetwork.sass";

export const Networks = () => {
    return socialNetworks.map((network) => {
        const { id: key, name, href, icon, target, className, title } = network;
        const handleSocialClick = () =>  window.open(href);
        return (        
            <button
                type="button"
                key={key}
                onClick={handleSocialClick}
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