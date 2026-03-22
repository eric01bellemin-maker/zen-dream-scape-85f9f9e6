// REMPLACER :
import { BrowserRouter } from 'react-router-dom';
// PAR :
import { HashRouter as Router } from 'react-router-dom';

// Et entourez votre composant <App /> avec <Router>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
