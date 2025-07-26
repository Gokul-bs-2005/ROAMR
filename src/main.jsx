// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; // ← Critical: ensure this import is present
import App from './app.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
