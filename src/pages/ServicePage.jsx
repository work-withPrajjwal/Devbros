import "../styles/servicePage.css";
import ServiceCard from "../components/ServiceCard";

const ServicePage = () => (
  <div className="service-page">
    <h1 className="service-page-title">Our Services</h1>
    <div className="service-page-wrapper">
      <div className="service-page-grid">
        <ServiceCard
          icon="webdevicon"
          title="Web Development"
          desc="Develop responsive websites and web applications that showcase your brand online."
        />
        <ServiceCard
          icon="aiicon"
          title="AI Model"
          desc="Build smart AI models for predictions, automation, and data insights."
        />
        <ServiceCard
          icon="painticon"
          title="Design"
          desc="Design creative visuals, UI/UX elements, and branding graphics."
        />
        <ServiceCard
          icon="bookicon"
          title="Courses"
          desc="Learn at your own pace with interactive slides and engaging exercises."
        />
      </div>
    </div>
  </div>
);

export default ServicePage;
