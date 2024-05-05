import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css'

const ProfileCard = ({profileImageUrl, bio, name, skills, rating }) => {
  return (
    <div class="card-container">
    <img src={profileImageUrl} alt="user"/>
    <h3>{name}</h3>
    <h6>{rating}</h6>
    <p>{bio}</p>
    <div class="buttons">
        <button class="primary">
            Connect
        </button>
        <button class="primary ghost">
            View Profile
        </button>
    </div>
    <div class="skills">
        <h6>Skills</h6>
        <div className="boxskill-boxes">
            {skills.map((skill, index) => (
                <div key={index} className="skill-box">
                <span className="skill">{skill}</span>
                </div>
            ))}
        </div>
    </div>
</div>
  );
};

export default ProfileCard;
