import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css"; // import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // for "Sending..." or "Email sent successfully!"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    // Simulate sending (you can replace with EmailJS or backend call)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset message after few seconds
      setTimeout(() => setStatus(""), 4000);
    }, 2000);
  };

  return (
    <section className="contact">
      {/* Left column */}
      <div className="contact-col">
        <h2 className="contact-title">
          <FaEnvelope className="msg-icon" /> Get in Touch
        </h2>
        <p>
          Feel free to contact us through the form or reach us directly using
          the details below.
        </p>

        <ul className="contact-info">
          <li>
            <FaPhoneAlt className="icon" /> +1 234 567 890
          </li>
          <li>
            <FaEnvelope className="icon" /> contact@example.com
          </li>
          <li>
            <FaMapMarkerAlt className="icon" /> New York, USA
          </li>
        </ul>
      </div>

      {/* Right column: Contact form */}
      <div className="contact-col">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            {status === "sending" ? "Sending..." : "Send"}
            <FaPaperPlane className="arrow-icon" />
          </button>

          {/* Status message */}
          {status === "sending" && (
            <p className="form-status sending">Sending your message...</p>
          )}
          {status === "success" && (
            <p className="form-status success">✅ Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
