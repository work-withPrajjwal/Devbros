import "../styles/contactInfo.css";
import emailIcon from "../assets/Email.png";
import phoneIcon from "../assets/Phone.png";
import locationIcon from "../assets/Location.png";

const ContactInfo = () => {
  const items = [
    { icon: emailIcon, title: "Email", value: "lhosanglama555@gmail.com" },
    { icon: phoneIcon, title: "Phone", value: "9847586104" },
    { icon: locationIcon, title: "Location", value: "Bhaktapur, Kathmandu" },
  ];

  return (
    <div className="contact-info-wrapper">
      {items.map((item, i) => (
        <div key={i} className="contact-info-card">
          <div className="contact-info-icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <div>
            <p className="contact-info-title">{item.title}</p>
            <p className="contact-info-value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
