import React from 'react'
import torSS from "../images/torSS.png"
import foocusSS from "../images/foocusSS.png"
import tictactoiSS from "../images/tictactoiSS.png"
import tipeitSS from "../images/tipeSS.png"
import "../styles/ProjectPg.css"

function ProjectCard(props) {
    return <div className='ProjectCard'>
        <div className='projectImg'>
            <img src={props.img} alt="projectPrev" />
        </div>
        <div className='projectTitle'>
            <h2>{props.title}</h2>
        </div>
        <div className='projectDesc'>
            {props.desc}
        </div>
    </div>
}

export default function ProjectPg() {
    return (
        <div id='ProjectPg'>
            <h1 id='ProjectPg-heading'>
                Projects
            </h1>
            <div className='ProjectPg-projectsContainer'>
                <ProjectCard
                    img={torSS}
                    title="Anorther Tor"
                    desc="A social media application which aims to combine all yoru social presence at one profile. Less distractive design, developer friendly, and loaded with tons of collaboration features"
                />
                <ProjectCard
                    img={foocusSS}
                    title="Foocus"
                    desc="A productivity Application aims to help you be more productive. Card designs, Made with react, Frontend project (under development)"
                />
                <ProjectCard
                    img={tipeitSS}
                    title="TipeIt"
                    desc="Just another Notepad, made with vanila javascript,"
                />
                <ProjectCard
                    img={tictactoiSS}
                    title="TicTacToe"
                    desc="TicTacToe game made with vanila Js, a very well know game."
                />
            </div>
        </div>
    )
}
