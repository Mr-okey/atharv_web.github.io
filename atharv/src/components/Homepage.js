import React from 'react'
import "../App.css"
import reacticon from "../images/reacticon.png"
import reduxIcon from "../images/reduxicon.png"
import chakraUIIcon from "../images/chakraUIIcon.png"
import vanilaJSIcon from "../images/vanilaJSIcon.png"

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
            {/* <div id="resize-pg-btn" onClick={handleResizeWindow}>FullScreen 💢</div> */}
            <div id='Homepage-hero'>
                <div className='Homepage-hero-content'>
                    <p>
                        Atharv vyas, i'm a
                    </p>
                    <b>
                        Web Developer
                    </b>
                    <p>
                        not a designer*
                    </p>
                    <a href='#skills-pg-heading'><div id='down-arrow'></div></a>
                </div>
            </div>
            <div id='Homepage-qualification' className='page'>
                <h1 id='skills-pg-heading'>✨ Skills</h1>
                <p className='semi-hidden'>
                    &nbsp; I can't Lick my Elbow ! but I can -&gt;
                </p>
                <div id='skills-pg'>
                    <div>
                        <h1 id='sk-pg-changing-heading'>
                            I create
                            <p id='sk-pg-changing-heading-elem'> Webpages</p>
                            {/* <img className='icon' src={arrow} alt='' /> */}
                        </h1>
                    </div>
                    <div id='TV'>
                        <div className='skill-pg-box'>
                            <img src={reacticon} alt='' />
                            <text>I create responsive Web-pages (with ReactJs)</text>
                        </div>
                        <div className='skill-pg-box'>
                            <img src={reduxIcon} alt='' />
                            <text>Along react, just take it with a pinch of salt.</text>
                        </div>
                        <div className='skill-pg-box'>
                            <img src={chakraUIIcon} alt='' />
                            <text>Material UI designs, like some cherry on the cake.</text>
                        </div>
                        <div className='skill-pg-box'>
                            <img src={vanilaJSIcon} alt='' />
                            <text>OG.</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
