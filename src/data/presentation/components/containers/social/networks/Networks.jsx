import React from "react";
import { socialNetworks } from "../constant";

export const Networks = () => {
    return socialNetworks.map((network) => {
        const { id: key, name, href, icon, target, className, title } = network;
        return (
            <a
                title={title}
                key={key}
                href={href}
                target={target}
                className={className}
                name={name}
            >
                {icon}
            </a>
        );
    })
}