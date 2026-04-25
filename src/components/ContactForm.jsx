import { useState } from "react";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setSent(false);
  };

  if (sent) {
    return (
      <div className="contact-form-success">
        <div>
          <div className="contact-form-success-icon">✅</div>
          <p className="contact-form-success-text">Message sent!</p>
          <button onClick={handleReset} className="contact-form-done-button">
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      {[
        { label: "Name", key: "name", placeholder: "Your Name", type: "text" },
        {
          label: "Email",
          key: "email",
          placeholder: "Your@gmail.com",
          type: "email",
        },
      ].map((f) => (
        <div key={f.key} className="contact-form-field">
          <label className="contact-form-label">{f.label}</label>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={form[f.key]}
            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            className="contact-form-input"
          />
        </div>
      ))}

      <div className="contact-form-field">
        <label className="contact-form-label">Message</label>
        <textarea
          placeholder="Tell us about your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="contact-form-textarea"
        />
      </div>

      <button onClick={() => setSent(true)} className="contact-form-button">
        Send
      </button>
    </div>
  );
};

export default ContactForm;
