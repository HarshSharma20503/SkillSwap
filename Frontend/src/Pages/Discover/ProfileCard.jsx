import React from 'react';
import Card from 'react-bootstrap/Card';

const ProfileCard = ({ coverImageUrl, profileImageUrl, name, skills }) => {
  return (
    <Card className="profile-card">
      <Card.Img variant="top" src={coverImageUrl} />
      <Card.ImgOverlay>
        <img src={profileImageUrl} alt="Profile" className="profile-image-overlay" />
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Skills: {skills}
        </Card.Text>
        {/* Rating Star */}
        {/* Availability Time */}
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
