import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(<p>Hello</p>);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* const elem = (
  <ul>
    <li> apple </li>
    <li> banana </li>
    <li> water melon </li>
  </ul>
);
const root1 = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root1.render(elem);
 */




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
