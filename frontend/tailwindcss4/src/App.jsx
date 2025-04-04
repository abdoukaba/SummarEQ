import React from 'react';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/home';
import SignupPage from './pages/login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;