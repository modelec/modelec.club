import React from "react";

interface Partenaire {
    title: string;
    logo: string;
    link: string;
}

interface PartenairesListProps {
    partenaires: Partenaire[];
}

const PartenairesList: React.FC<PartenairesListProps> = ({ partenaires }) => {
    return (
        <div className={"partenaires-list-container"}>
            {partenaires.map((partenaire, index) => (
                <div key={index}>
                    <h2>{partenaire.title}</h2>
                    <a href={partenaire.link} className={"partenaires-list-a"} target="_blank" rel="noreferrer">
                        <img src={partenaire.logo} alt={partenaire.title} className={"partenaires-list-image"}/>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default PartenairesList;