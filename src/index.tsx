import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page routes
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import NoPage from './pages/NoPage/noPage';
import Register from "./pages/Register/Register";
import Logout from "./pages/LogOut/Logout";


dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
