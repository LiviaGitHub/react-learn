import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 *  this code sets up the rendering of the <App /> component into the DOM element with the ID 'root', 
 *  ensuring that the rendering occurs within "Strict Mode" to achieve safer and more efficient code. 
 *  The use of ReactDOM.createRoot() indicates that the application is prepared to take advantage of React's "Concurrent Mode."
 */