import React, { useState } from 'react';
import './register.css';
import Navbar from '../../components/header/header-login/navbar-login';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false); // State to manage password match error
  const api = import.meta.env.VITE_URL_API
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
  
    // Check if password and confirmation password match
    if (password !== confirmpassword) {
      setPasswordMatchError(true);
      return; // Stop further execution
    }

    const role = "user";

    const response = await fetch(`${api}/api/User/CreateUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role
      })
    });
  
    if (response.ok) {
      const data = await response.text();
      console.log(data); // User authenticated successfully
      // Redirect or do something else after successful login
      navigate('/login')
    } else {
      // Handle errors
      console.error('Failed to login');
    }
  };

  return (
    <div className="register-page">
      <Navbar/>
      <div className="register-container">
        <h2 className="welcome-text">Are you ready become a professional cheff?</h2>
        <p className="register-prompt">Please register first</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            className='input-register'
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-register'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-register'
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='input-register'
          />
          {passwordMatchError && <p style={{ color: 'red' }}>Your password does not match.</p>} {/* Display error message if passwords do not match */}
          <button type="submit" className="register-button">Sign Up</button>
          <div className="register-loginhere">
            <p>Have an account? <a href="#">Login here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
