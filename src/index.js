//Importing all the components that form a page container, necessary libraries and stylesheet

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Login from "./components/Login/Login";
import SortTest from './components/Sort/Sort';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Building the router object, setting the path of the pages, and what component is rendered for each one

const router = createBrowserRouter([{
  path: "/",
  element: <Login />,
  errorElement: <NotFoundPage />
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "sort",
    element: <SortTest />
  }
]);

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
