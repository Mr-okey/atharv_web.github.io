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
            site not responsive yet <br />
            sorry for the inconvenience       
            <button onClick={() => showPage()} id='showSiteBtn'>Show Anyway</button>
        </div>
    </div>
  )
}
