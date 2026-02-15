
import React from "react";
import "./Mentors.css";
import logo from '../images/logo_1_1_without_bg.png';

const mentors = [
  {
    name: "Jeevan Y",
    designation: "Senior Software Engineer",
    college: "IIT Bombay",
    subject: "Mathematics",
    img: logo
  },
   {
    name: "Mary Prathima Shreya",
    designation: "Senior Software Engineer",
    college: "NIT Warangal",
    subject: "Chemistry",
    img: logo
  },
  {
    name: "Anil Kumar",
    designation: "Scientist 'B'",
    college: "NIT Trichy",
    subject: "Physics",
    img: null
  },
  {
    name: "Bharath Chaitanya",
    designation: "Scientist 'B'",
    college: "IIT Madras",
    subject: "Chemistry",
    img: null
  }
];

function MentorCard({ mentor }) {
  return (
    <div className="mentor-card card" tabIndex={0} aria-label={mentor.name}>
      <div className="mentor-photo-circle">
        {mentor.img ? (
          <img src={mentor.img} alt={mentor.name + ' profile'} className="mentor-logo-img" />
        ) : (
          <span className="mentor-photo-placeholder" aria-hidden="true">{mentor.name[0]}</span>
        )}
      </div>
      <div className="mentor-info">
        <h3 className="mentor-name">{mentor.name}</h3>
        <div className="mentor-designation">{mentor.designation} <span className="mentor-college">| {mentor.college}</span></div>
      </div>
    </div>
  );
}

function Mentors() {
  return (
    <section className="mentors-section section-animate" id="mentors" aria-labelledby="mentors-title">
      <h2 id="mentors-title" className="line-draw">Meet Our Mentors</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <div className="mentors-row stagger-children">
        {mentors.map((mentor) => (
          <MentorCard mentor={mentor} key={mentor.name} />
        ))}
      </div>
    </section>
  );
}

export default Mentors;
