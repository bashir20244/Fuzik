import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import About from './pages/aboutUs/aboutus.jsx'
import Footer from'./components/footer/footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <About/>
      <Footer/>
    <App />
    </Router>
    
  </React.StrictMode>
);


