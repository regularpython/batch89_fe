import React from 'react';

function Contact() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have questions about our User Management Application, need
        technical assistance, want to request a new feature, or simply wish to share your feedback, our team
        is here to help. Clear communication is at the heart of what we do, and we strive to respond to all
        inquiries promptly and professionally.
      </p>
      <p>
        Our dedicated support team can assist with a variety of topics including troubleshooting, user
        onboarding, deployment guidance, AWS integration, and best practices for managing your application.
        No matter your technical background, we aim to provide guidance that is clear, actionable, and tailored
        to your needs.
      </p>

      <h3>📬 Contact Information</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li><strong>Email:</strong> support@usermanagementapp.com</li>
        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
        <li><strong>Address:</strong> 123 Innovation Drive, Tech City, TX 75001, USA</li>
      </ul>

      <h3>📩 Send Us a Message</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
        <input type="text" placeholder="Your Name" required style={{ padding: "10px" }} />
        <input type="email" placeholder="Your Email" required style={{ padding: "10px" }} />
        <textarea placeholder="Your Message" rows="5" required style={{ padding: "10px" }}></textarea>
        <button type="submit" style={{ padding: "10px", backgroundColor: "#2563eb", color: "#fff", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>

      <h3>⏰ Support Hours</h3>
      <p>
        Our team is available Monday to Friday, from 9:00 AM to 6:00 PM (CST). Messages received outside these
        hours will be addressed as soon as possible on the next business day.
      </p>

      <h3>🌐 Connect with Us</h3>
      <p>
        Follow us on social media to stay updated with the latest features, tutorials, and product updates:
      </p>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Contact;
