import React from 'react';
import './login.css';

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

const SignupPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo"></div>
        <div className="menu-icon">
          <Icon />
        </div>
      </div>

      <div className="left-panel">
        <h1 className="title">What is SummarEQ?</h1>
        <div className="description-box">
          <p className="description-text">
            Basic description and welcome message goes here.
          </p>
        </div>
        <div className="link">
          <Icon />
        </div>
      </div>

      <div className="right-panel">
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