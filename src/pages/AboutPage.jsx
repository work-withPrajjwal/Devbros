import "../styles/aboutPage.css";

import rohitImg from "../assets/rohit.png";
import prajjwalImg from "../assets/prajjwal.png";
import pramilaImg from "../assets/pramila.png";
import lhosangImg from "../assets/lhosang.png";

const team = [
  {  role: "Web Designer", img: rohitImg },
  {  role: "Web Developer", img: prajjwalImg },
  {
    role: "Python Developer with AI Integration",
    img: pramilaImg,
  },
  {
    role: "Python Developer with AI Integration",
    img: lhosangImg,
  },
];

const AboutPage = () => (
  <div className="about-page">
    <h1 className="about-page-title">About Us</h1>

    {/* ── About Text ── */}
    <div className="about-text-box">
      <p>
        DevBros Tech is a modern IT startup dedicated to delivering innovative
        digital solutions. We specialize in AI models, web development, and
        graphic design to help businesses grow in the digital world. Our team
        focuses on creating user-friendly, scalable, and high-performance
        solutions tailored to each client's needs. We believe in combining
        creativity, technology, and innovation to build impactful digital
        experiences.
      </p>
    </div>

    {/* ── Team ── */}
    <h2 className="about-team-title">Our Team</h2>
    <div className="about-team-grid">
      {team.map((member, i) => (
        <div key={i} className="about-team-card">
          <img
            src={member.img}
            alt={member.name}
            className="about-team-image"
          />
          <p className="about-team-role">{member.role}</p>
          <p className="about-team-name">{member.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutPage;
