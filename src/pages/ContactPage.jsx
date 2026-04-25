import "../styles/contactPage.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => (
  <div className="contact-page">
    <h1 className="contact-page-title">Get in Touch</h1>
    <div className="contact-page-grid">
      <ContactForm />
      <ContactInfo />
    </div>
  </div>
);

export default ContactPage;
