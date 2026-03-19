import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <div className="contact-header">
          <h3 className="contact-name">Md Farid</h3>
          <p className="contact-tagline">Let’s connect and build something impactful! 🚀</p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:devfarid260@gmail.com">devfarid260@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Budapest, Hungary</span>
          </div>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/erfarid"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-farid-38446925a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}