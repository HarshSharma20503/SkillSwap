import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

const Discover = () => {
  const navigate = useNavigate();

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
      {user && (
        <>
          <div className="name">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
          </div>
          <div className="links">
            <a href={user.linkedinLink} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            <br />
            <a href={user.githubLink} target="_blank">
              Github
            </a>
            <br />
            <a href={user.portfolioLink}>Portfolio</a>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>
              {user.education.map((ele, index) => {
                return (
                  <span className="education" key={index}>
                    ele.institution;
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className="bio">
            <h3>Bio</h3>
            <p>{user.bio}</p>
          </div>
          <div className="projects">
            <h3>Projects</h3>
            <p>
              {user.projects.map((ele, index) => {
                return (
                  <span className="projects" key={index}>
                    {ele.title}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </>
      )}
      <div>Discover</div>
    </>
  );
};

export default Discover;
