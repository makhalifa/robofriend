import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import './index.css';
import Card from './Card';
import { robots } from './robots';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {robots.map((robot) => {
      console.log(robot);
      return Card(robot);
    })}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
