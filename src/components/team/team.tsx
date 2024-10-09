import React from "react";

import "./team.css";

interface TeamProps {
    name: string;
    role: string;
    image: string;
}

interface TeamsProps {
    team: TeamProps[];
}

const TeamMemberLeft: React.FC<TeamProps> = ({ name, role, image }) => {
    return (
        <div className={"team-member"}>
           <div className={"team-member-text"}>
               <h3>{role}</h3>
                <h2>{name}</h2>
           </div>
              <div className={"team-member-image"}>
                <img src={image} alt={name}/>
              </div>
        </div>
    );
}

const TeamMemberRight: React.FC<TeamProps> = ({ name, role, image }) => {
    return (
        <div className={"team-member"}>
            <div className={"team-member-image"}>
                <img src={image} alt={name}/>
            </div>
            <div className={"team-member-text"}>
                <h3>{role}</h3>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export const Team: React.FC<TeamsProps> = ({ team }) => {
    return (
        <div className={"team"}>
            {team.map((member, index) => {
                const isLeft = index % 2 === 0;
                const offsetClass = isLeft ? "offset-left" : "offset-right";
                return (
                    <div key={index} className={`team-member-wrapper ${offsetClass}`}>
                        {isLeft ? <TeamMemberLeft name={member.name} role={member.role} image={member.image}/> : <TeamMemberRight name={member.name} role={member.role} image={member.image}/>}
                    </div>
                );
            })}
        </div>
    );
}