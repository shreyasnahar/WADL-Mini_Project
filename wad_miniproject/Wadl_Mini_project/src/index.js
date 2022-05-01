import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId="mcIJRG0nhLxWqNjXZ8CtdfrHHCGZ0ebGWtWigfc2" serverUrl="https://mrbdjefwcomu.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

