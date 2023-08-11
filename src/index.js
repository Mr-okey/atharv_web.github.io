import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import "./styles/cursor.css"
import { BrowserRouter } from 'react-router-dom';
import NotResponsive from './Components/NotResponsive'


// function getCursor() {
//   const cursor = document.getElementById("cursor")
//   document.addEventListener("mousemove", (event) => {
//     // we set the coordinates to match the cursor
//     cursor.style.left = `${event.clientX - 10}px`;
//     cursor.style.top = `${event.clientY - 10}px`;
//   });  
//   console.log("got")
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotResponsive />
    {/* <div id='cursor'></div> */}
    <App />
  </BrowserRouter>
);