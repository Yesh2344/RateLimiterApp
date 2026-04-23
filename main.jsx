import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RateLimiter } from './utils/rateLimiter';

// Updated - v6.9.0
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);