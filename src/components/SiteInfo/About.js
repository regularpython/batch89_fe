import React from 'react';

function About() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <h2>About Our Application</h2>
      <p>
        Welcome to our User Management Application – a modern, intuitive, and performance-driven platform
        designed to simplify the way you manage and interact with user data. This application was built with
        a combination of cutting-edge frontend and backend technologies, offering a seamless experience for
        administrators, managers, and anyone responsible for handling user-related operations in a secure
        and efficient manner.
      </p>
      <p>
        At its core, the application provides an all-in-one interface for creating, listing, updating, and
        deleting user accounts. Whether you are onboarding new team members, updating existing user
        information, or removing inactive accounts, our system ensures that each action is processed quickly
        and reliably. The frontend is developed with React.js for a smooth and responsive UI, while the
        backend leverages AWS Serverless services like API Gateway and AWS Lambda to handle requests with
        low latency and high scalability. Data is securely stored and retrieved from a reliable database layer,
        ensuring that every transaction is accurate and secure.
      </p>
      <p>
        This application is designed with both functionality and user experience in mind. From intuitive
        table layouts for browsing user lists to clear action buttons for managing accounts, every detail is
        crafted to reduce complexity and improve workflow efficiency. The system also incorporates important
        development best practices such as proper error handling, CORS configuration for cross-origin
        requests, and consistent response formatting so that integrations with other systems or frontends are
        straightforward and reliable.
      </p>
      <p>
        As we continue to evolve, our roadmap includes advanced features such as search and filter
        capabilities, role-based access control, activity logging, and integration with external authentication
        systems. These enhancements will empower teams of all sizes to manage users more effectively while
        maintaining security and compliance standards. Whether you are running this system locally for
        testing or deploying it in a production environment on AWS, our documentation and modular code
        structure make setup, maintenance, and customization a straightforward process.
      </p>
      <p>
        We believe that managing user data should not be a frustrating or overly complex task. By combining
        simplicity, scalability, and modern technology, this application serves as a reliable tool that adapts to
        your organization's needs. We’re committed to continuously improving it based on real-world feedback,
        so if you have suggestions or feature requests, we would love to hear from you. Thank you for choosing
        our User Management Application – where efficiency meets reliability.
      </p>
    </div>
  );
}

export default About;
