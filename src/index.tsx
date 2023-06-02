import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from 'dotenv';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page routes
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import NoPage from './pages/NoPage/noPage';


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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <App />
);

async function sendDataToGrafana(data: any) {
  try {
    const response = await axios.post(
      `${process.env.WATCHDOG_GRAFANA_URL}/api/datasources/proxy/1/api/v1/write?db=mydb&u=grafana&p=${process.env.WATCHDOG_GRAFANA_API_KEY}`,
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
