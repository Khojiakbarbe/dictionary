import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import App from './App';
import Info from './Info';
import Card from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar />
  <App />
  <Info />
  <h5>Recomended for you</h5>
  <Card />
  <h5>Most popular</h5>
  <Card />
  <h5>Trending</h5>
  <Card />
  </React.StrictMode>
);


