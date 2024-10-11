import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from  'react-router-dom';
import ShopConTextProvider from './context/ShopContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopConTextProvider>
      <App />
    </ShopConTextProvider>
  </BrowserRouter>,
)
