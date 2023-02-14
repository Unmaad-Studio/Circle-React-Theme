import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/layouts.css";
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import router from './Router';
import appThemes from './themes';

/**
 * Welcome to the entry point of the 'Circle' React app.
 * This is where the app is rendered to the DOM.
 * 
 * The 'App' component is the root of the app.
 * The 'RouterProvider' component is used to provide the router to the app.
 * 
 * @author Akshay Jhajhra <akshayejh@gmail.com>
 */
ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App
      themes={appThemes}
      defaultTheme={appThemes[0]}
      showThemeSwitcher
    // cursorCircle
    >
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
