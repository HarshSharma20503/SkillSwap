import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from "../../util/ApiCall";

const Register = () => {
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
  });

  const handleSubmit = () => {
    // form submission processing
    console.log("Form submitted:", form);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = await ApiCall("/user/unregistered/getDetails", "GET", navigate, null);
      console.log("User Data: ", response.data);
    };
    getUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevState) => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value),
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className="register_page" style={{ backgroundColor: "#013e38", fontFamily: "Montserrat", color: "white", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{ fontFamily: "Oswald", color: "#3BB4A1" }}>Registration Form</h1>
        <div className="register_section" style={{ backgroundColor: "#f2f2f2", color: "#2d2d2d", minHeight: "80vh", width: "50%", border: "1px solid black", padding: "20px", borderRadius: "10px" }}>
          <Tabs defaultActiveKey="registration" id="justify-tab-example" className="mb-3" justify>
            <Tab eventKey="registration" title="Registration">
              <div>
                <label style={{ color: "#3BB4A1" }}>Username</label><br />
                <input type="text" name="username" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your username" />
              </div>
              <div>
                <label style={{ color: "#3BB4A1", marginTop: "20px"}}>Skills Proficient At</label><br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <input type="checkbox" name="skillsProficientAt" value="React" onChange={handleInputChange} style={{ marginRight: "5px" }} />React<br />
                    <input type="checkbox" name="skillsProficientAt" value="Node.js" onChange={handleInputChange} style={{ marginRight: "5px" }} />Node.js<br />
                    <input type="checkbox" name="skillsProficientAt" value="JavaScript" onChange={handleInputChange} style={{ marginRight: "5px" }} />JavaScript<br />
                  </div>
                  <div>
                    <input type="checkbox" name="skillsProficientAt" value="HTML" onChange={handleInputChange} style={{ marginRight: "5px" }} />HTML<br />
                    <input type="checkbox" name="skillsProficientAt" value="CSS" onChange={handleInputChange} style={{ marginRight: "5px" }} />CSS<br />
                    <input type="checkbox" name="skillsProficientAt" value="Python" onChange={handleInputChange} style={{ marginRight: "5px" }} />Python<br />
                  </div>
                  <div>
                    <input type="checkbox" name="skillsProficientAt" value="Java" onChange={handleInputChange} style={{ marginRight: "5px" }} />Java<br />
                    <input type="checkbox" name="skillsProficientAt" value="C++" onChange={handleInputChange} style={{ marginRight: "5px" }} />C++<br />
                    <input type="checkbox" name="skillsProficientAt" value="SQL" onChange={handleInputChange} style={{ marginRight: "5px" }} />SQL<br />
                  </div>
                </div>
              </div>
              <div>
                <label style={{ color: "#3BB4A1", marginTop: "20px" }}>Skills To Learn</label><br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <input type="checkbox" name="skillsToLearn" value="React" onChange={handleInputChange} style={{ marginRight: "5px" }} />React<br />
                    <input type="checkbox" name="skillsToLearn" value="Node.js" onChange={handleInputChange} style={{ marginRight: "5px" }} />Node.js<br />
                    <input type="checkbox" name="skillsToLearn" value="JavaScript" onChange={handleInputChange} style={{ marginRight: "5px" }} />JavaScript<br />
                  </div>
                  <div>
                    <input type="checkbox" name="skillsToLearn" value="HTML" onChange={handleInputChange} style={{ marginRight: "5px" }} />HTML<br />
                    <input type="checkbox" name="skillsToLearn" value="CSS" onChange={handleInputChange} style={{ marginRight: "5px" }} />CSS<br />
                    <input type="checkbox" name="skillsToLearn" value="Python" onChange={handleInputChange} style={{ marginRight: "5px" }} />Python<br />
                  </div>
                  <div>
                    <input type="checkbox" name="skillsToLearn" value="Java" onChange={handleInputChange} style={{ marginRight: "5px" }} />Java<br />
                    <input type="checkbox" name="skillsToLearn" value="C++" onChange={handleInputChange} style={{ marginRight: "5px" }} />C++<br />
                    <input type="checkbox" name="skillsToLearn" value="SQL" onChange={handleInputChange} style={{ marginRight: "5px" }} />SQL<br />
                  </div>
                </div>
              </div>
              <div>
                <label style={{ color: "#3BB4A1", marginTop: "20px"}}>Portfolio Link</label><br />
                <input type="text" name="portfolioLink" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your portfolio link" />
              </div>
            </Tab>
            <Tab eventKey="education" title="Education">
              <div>
                <label style={{ color: "#3BB4A1" }}>College</label><br />
                <input type="text" name="college" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your college" />
              </div>
              <div>
                <label style={{ color: "#3BB4A1",  marginTop: "20px" }}>Highest Degree Achieved</label><br />
                <input type="text" name="degreeAchieved" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your highest degree achieved" />
              </div>
              <div>
                <label style={{ color: "#3BB4A1",  marginTop: "20px" }}>Subject Majored In</label><br />
                <input type="text" name="subjectMajoredIn" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your subject majored in" />
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Additional">
              <div>
                <label style={{ color: "#3BB4A1",  marginTop: "20px" }}>Bio</label><br />
                <textarea name="bio" onChange={handleInputChange} style={{ borderRadius: "5px", border: "1px solid #3BB4A1", padding: "5px", width: "100%", marginBottom: "10px" }} placeholder="Enter your bio"></textarea>
              </div>
            </Tab>
            <Tab eventKey="Preview" title="Confirm Details">
              <div>
                <p>Preview of the Form</p>
                <pre>{JSON.stringify(form, null, 2)}</pre>
                <button onClick={handleSubmit} style={{ backgroundColor: "#3BB4A1", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}>Submit</button>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Register;
