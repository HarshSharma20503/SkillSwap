import React from 'react';
import './Profile.css'; // Import CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
    <div className="profile-box">
        {/* Profile Photo */}
        <div className="profile-photo">
            <img src="profile-photo-url" alt="Profile" />
        </div>
        {/* Name */}
        <div>
        <h1 className="profile-name" style={{marginLeft: "2rem"}}>Name</h1>
        {/* Rating */}
      <div className="rating" style={{marginLeft: "2rem"}}>
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
    </div>

      {/* Bio */}
      <p className="bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        euismod, nunc non dignissim cursus, nibh velit cursus magna, ut
        pellentesque justo sem nec risus.
      </p>

      {/* Portfolio Links */}
      <div className="portfolio-links">
        <a href="github-link" className="portfolio-link">
          <img src="/assets/images/github.png" className="link" alt="Github" />
        </a>
        <a href="linkedin-link" className="portfolio-link">
          <img src="/assets/images/linkedin.png" className="link" alt="LinkedIn" />
        </a>
        <a href="portfolio-link" className="portfolio-link">
          <img src="/assets/images/link.png" className="link" alt="Portfolio" />
        </a>
      </div>

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
          <div className="education-box">React.JS</div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-boxes">
        <div className="project-box">React.JS</div>
          {/* Render project boxes here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
