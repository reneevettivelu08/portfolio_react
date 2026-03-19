import { useState } from "react";
import "./Contact.scss";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contact">

      {/* ── Left: Info ── */}
      <div className="contact__info">
        <div>
          <p className="contact__eyebrow">// Let's connect</p>
          <h1 className="contact__title">
            Open to new<br />opportunities
          </h1>
        </div>

        <p className="contact__description">
          Whether you have a project in mind, want to collaborate, or just
          want to say hi — my inbox is always open.
        </p>

        <div className="contact__details">
          <div className="contact__detail-item">
            <div className="contact__detail-icon">@</div>
            <div>
              <div className="contact__detail-label">Email</div>
              <div className="contact__detail-value">hello@renee.dev</div>
            </div>
          </div>
          <div className="contact__detail-item">
            <div className="contact__detail-icon">⌖</div>
            <div>
              <div className="contact__detail-label">Location</div>
              <div className="contact__detail-value">Toronto, ON — Remote friendly</div>
            </div>
          </div>
        </div>

        <div>
          <p className="contact__socials-label">// Find me online</p>
          <div className="contact__socials">
            <a
              href="https://github.com/reneevettivelu08"
              className="contact__social-pill"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/renee"
              className="contact__social-pill"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact__resume">
          <div>
            <div className="contact__resume-label">// Resume</div>
            <div className="contact__resume-name">Renee_Vetivelu_Resume.pdf</div>
          </div>
          <a href="/resume.pdf" download className="btn btn--primary">
            Download ↓
          </a>
        </div>
      </div>

      {/* ── Right: Form ── */}
      <div className="contact__form-panel">
        <p className="contact__form-label">// Send a message</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__row">
            <div className="form__field">
              <label className="form__field-label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__field">
              <label className="form__field-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form__field">
            <label className="form__field-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === "success" && (
            <p className="form__status form__status--success">
              Message sent — I'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="form__status form__status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            className="btn btn--primary form__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message →"}
          </button>
        </form>
      </div>

    </main>
  );
}