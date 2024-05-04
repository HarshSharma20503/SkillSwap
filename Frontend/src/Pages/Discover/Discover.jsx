import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileCard from './ProfileCard';
import './Discover.css';


const Discover = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState('');

  const { user, setUser } = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("/user/registered/getDetails");
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
    <>

      <div className="discover-page">
      <div className="content-container">
        <div className="nav-bar">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="#for-you" className={activeLink === 'for-you' ? 'active-link' : ''} id="foryou">For You</Nav.Link>
            <Nav.Link href="#popular" className={activeLink === 'popular' ? 'active-link' : ''} id="popular1">Popular</Nav.Link>
            <Nav.Link href="#web-development" className={activeLink === 'web-development' ? 'active-link' : ''}>Web Development</Nav.Link>
            <Nav.Link href="#machine-learning" className={activeLink === 'machine-learning' ? 'active-link' : ''}>Machine Learning</Nav.Link>
            <Nav.Link href="#graphic-design" className={activeLink === 'graphic-design' ? 'active-link' : ''}>Graphic Design</Nav.Link>
            <Nav.Link href="#soft-skills" className={activeLink === 'soft-skills' ? 'active-link' : ''}>Soft Skills</Nav.Link>
            <Nav.Link href="#others" className={activeLink === 'others' ? 'active-link' : ''}>Others</Nav.Link>
          </Nav>
        </div>
        <div className="heading-container">
          <h1 id="for-you" style = {{fontFamily: "Josefin Sans, sans-serif", color: "#fbf1a4", marginTop: "1rem", marginBottom: "1rem"}}>For You</h1>
            <div className="profile-cards">
            {/* Profile cards go here */}
            <ProfileCard
              coverImageUrl="cover-image-url"
              profileImageUrl="profile-image-url"
              name="Name"
              skills="Skills they teach"
            />
            <ProfileCard
              coverImageUrl="cover-image-url"
              profileImageUrl="profile-image-url"
              name="Name"
              skills="Skills they teach"
            />
            {/* Add more ProfileCard components as needed */}
          </div>
          <h1 id="popular" style = {{fontFamily: "Josefin Sans, sans-serif", color: "#fbf1a4", marginTop: "1rem", marginBottom: "3rem"}}>Popular</h1>
          <h2 id="web-development">Web Development</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              {/* Add more ProfileCard components as needed */}
            </div>
          <h2 id="machine-learning">Machine Learning</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              {/* Add more ProfileCard components as needed */}
            </div>
          <h2 id="graphic-design">Graphic Design</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              {/* Add more ProfileCard components as needed */}
            </div>
          <h2 id="soft-skills">Soft Skills</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              {/* Add more ProfileCard components as needed */}
            </div>
          <h2 id="others">Others</h2>
            <div className="profile-cards">
              {/* Profile cards go here */}
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
              />
              <ProfileCard
                coverImageUrl="cover-image-url"
                profileImageUrl="profile-image-url"
                name="Name"
                skills="Skills they teach"
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
