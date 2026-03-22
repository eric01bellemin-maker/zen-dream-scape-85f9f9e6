import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom"; // On utilise l'alias Router pour plus de clarté
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
