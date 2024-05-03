import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../../util/ApiCall";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { skills } from "./Skills";
import axios from "axios";
import "./Register.css";
import Badge from "react-bootstrap/Badge";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    skillsProficientAt: [],
    skillsToLearn: [],
    college: "",
    degreeAchieved: "",
    subjectMajoredIn: "",
    bio: "",
    portfolioLink: "",
    githubLink: "",
    linkedinLink: "",
  });
  const [skillsProficientAt, setSkillsProficientAt] = useState("Select some skill");
  const [skillsToLearn, setSkillsToLearn] = useState("Select some skill");

  const [activeKey, setActiveKey] = useState("registration");

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const { data } = await axios.get("/user/unregistered/getDetails");
        console.log("User Data: ", data.data);
        setForm((prevState) => ({
          ...prevState,
          name: data.data.name,
          email: data.data.email,
        }));
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
          navigate("/login");
        } else {
          toast.error("Some error occurred");
        }
      }
    };
    getUser();
    setLoading(false);
  }, []);

  const handleNext = () => {
    const tabs = ["registration", "education", "longer-tab", "Preview"];
    const currentIndex = tabs.indexOf(activeKey);
    if (currentIndex < tabs.length - 1) {
      setActiveKey(tabs[currentIndex + 1]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevState) => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter((item) => item !== value),
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log("Form: ", form);
  };

  const handleSkillChange = (e) => {
    const { name } = e.target;
    if (name === "skill_to_learn") {
      if (skillsToLearn === "Select some skill") {
        toast.error("Select a skill to add");
        return;
      }
      if (form.skillsToLearn.includes(skillsToLearn)) {
        toast.error("Skill already added");
        return;
      }
      if (form.skillsProficientAt.includes(skillsToLearn)) {
        toast.error("Skill already added in skills proficient at");
        return;
      }
      setForm((prevState) => ({
        ...prevState,
        skillsToLearn: [...prevState.skillsToLearn, skillsToLearn],
      }));
    } else {
      if (skillsProficientAt === "Select some skill") {
        toast.error("Select a skill to add");
        return;
      }
      if (form.skillsProficientAt.includes(skillsProficientAt)) {
        toast.error("Skill already added");
        return;
      }
      if (form.skillsToLearn.includes(skillsProficientAt)) {
        toast.error("Skill already added in skills to learn");
        return;
      }
      setForm((prevState) => ({
        ...prevState,
        skillsProficientAt: [...prevState.skillsProficientAt, skillsProficientAt],
      }));
    }
    console.log("Form: ", form);
  };

  const validateForm = () => {
    if (!form.username) {
      toast.error("Username is empty");
      return false;
    }
    if (!form.skillsProficientAt.length) {
      toast.error("Enter atleast one Skill you are proficient at");
      return false;
    }
    if (!form.skillsToLearn.length) {
      toast.error("Enter atleast one Skill you want to learn");
      return false;
    }
    if (!form.college) {
      toast.error("College is empty");
      return false;
    }
    if (!form.degreeAchieved) {
      toast.error("Degree achieved is empty");
      return false;
    }
    if (!form.subjectMajoredIn) {
      toast.error("Subject majored in is empty");
      return false;
    }
    if (!form.bio) {
      toast.error("Bio is empty");
      return false;
    }
    if (!form.portfolioLink && !form.githubLink && !form.linkedinLink) {
      toast.error("Enter atleast one link among portfolio, github and linkedin");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    const check = validateForm();
    if (check) {
      const data = {
        username: form.username,
        skillsProficientAt: form.skillsProficientAt,
        skillsToLearn: form.skillsToLearn,
        college: form.college,
        degreeAchieved: form.degreeAchieved,
        subjectMajoredIn: form.subjectMajoredIn,
        bio: form.bio,
        portfolioLink: form.portfolioLink,
        githubLink: form.githubLink,
        linkedinLink: form.linkedinLink,
      };
      console.log("Data: ", data);
      // Call the API to submit the form data
    }
    // console.log("Form submitted:", form);
  };

  return loading ? (
    <div className="row m-auto w-100 d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <div className="register_page ">
      <h1 style={{ fontFamily: "Oswald", color: "#3BB4A1" }}>Registration Form</h1>
      <div className="register_section mb-3">
        <Tabs
          defaultActiveKey="registration"
          id="justify-tab-example"
          className="mb-3"
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}
        >
          <Tab eventKey="registration" title="Registration">
            <div>
              <label style={{ color: "#3BB4A1" }}>Name</label>
              <br />
              <input
                type="text"
                name="username"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                value={form.name}
                disabled
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1" }}>Email</label>
              <br />
              <input
                type="text"
                name="username"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                value={form.email}
                disabled
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1" }}>Username</label>
              <br />
              <input
                type="text"
                name="username"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Skills Proficient At</label>
              <br />
              <Form.Select
                aria-label="Default select example"
                value={skillsProficientAt}
                onChange={(e) => setSkillsProficientAt(e.target.value)}
              >
                <option>Select some skill</option>
                {skills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </Form.Select>
              {form.skillsProficientAt.length > 0 && (
                <div>
                  {form.skillsProficientAt.map((skill, index) => (
                    <Badge key={index} bg="secondary" className="ms-2 mt-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
              <button className="btn btn-primary mt-3 ms-1" name="skill_proficient_at" onClick={handleSkillChange}>
                Add Skill
              </button>
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Skills To Learn</label>
              <br />
              <Form.Select
                aria-label="Default select example"
                value={skillsToLearn}
                onChange={(e) => setSkillsToLearn(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                {skills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </Form.Select>
              {form.skillsToLearn.length > 0 && (
                <div>
                  {form.skillsToLearn.map((skill, index) => (
                    <Badge key={index} bg="secondary" className="ms-2 mt-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
              <button className="btn btn-primary mt-3 ms-1" name="skill_to_learn" onClick={handleSkillChange}>
                Add Skill
              </button>
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "15px" }}>Linkedin Link</label>
              <br />
              <input
                type="text"
                name="linkedinLink"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                }}
                placeholder="Enter your Linkedin link"
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "15px" }}>Github Link</label>
              <br />
              <input
                type="text"
                name="githubLink"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                }}
                placeholder="Enter your Github link"
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "15px" }}>Portfolio Link</label>
              <br />
              <input
                type="text"
                name="portfolioLink"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your portfolio link"
              />
            </div>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#3BB4A1",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Next
            </button>
          </Tab>
          <Tab eventKey="education" title="Education">
            <div>
              <label style={{ color: "#3BB4A1" }}>College</label>
              <br />
              <input
                type="text"
                name="college"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your college"
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Highest Degree Achieved</label>
              <br />
              <input
                type="text"
                name="degreeAchieved"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your highest degree achieved"
              />
            </div>
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Subject Majored In</label>
              <br />
              <input
                type="text"
                name="subjectMajoredIn"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your subject majored in"
              />
            </div>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#3BB4A1",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Next
            </button>
          </Tab>
          <Tab eventKey="longer-tab" title="Additional">
            <div>
              <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Bio</label>
              <br />
              <textarea
                name="bio"
                onChange={handleInputChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #3BB4A1",
                  padding: "5px",
                  width: "100%",
                  marginBottom: "10px",
                }}
                placeholder="Enter your bio"
              ></textarea>
            </div>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#3BB4A1",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Next
            </button>
          </Tab>
          <Tab eventKey="Preview" title="Confirm Details">
            <div>
              <h3 style={{ color: "#3BB4A1", marginBottom: "20px" }}>Preview of the Form</h3>
              <div style={{ fontFamily: "Montserrat, sans-serif", color: "#2d2d2d", marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Name:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.name || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Email ID:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.email || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Username:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.username || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Skills Proficient At:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>
                    {form.skillsProficientAt.join(", ") || "Yet to be filled"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Skills To Learn:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>
                    {form.skillsToLearn.join(", ") || "Yet to be filled"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>College:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.college || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Highest Degree Achieved:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.degreeAchieved || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Subject Majored In:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.subjectMajoredIn || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Bio:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.bio || "Yet to be filled"}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ flex: 1, fontWeight: "bold", color: "#3BB4A1" }}>Portfolio Link:</span>
                  <span style={{ flex: 2, marginLeft: "20px" }}>{form.portfolioLink || "Yet to be filled"}</span>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#3BB4A1",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Register;
