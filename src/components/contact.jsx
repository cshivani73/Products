import React, { useState } from "react";
import "../css/contact.css";

export default function Contact() {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

const handleChange = (e) => {
    setFormData({ ...formData,  [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({ name: "", email: "", message: ""});
};

return (

<section className="contact-section" id="contact">
    <div className="contact-container">

        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-text">
            I'm always open to discussing new projects or collaboration opportunities.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"  required/>
            </div>

            <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Write your message..." required/>
            </div>

            <button type="submit" className="contact-btn">
                Send Message
            </button>
        </form>

    </div>
</section>

);

}