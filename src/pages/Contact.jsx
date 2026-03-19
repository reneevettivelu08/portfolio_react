import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Contact Me</h1>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}