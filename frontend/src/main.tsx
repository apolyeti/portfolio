import { StrictMode }               from 'react';
import { createRoot }               from 'react-dom/client';
import { 
    BrowserRouter as Router, Route, Routes 
}   from 'react-router-dom';
import App                          from './App';
import Contact                      from './pages/contact';
import './index.css'
import 'vite/modulepreload-polyfill'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
