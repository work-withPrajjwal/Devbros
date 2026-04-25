import "../styles/servicePage.css";

import webdevIcon from "../assets/wevdevicon.png";
import aiIcon from "../assets/aiicon.png";
import paintIcon from "../assets/painticon.png";
import bookIcon from "../assets/bookicon.png";

const iconMap = {
  webdevicon: webdevIcon,
  aiicon: aiIcon,
  painticon: paintIcon,
  bookicon: bookIcon,
};

const ServiceCard = ({ icon, title, desc, accent = "#9333EA" }) => (
  <div className="service-card">
    <img src={iconMap[icon]} alt={title} className="service-card-icon" />
    <h3 className="service-card-title" style={{ color: accent }}>
      {title}
    </h3>
    <p className="service-card-desc">{desc}</p>
  </div>
);

export default ServiceCard;
