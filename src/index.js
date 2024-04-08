import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Login from './components/Login/Login';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Login /> }>
    <Route path="/app" element={ <App /> } />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
