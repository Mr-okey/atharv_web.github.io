import React from 'react'
import torSS from "../images/torSS.png"
import foocusSS from "../images/foocusSS.png"
import tictactoiSS from "../images/tictactoiSS.png"
import tipeitSS from "../images/tipeSS.png"
import moreProjectsImg from "../images/moreProjects.png"

import "../styles/ProjectPg.css"
import { Link } from 'react-router-dom'

function ProjectCard(props) {
    return <Link to={props.url} target={props.target} className='ProjectCard'>
        <div>
            <div className='projectImg'>
                <img src={props.img} alt="projectPrev" />
            </div>
            <div className='projectTitle'>
                <Link to={props.url} target={props.target}>{props.title}</Link>
            </div>
            <div className='projectDesc'>
                {props.desc}
            </div>
        </div>
    </Link>
}

export default function ProjectPg() {

    function handleScroll(event) {
        const container = document.getElementById("ProjectPg-projectsContainer");
        console.log("scrolled")

        if (!container) return;
        const containerRect = container.getBoundingClientRect();
        const containerLeftCenter = containerRect.left + containerRect.width / 2;
        const cursorPosition = event.clientX;

        const distanceFromLeftCenter = cursorPosition - containerLeftCenter;

        container.scrollLeft += distanceFromLeftCenter;

    }

    return (
        <div id='ProjectPg'>
            <h1 id='ProjectPg-heading'>
                Projects
            </h1>
            <div id='ProjectPg-projectsContainer' onMouseMove={handleScroll} >
                <ProjectCard
                    img={torSS}
                    title="Anorther Tor"
                    desc="A social media application which aims to combine all yoru social presence at one profile. Less distractive design, developer friendly, and loaded with tons of collaboration features"
                    url="https://anothertor.netlify.app/"
                    target="_blank"
                />
                <ProjectCard
                    img={foocusSS}
                    title="Foocus"
                    desc="A productivity Application aims to help you be more productive. Card designs, Made with react, Frontend project (under development)"
                    url="https://foocusapp.netlify.app/"
                    target="_blank"
                />
                <ProjectCard
                    img={tipeitSS}
                    title="TipeIt"
                    desc="Just another Notepad, made with vanila javascript,"
                    url="https://1447bits.github.io/typeit/"
                    target="_blank"
                />
                <ProjectCard
                    img={tictactoiSS}
                    title="TicTacToe"
                    desc="TicTacToe game made with vanila Js, a very well know game."
                    url="https://1447bits.github.io/TicTacToe/"
                    target="_blank"
                />
                <ProjectCard
                    img={moreProjectsImg}
                    title="More.."
                    desc=""
                    url="/moreProjects"
                    target=""
                />
            </div>
        </div>
    )
}
