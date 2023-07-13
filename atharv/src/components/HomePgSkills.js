import React from 'react'
import "../App.css";
import reacticon from "../images/reacticon.png"
import reduxIcon from "../images/reduxicon.png"
import chakraUIIcon from "../images/chakraUIIcon.png"
import vanilaJSIcon from "../images/vanilaJSIcon.png"
import computerGuy from "../images/compGuy.png"

export default function HomePgSkills() {
    return (
        <div id='Homepage-qualification' className='page'>
            <h1 id='skills-pg-heading'>✨ Skills</h1>
            <p className='semi-hidden'>
                &nbsp; I can't Lick my Elbow ! but I can -&gt;
            </p>
            <div id='skills-pg'>
                <div id='skills-pg-bgimg'>
                    <img draggable="false" src={computerGuy} alt='' />
                </div>
                <div id='TV'>
                    <div className='skill-pg-box'>
                        <img draggable="false" src={reacticon} alt='' />
                        <text>I create responsive Web-pages with ReactJs</text>
                    </div>
                    <div className='skill-pg-box'>
                        <img draggable="false" src={reduxIcon} alt='' />
                        <text>Redux, just take it with a pinch of salt.</text>
                    </div>
                    <div className='skill-pg-box'>
                        <img draggable="false" src={chakraUIIcon} alt='' />
                        <text>Chakra U.I. for some cherry on the cake.</text>
                    </div>
                    <div className='skill-pg-box'>
                        <img draggable="false" src={vanilaJSIcon} alt='' />
                        <text>OG.</text>
                    </div>
                </div>
            </div>
        </div>
    )
}
