import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setResponseMsg(result.message || result.error);
      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setResponseMsg("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <h2 className="cgradient">Contact Us</h2>
        <div className="contact-container">
          <div className="form-container">
            <form className="connect-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message <span className="btn-icon">→</span>
              </button>
              {responseMsg && (
                <p
                  className={`response ${responseMsg.includes("Failed") ? "error" : "success"
                    }`}
                >
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contact;
