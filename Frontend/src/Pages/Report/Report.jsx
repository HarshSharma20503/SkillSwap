import React, { useState } from "react";
import "./Report.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

const ReportForm = () => {
  const { username } = useParams();

  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.username,
    reportedUsername: username,
    issue: "",
    issueDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.issue === "" || formData.issueDescription === "") {
      toast.error("Please fill all the details");
      return;
    }
    // console.log("formData:", formData);
    try {
      setLoading(true);
      const { data } = await axios.post(`/report/create`, formData);
      toast.success(data.message);
      setFormData((prevState) => {
        return {
          ...formData,
          issue: "",
          issueDescription: "",
        };
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
        if (error.response.data.message === "Please Login") {
          localStorage.removeItem("userInfo");
          setUser(null);
          await axios.get("/auth/logout");
          navigate("/login");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>REPORT PROFILE</h1>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="question" htmlFor="username">
              Your Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="question" htmlFor="reportedUsername">
              Username to be reported
            </label>
            <input
              type="text"
              id="reportedUsername"
              name="reportedUsername"
              className="form-control"
              placeholder="Enter username to be reported"
              value={formData.reportedUsername}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="question">What was the nature of the issue?</label>
            <div className="radio-group">
              <input
                type="radio"
                id="conduct"
                name="issue"
                value="Personal conduct"
                checked={formData.issue === "Personal conduct"}
                onChange={handleChange}
              />
              <label htmlFor="conduct">Personal conduct</label>
              <input
                type="radio"
                id="expertise"
                name="issue"
                value="Professional expertise"
                checked={formData.issue === "Professional expertise"}
                onChange={handleChange}
              />
              <label htmlFor="expertise">Professional expertise</label>
              <input
                type="radio"
                id="others"
                name="issue"
                value="Others"
                checked={formData.issue === "Others"}
                onChange={handleChange}
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          <div className="form-group">
            <label className="question" htmlFor="issueDescription">
              Describe the issue to us
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              className="form-control textarea-control"
              placeholder="Enter description"
              value={formData.issueDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="submitButton">
            <button type="submit" className="submit-button">
              {loading ? (
                <>
                  <Spinner animation="border" variant="light" size="sm" style={{ marginRight: "0.5rem" }} />
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
