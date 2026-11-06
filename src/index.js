import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RouteRecovery() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('__spa_redirect');
    if (redirect) {
      window.history.replaceState(null, '', redirect);
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return null;
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteRecovery />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
