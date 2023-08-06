import React from 'react'
import "../styles/siteNotResponsive.css"

export default function NotResponsive() {
    function showPage() {
        const NotResponsive = document.getElementById("NotResponsive");
        NotResponsive.classList.add("fadeout")
        setTimeout(() => {
            NotResponsive.style.display = "none"
        }, 750);
    }
  return (
    <div id='NotResponsive'>
        <div>
            Site Under Development <br />       
            <button onClick={() => showPage()} id='showSiteBtn'>Show</button>
        </div>
    </div>
  )
}
