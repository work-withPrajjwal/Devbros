import "../styles/homePage.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

import webdevImg from "../assets/webdev.png";
import aibrainImg from "../assets/aibrain.png";
import designImg from "../assets/design.png";
import coursesImg from "../assets/courses.png";

import PwebdevImg from "../assets/Pwebdev.png";
import PaimlImg from "../assets/Paiml.png";
import PdesignImg from "../assets/Pdesign.png";
import PcoursesImg from "../assets/Pcourses.png";

import aboutsideImg from "../assets/aboutside.png";

const services = [
  {
    img: webdevImg,
    title: "Web Development",
    desc: "Develop responsive websites and web applications that showcase your brand online.",
  },
  {
    img: aibrainImg,
    title: "AI Model",
    desc: "Build smart AI models for predictions, automation, and data insights.",
  },
  {
    img: designImg,
    title: "Design",
    desc: "Design creative visuals, UI/UX elements, and branding graphics, graphics design etc.",
  },
  {
    img: coursesImg,
    title: "Courses",
    desc: "Learn at your own pace with interactive slides and engaging exercises.",
  },
];

const portfolioItems = [
  { img: PwebdevImg, label: "Web Development" },
  { img: PaimlImg, label: "AI Model" },
  { img: PdesignImg, label: "Design" },
  { img: PcoursesImg, label: "Courses" },
];

const aboutItems = [
  {
    title: "Who We Are",
    body: "DevBros Tech is a passionate team of developers and designers committed to delivering innovative IT solutions.",
  },
  {
    title: "What We Do",
    body: "We specialize in AI models, web solutions, and graphic design to help businesses thrive in the digital world.",
  },
  {
    title: "Our Vision",
    body: "To be a leading IT startup recognized for innovation, creativity, and excellence.",
  },
];

const HomePage = ({ navigate }) => (
  <div>
    {/* ── Hero ── */}
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-blob-top" />
      <div className="hero-blob-bottom" />
      <div className="hero-content">
        <h1 className="hero-title">
          DevBros IT
          <br />
          Solutions
        </h1>
        <p className="hero-desc">
          DevBroS Tech delivers advanced digital solutions powered by
          innovation. We offer AI model development, websites, design and IT
          Course Service. We focus on quality, performance, and modern user
          experience.
        </p>
        <button className="hero-btn" onClick={() => navigate("Contact")}>
          Start Project
        </button>
      </div>
    </section>

    {/* ── Services ── */}
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid-wrapper">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.img} alt={s.title} className="service-card-image" />
            <div className="service-card-body">
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <button
                className="service-card-btn"
                onClick={() => navigate("Service")}
              >
                View More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── Portfolio ── */}
    <section className="portfolio-section">
      <h2 className="section-title">Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, i) => (
          <div key={i} className="portfolio-item">
            <img src={item.img} alt={item.label} className="portfolio-image" />
            <p className="portfolio-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── About ── */}
    <section className="about-section">
      <h2 className="section-title">About DevBros Tech</h2>
      <div className="about-grid">
        <div>
          {aboutItems.map((item, i) => (
            <div key={i} className="about-item">
              <h3 className="about-item-title">{item.title}</h3>
              <p className="about-item-body">{item.body}</p>
            </div>
          ))}
        </div>
        <img
          src={aboutsideImg}
          alt="About DevBros"
          className="about-side-image"
        />
      </div>
      <div className="about-mission">
        <p>
          Our Mission is to deliver high-quality technology solutions that
          combine creativity, innovation, and efficiency. We aim to empower
          businesses with AI, web solutions, and graphic design that drive
          growth and enhance user experiences.
        </p>
      </div>
    </section>

    {/* ── Contact Snippet ── */}
    <section className="contact-snippet-section">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-snippet-grid">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  </div>
);

export default HomePage;
