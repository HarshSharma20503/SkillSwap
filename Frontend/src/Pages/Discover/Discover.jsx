import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProfileCard from "./ProfileCard";
import "./Discover.css";
import Search from "./Search";

const Discover = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  return (
    <>
      <div className="discover-page">
        <div className="content-container">
          <div className="nav-bar">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#for-you" className="navlink" id="foryou">
                For You
              </Nav.Link>
              <Nav.Link href="#popular" className="navlink" id="popular1">
                Popular
              </Nav.Link>
              <Nav.Link href="#web-development" className="navlink">
                Web Development
              </Nav.Link>
              <Nav.Link href="#machine-learning" className="navlink">
                Machine Learning
              </Nav.Link>
              <Nav.Link href="#graphic-design" className="navlink">
                Graphic Design
              </Nav.Link>
              <Nav.Link href="#soft-skills" className="navlink">
                Soft Skills
              </Nav.Link>
              <Nav.Link href="#others" className="navlink">
                Others
              </Nav.Link>
            </Nav>
          </div>
          <div className="heading-container">
            <div>
              <Search />
            </div>
            <h1
              id="for-you"
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                color: "#fbf1a4",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              For You
            </h1>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
            <h1
              id="popular"
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                color: "#fbf1a4",
                marginTop: "1rem",
                marginBottom: "3rem",
              }}
            >
              Popular
            </h1>
            <h2 id="web-development">Web Development</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
            <h2 id="machine-learning">Machine Learning</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
            <h2 id="graphic-design">Graphic Design</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
            <h2 id="soft-skills">Soft Skills</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
            <h2 id="others">Others</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              <ProfileCard
                profileImageUrl="profile-image-url"
                name="Name"
                rating="★★★★★"
                bio="yahan apan bio rakhre"
                skills={["HTML", "CSS", "JS"]}
              />
              {/* Add more ProfileCard components as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
