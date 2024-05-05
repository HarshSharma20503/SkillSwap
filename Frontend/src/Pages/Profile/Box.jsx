import React from 'react';
import './Box.css'

const Box = ({ head, date, spec, desc, skills }) => {
  return (
    <div className="box">
        <h5 style={{margin:"0.6rem"}}>{head}</h5>
        <div className="details">
            <p><i>{spec}</i></p>
            <p><i>{date}</i></p>
        </div>
        <p className="desc">{desc}</p>
        <p className="details"><i>Skills Used:</i></p>
        <div className="boxskill-boxes">
            {skills.map((skill, index) => (
                <div key={index} className="skill-box">
                <span className="skill">{skill}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Box;