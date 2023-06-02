import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from 'dotenv';
import {BrowserRouter} from "react-router-dom";
dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
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
