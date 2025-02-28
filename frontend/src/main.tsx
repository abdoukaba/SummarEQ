import { StrictMode } from 'react'; // Import StrictMode
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import React from 'react'; // Add import statement for React

createRoot(document.getElementById('root')!).render(
 
    <App />
);
