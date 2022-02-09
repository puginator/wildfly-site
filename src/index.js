import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Beers from './routes/beers';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="beers" element={<Beers />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

