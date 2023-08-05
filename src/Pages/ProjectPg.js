import React from 'react'
import torSS from "../images/torSS.png"
import foocusSS from "../images/foocusSS.png"
import tictactoiSS from "../images/tictactoiSS.png"
import tipeitSS from "../images/tipeSS.png"
import eduCareSS from "../images/educareSs.png"
import cardDesignSS from "../images/cardDesignSs.png"

import "../styles/ProjectPg.css"
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    return <Link to={props.url} target="_blank" className='ProjectCard'>
        <div>
            <div className='projectImg'>
                <img src={props.img} alt="projectPrev" />
            </div>
            <div className='projectTitle'>
                <Link to={props.url} target="_blank">{props.title}</Link>
            </div>
            <div className='projectDesc'>
                {props.desc}
            </div>
        </div>
    </Link>
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
                    url="https://anothertor.netlify.app/"
                />
                <ProjectCard
                    img={foocusSS}
                    title="Foocus"
                    desc="A productivity Application aims to help you be more productive. Card designs, Made with react, Frontend project (under development)"
                    url="https://foocusapp.netlify.app/"
                />
                <ProjectCard
                    img={tipeitSS}
                    title="TipeIt"
                    desc="Just another Notepad, made with vanila javascript,"
                    url="https://tipeit.netlify.app/"
                />
                <ProjectCard
                    img={tictactoiSS}
                    title="TicTacToe"
                    desc="TicTacToe game made with vanila Js, a very well know game."
                    url="https://1447bits.github.io/TicTacToe/"
                />
                <ProjectCard
                    img={cardDesignSS}
                    title="Card Centric Design"
                    desc="FrontEnd project to develop a card centric design, and polish skills with vanila HTML/CSS"
                    url="https://1447bits.github.io/frontend/Assignment2/"
                />
                <ProjectCard
                    img={eduCareSS}
                    title="Educare Frontend"
                    desc="FrontEnd project, developed a page with multiple elements usign vanila HTML/CSS"
                    url="https://1447bits.github.io/frontend/Assignment1/"
                />
            </div>
        </div>
    )
}
