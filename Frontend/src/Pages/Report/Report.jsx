import React from 'react';
import './Report.css';

const ReportForm = () => {
  return (
    <div className="form-container">
      <h1>REPORT PROFILE</h1>
      <div className="form-box">
      <form>
            <div className="form-group">
            <label className="question" htmlFor="username">Your Username</label>
            <input type="text" id="username" className="form-control" placeholder="Enter your username" />
            </div>
            <div className="form-group">
            <label className="question" htmlFor="reportedUsername">Username to be reported</label>
            <input type="text" id="reportedUsername" className="form-control" placeholder="Enter username to be reported" />
            </div>
            <div className="form-group">
            <label className="question" >Were you trained by this person?</label>
            <div className="radio-group">
                <input type="radio" id="yes" name="trained" value="Yes" />
                <label htmlFor="yes">Yes</label>
                <input type="radio" id="no" name="trained" value="No" />
                <label htmlFor="no">No, I was the trainer.</label>
            </div>
            </div>
            <div className="form-group">
            <label className="question">What was the nature of the issue?</label>
            <div className="radio-group">
                <input type="radio" id="conduct" name="issue" value="Personal conduct" />
                <label htmlFor="conduct">Personal conduct</label>
                <input type="radio" id="expertise" name="issue" value="Professional expertise" />
                <label htmlFor="expertise">Professional expertise</label>
                <input type="radio" id="others" name="issue" value="Others" />
                <label htmlFor="others">Others</label>
            </div>
            </div>
            <div className="form-group">
            <label className="question" htmlFor="issueDescription">Describe the issue to us</label>
            <textarea id="issueDescription" className="form-control textarea-control" placeholder="Enter description"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    </div>
  );
};

export default ReportForm;
