import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check password strength
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const checkPasswordStrength = password => {
    // Implement your password strength logic here
    // Example: return 'Weak', 'Medium', 'Strong', etc.
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log('Response:', response);
      if (response && response.data) {
        console.log('Response data:', response.data);
        // Optionally, you can redirect the user to another page after successful registration
      } else {
        console.error('Response data is undefined');
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Registration failed:', error.response?.data?.message || 'Unknown error');
    }
  };
  

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
      </div>
      <div className="password-strength">{passwordStrength}</div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
