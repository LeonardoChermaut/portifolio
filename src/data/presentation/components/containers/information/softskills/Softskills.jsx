import React from "react";
import { softskills } from "../constant"

export const Softskills = () => {
    return softskills.map((skill) => {
        const { id: key, name: id, src, description } = skill;
        return (
            <div key={key} className="info-card">
                <img id={id} src={src} alt="Icone representacional sobre a softskill específica" />
                <div>
                    <p className="description">{description}</p>
                </div>
            </div>
        );
    });
};


