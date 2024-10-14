import React from "react";

import "./team.css";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
}

interface TeamGroupProps {
    title: string;
    members: TeamMemberProps[];
}

interface TeamProps {
    groups: TeamGroupProps[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
    return (
        <div className='team-member'>
            <div className='team-member-image-container'>
                <img className='team-member-image' src={image} alt={name} />
            </div>
            <div className='team-member-content'>
                <h5 className='team-member-name'>{name}</h5>
                <p className='team-member-role'>{role}</p>
            </div>
        </div>
    );
}

const TeamGroup: React.FC<TeamGroupProps> = ({ title, members }) => {
    return (
        <div className='team-group'>
            <h3 className='team-group-title'>{title}</h3>
            <div className='team-group-list'>
                {members.map((member, index) => <TeamMember key={index} {...member} />)}
            </div>
        </div>
    );
}

export const Team: React.FC<TeamProps> = ({ groups }) => {
    return (
        <div className={"team"}>
            {groups.map((group, index) => <TeamGroup key={index} {...group} />)}
        </div>
    );
}