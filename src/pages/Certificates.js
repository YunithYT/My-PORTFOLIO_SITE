import React from 'react';
import './Certificates.scss';
import hackerCert from '../assets/images/hacker.jpg';
import Software from '../assets/images/testing.jpg';
import micro from '../assets/images/micro.jpg';
import Hackathon from '../assets/images/hackathon.jpg';
import QUIZ from '../assets/images/quiz.jpg';
import CODE from '../assets/images/coding.jpg';
import flutter from '../assets/images/flutter.jpg';
import cloud from '../assets/images/cloud.jpg';
import data from '../assets/images/data.jpg';
const certificates = [
  {
    title: "SQL Certification",
    issuer: "HACKER RANK",
    date: "Dec 2024",
    img: hackerCert
  },

  {
    title: "Software Testing and DevOps",
    issuer: "NMAMIT NITTE",
    date: "Feb 2025",
    img: Software
  },
  {
    title: "MicroSoft Copilot Webinar",
    issuer: "SKILL NATION",
    date: "May 2024",
    img: micro
  },
  {
    title: "Vishwakarma Hackforge [Hackathon]",
    issuer: "NMIT BANGALORE",
    date: "Feb 2025",
    img: Hackathon
  },
  {
    title: "IT Quiz Sentia [Quiz Competition]",
    issuer: "MITE MOODABIDRI",
    date: "MAY 2025",
    img: QUIZ
  },
  {
    title: "Code Wars [Coding Competition]",
    issuer: "SHREEDEVI INSTITUTE OF TECHNOLOGY",
    date: "APR 2025",
    img: CODE
  },
  {
    title: "Flutter Workshop",
    issuer: "NMAMIT NITTE",
    date: "JUNE 2025",
    img: flutter
  },
  {
    title: "Cloud Computing SDP BY WIPFLI",
    issuer: "NMAMIT NITTE",
    date: "APR 2025",
    img: cloud
  },
  
  // Add more certificates here
];

const Certificates = () => {
  return (
    <div className="certificates">
      <h1>📜 My Certificates</h1>
      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <img src={cert.img} alt={cert.title} />
            <div className="info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer} — {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
