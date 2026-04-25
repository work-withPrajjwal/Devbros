import "../styles/portfolioPage.css";
import ServiceCard from "../components/ServiceCard";

import PwebdevImg from "../assets/wevdevicon.png";
import PaimlImg from "../assets/aiicon.png";
import PdesignImg from "../assets/painticon.png";
import PcoursesImg from "../assets/bookicon.png";

const services = [
  {
    icon: "webdevicon",
    title: "Web Development",
    desc: "Develop responsive websites and web applications that showcase your brand online.",
  },
  {
    icon: "aiicon",
    title: "AI Model",
    desc: "Build smart AI models for predictions, automation, and data insights.",
  },
  {
    icon: "painticon",
    title: "Design",
    desc: "Design creative visuals, UI/UX elements, and branding graphics.",
  },
  {
    icon: "bookicon",
    title: "Courses",
    desc: "Learn at your own pace with interactive slides.",
  },
];

const categories = [
  { name: "Web Development", img: PwebdevImg },
  { name: "AI Model", img: PaimlImg },
  { name: "Design", img: PdesignImg },
  { name: "Courses", img: PcoursesImg },
];

const PortfolioPage = () => (
  <div className="portfolio-page">
    <h1 className="portfolio-page-title">Our Portfolio</h1>

    {/* ── Top Service Cards ── */}
    <div className="portfolio-services-wrapper">
      <div className="portfolio-services-grid">
        {services.map((s, i) => (
          <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>

    {/* ── Category Sections ── */}
    {categories.map((cat, ci) => (
      <div key={ci} className="portfolio-category">
        <h2 className="portfolio-category-title">{cat.name}</h2>
        <div className="portfolio-category-grid">
          {[1, 2, 3, 4].map((j) => (
            <div key={j} className="portfolio-project-card">
              <img
                src={cat.img}
                alt={cat.name}
                className="portfolio-project-icon"
              />
              <h3 className="portfolio-project-title">{cat.name}</h3>
              <p className="portfolio-project-desc">
                Develop responsive websites and web applications that showcase
                your brand online.
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PortfolioPage;
