import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Beers from './routes/beers';
import AboutUs from './routes/aboutus';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="beers" element={<Beers />} />
      <Route path="aboutus" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

