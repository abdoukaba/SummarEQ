import React, { useState } from 'react';
import './login.css';
import logoImage from '../assets/summareqlogo.png';
import { useNavigate } from 'react-router-dom';

const TextField = ({ label, value, onChange, type = "text" }) => (
  <div className="text-field">
    <input type={type} value={value} onChange={onChange} placeholder={label} className="input" />
  </div>
);

const Icon = ({ className = '' }) => (
  <div className={`icon ${className}`}></div>
);

export const Logo = ({ className }) => (
  <img src={logoImage} className={className} alt="SummarEQ Logo" />
);

const SignupPage = () => {
  const navigation = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
   navigation('/home');
  }

  return (
    <div>
      <div className="header">
        <Logo className="logo" />
        <div className="menu-icon">
          <Icon />
        </div>
      </div>
      <div className="container">
        <div className="panel">
          <div className="user-icon">
            <Icon className="user-icon" />
          </div>
          <h2 className="login-text">Log-In</h2>

          <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

          <button className="signup-button" onClick={handleClick}>Sign-In</button>

          <div className="signup-text">
            <div className="external-link-icon">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;