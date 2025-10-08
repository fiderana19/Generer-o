import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CVProvider } from './context/CVContext.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CVProvider>
      <Router>
        <App />
      </Router>
    </CVProvider>
  </React.StrictMode>,
);
