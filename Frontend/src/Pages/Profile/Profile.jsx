import React from "react";
import "./Profile.css";
import Box from "./Box";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useUser();
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/user/registered/getDetails/${username}`);
        console.log(data.data);
        setUser(data.data);
        localStorage.setItem("userInfo", JSON.stringify(data.data));
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        }
        localStorage.removeItem("userInfo");
        navigate("/login");
      }
    };
    getUser();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img src="/assets/images/sample_profile.jpg" alt="Profile" />
        </div>
        {/* Name */}
        <div>
          <h1 className="profile-name" style={{ marginLeft: "2rem" }}>
            Paakhi Maheshwari
          </h1>
          {/* Rating */}
          <div className="rating" style={{ marginLeft: "2rem" }}>
            {/* Rating stars */}
            <span className="rating-stars">⭐⭐⭐⭐⭐</span>
            {/* Rating out of 5 */}
            <span className="rating-value">(5)</span>
          </div>
          {/* Connect and Report Buttons */}
          <div className="buttons">
            <button className="connect-button">Connect</button>
            <button className="report-button">Report</button>
          </div>
        </div>
        <div className="portfolio-links">
          <a href="https://www.github.com/paakhim10" className="portfolio-link">
            <img src="/assets/images/github.png" className="link" alt="Github" />
          </a>
          <a href="linkedin-link" className="portfolio-link">
            <img src="/assets/images/linkedin.png" className="link" alt="LinkedIn" />
          </a>
          <a href="portfolio-link" className="portfolio-link">
            <img src="/assets/images/link.png" className="link" alt="Portfolio" />
          </a>
        </div>
      </div>

      {/* Bio */}
      <h2>Bio</h2>
      <p className="bio">Yahan pe apan bio rakhenge</p>

      {/* Portfolio Links */}

      {/* Skills */}
      <div className="skills">
        <h2>Skills Proficient At</h2>
        <div className="skill-boxes">
          <div className="skill-box">React.JS</div>
          <div className="skill-box">React.JS</div>
          {/* Render skill boxes here */}
        </div>
      </div>

      {/* Education */}
      <div className="education">
        <h2>Education</h2>
        <div className="education-boxes">
          {/* Render education boxes here */}
          <Box
            head="Jaypee Institute of Information Technology, Noida-62"
            date="September 2021 - June 2025"
            spec="Computer Science"
            desc="Pursued degree in CSE from 2021 to 2025."
            skills={["HTML", "CSS", "JS"]}
          />
        </div>
      </div>

      {/* Projects */}
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-boxes">
          <Box
            head="CodeSphere"
            date="February 2024"
            desc="Created an integrated platform for college coding assignments."
            skills={["React JS", "GPT", "Machine Learning"]}
          />
          {/* Render project boxes here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
