import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterAPP} from "./CounterAPP"
// import App from './App.jsx'
// import {FirstApp,dogInfo} from './FirstApp.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
    /* <App />
    <FirstApp /> 
    */
    }
  <CounterAPP value={0} />
  </React.StrictMode>,
)
