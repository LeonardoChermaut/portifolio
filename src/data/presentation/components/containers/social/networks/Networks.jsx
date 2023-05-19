import React from "react";
import { socialNetworks } from "../constant";
import "../socialnetwork.sass";

export const Networks = () => {
    return socialNetworks.map((network) => {
        const { id: key, name, href, icon, target, className, title } = network;
        return (
            <button
                key={key}
                href={href}
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