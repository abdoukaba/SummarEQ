import React from 'react';
import { Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';
import SignupPage from './pages/Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App;