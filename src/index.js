import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
     <style>{`
         body{
             margin: 0px;
             padding: 0px;
             padding-right: 0px !important;
         }
        `}</style>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

