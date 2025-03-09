import React, {useState} from 'react';
import './login.css';
import logoImage from '../assets/summareqlogo.png'

const TextField = ({ label, placeholder }) => (
  <div className="text-field">
    <div className="contents">
      <span className="username">{label}</span>
      <span className="value">{placeholder}</span>
    </div>
  </div>
);

const Icon = ({ className = '' }) => (
  <div className={`icon ${className}`}></div>
);

export const Logo = ({ className }) => (
  <img src={logoImage} className={className} alt="SummarEQ Logo" />
);

const SignupPage = () => {
  return (
    <div className="container">
      <div className="header">
        <Logo className="logo"></Logo>
        <div className="menu-icon">
          <Icon />
        </div>
      </div>

      <div className="panel">
        <div className="user-icon">
          <Icon className="user-icon" />
        </div>
        <h2 className="login-text">Log-In</h2>

        <TextField label="Username" placeholder="Enter username" />
        <TextField label="Password" placeholder="Enter password" />

        <div className="signup-text">
          Sign-Up
          <div className="external-link-icon">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;