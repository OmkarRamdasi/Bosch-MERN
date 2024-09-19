// node_modules import
import React from 'react'; // official react core library 
import ReactDOM from 'react-dom/client'; // official react dom library - for working with the DOM.
import 'bootstrap/dist/css/bootstrap.css';
// custom imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
