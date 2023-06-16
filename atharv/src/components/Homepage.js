import React from 'react'
import "../App.css"
import HomePgHero from './HomePgHero'
import HomePgSkills from './HomePgSkills'

// const handleResizeWindow = () => {
//     const elem = document.getElementsByTagName("body")
//     // Resize the window to the desired dimensions
//     // window.resizeTo(800, 600);
//     // document.body.style.zoom = "80%";

//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }

// };

export default function Homepage() {
    return (
        <div id="Homepage">
            <HomePgHero />
            <HomePgSkills />
        </div>
    )
}
