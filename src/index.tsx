import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fs from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import axios from 'axios';
import { CronJob } from 'cron';
import dotenv from 'dotenv';
dotenv.config();

const dir = process.cwd();  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
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

// Check if SSL is enabled for the frontend app
if (process.env.FRONTEND_SSL_ENABLED == "true") {
  // Create the directory for the SSL certificates if it doesn't exist
  const certDir = path.dirname(process.env.FRONTEND_SSL_PATH);
  if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true });
  }

  // Schedule the renewal of the SSL certificate using Certbot
  const certbotJob = new CronJob(process.env.CERTBOT_RENEWAL_SCHEDULE, () => {
    console.log('Renewing SSL certificate for frontend...');
    const certbotProcess = spawn('certbot', [
      'certonly',
      '--non-interactive',
      '--agree-tos',
      '--email',
      process.env.CERTBOT_EMAIL,
      '--webroot',
      '-w',
      process.env.CERTBOT_PASSWORD,
      '-d',
      process.env.FRONTEND_URL,
    ]);

    certbotProcess.stdout.on('data', (data: { toString: () => any; }) => {
      console.log(data.toString());
    });

    certbotProcess.stderr.on('data', (data: { toString: () => any; }) => {
      console.error(data.toString());
    });

    certbotProcess.on('close', (code: number) => {
      if (code === 0) {
        console.log('SSL certificate renewed successfully!');

      } else {
        console.error(`Failed to renew SSL certificate (exit code ${code})`);
      }
    });
  });

  certbotJob.start();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
