import React from 'react';
import './SignupForm.css'; // Import the CSS file

function SignupForm() {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup Form</h2>
      <form className="signup-form">

        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="first_name" />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="last_name" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" />
        </div>

        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>

      </form>
    </div>
  );
}

export default SignupForm;
