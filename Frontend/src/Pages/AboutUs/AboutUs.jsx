import React from "react";
import "./AboutUs.css";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  backgroundColor: "#2D2D2D",
  justifyContent: "center",
};

const contentContainerStyle = {
  maxWidth: "50vw",
  margin: "60px",
  justifyContent: "center",
};

const titleStyle = {
  fontFamily: "Oswald, sans-serif",
  color: "#FBF1A4",
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "left",
};

const descriptionStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#f2efdb",
  fontSize: "1rem",
  lineHeight: "1.6",
  textAlign: "left",
  maxHeight: "100vh",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
};

const AboutUs = () => {
  return (
    <div className="content1-container">
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About Us</h2>
        <p style={descriptionStyle}>
          <i>
            As students, we have looked for upskilling everywhere. Mostly, we end up paying big amounts to gain
            certifications and learn relevant skills. We thought of SkillSwap to resolve that. Learning new skills and
            gaining more knowledge all while networking with talented people!
          </i>
        </p>
        <p style={descriptionStyle}>
          <br />
          At SkillSwap, we believe in the power of learning and sharing knowledge. Our platform connects individuals
          from diverse backgrounds to exchange practical skills and expertise. Whether you're a seasoned professional
          looking to mentor others or a beginner eager to learn, SkillSwap provides a supportive environment for growth
          and collaboration.
          <br />
          <br />
          Our mission is to empower individuals to unlock their full potential through skill sharing. By facilitating
          meaningful interactions and fostering a culture of lifelong learning, we aim to create a community where
          everyone has the opportunity to thrive.
        </p>
      </div>
      <img src={"/assets/images/about us.png"} style={{ maxWidth: "50vw", maxHeight: "100vh" }} />
    </div>
  );
};

export default AboutUs;
