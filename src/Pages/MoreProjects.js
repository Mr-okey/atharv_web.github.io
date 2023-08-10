import React, { useState } from 'react'
// import RotatingSticks from '../Components/RotatingSticks'
import "../styles/MoreProjects.css"
import cardDesignSS from "../images/cardDesignSs.png"
import educareSs from "../images/educareSs.png"
import foocusSS from "../images/foocusSS.png"
import stonepaperSS from "../images/stonepaperSS.png"
import tictactoiSS from "../images/tictactoiSS.png"
import tipeSS from "../images/tipeSS.png"
import torSS from "../images/torSS.png"
import { Link } from 'react-router-dom'



export default function MoreProjects(props) {

    const projectDetails = [
        {
            img: torSS,
            heading: "Another Tor",
            id: 1,
            desc: "An Attempt to build a developer centric Social-Media application, a place where all your social presence available on one click, collaborative tools with open thread discussions. Made with React js",
            status: "under development",
            github: "unavailable",
            deployment: "https://anothertor.netlify.app/"
        },
        {
            img: foocusSS,
            heading: "foocus",
            id: 2,
            status: "under development",
            desc: "A productivity application, a note taking app cum task manager, main objective was to create an application help you increase productivity in zen mode. Made with react js",
            github: "https://github.com/1447bits/foocus",
            deployment: "https://foocusapp.netlify.app/"
        },
        {
            img: cardDesignSS,
            heading: "card centric webpage front-end",
            id: 3,
            status: "compleated",
            desc: "A card centric design webpage frontend, responsive, made with vanila html/css and javascript",
            github: "https://github.com/1447bits/frontend/tree/main/Assignment2",
            deployment: "https://1447bits.github.io/frontend/Assignment2/"
        },
        {
            img: tipeSS,
            heading: "TipeIt",
            id: 4,
            status: "compleated",
            desc: "A fun project, Inspired by \"keybr.com\", A notepad to jot down your thoughts. Made with vanila html/css and javascript",
            github: "https://github.com/1447bits/typeit",
            deployment: "https://1447bits.github.io/typeit/"
        },
        {
            img: tictactoiSS,
            heading: "Tic Tac Toe",
            id: 5,
            status: "partically compleated",
            desc: "A fun project, a very familier game, with single and double player options, currently in single player mode your oponent is dumb but soon i will be updating it. made with vanila html/css and javascript",
            github: "https://github.com/1447bits/TicTacToe",
            deployment: "https://1447bits.github.io/TicTacToe/"
        },
        {
            img: stonepaperSS,
            heading: "Stone Paper Scissors",
            id: 6,
            status: "compleated",
            desc: "A fun project, a very familier single player game. made with vanila html/css and javascript",
            github: "https://github.com/1447bits/stonePaperScissor",
            deployment: "https://1447bits.github.io/stonePaperScissor/"
        },
        {
            img: educareSs,
            heading: "educare frontend",
            id: 7,
            status: "compleated",
            desc: "This was the Front-end design assignment, ought to be a responsive webpage made with vanila html/css and javascript.",
            github: "https://github.com/1447bits/frontend/tree/main/Assignment1",
            deployment: "https://1447bits.github.io/frontend/Assignment1/"
        },
    ]

    const [currentProjectPrev, setcurrentProjectPrev] = useState(GetProjectDetails(0))
    const [activeid, setactiveid] = useState(1)

    function GetProjectDetails(id) {
        let info = projectDetails[id]
        return <div id="ProjectDetails">
            <div className='projImg'>
                <img src={info.img} alt="" />
            </div>
            <div id='projectinfo'>
                <h1>{info.heading}</h1>
                <p className='statustxt'>status : {info.status}</p>
                <p className='projdesc'>{info.desc}</p>
                <span> Github :
                    <Link to={info.github} className='githublnk'> {info.github}</Link> <br />
                </span>
                <span> Deployment :
                    <Link to={info.deployment} className='deployment'> {info.deployment}</Link>
                </span>
            </div>
        </div>
    }

    // function changePrevProject(id) {
    //     id = id - 1
    //     setcurrentProjectPrev(GetProjectDetails(id))
    // }

    function focusprev(num) {
        const cards = document.getElementsByClassName("ProjectPrev-container")
        // array index start with 0 id starts with 1 so num-1 locates correct index
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("active")
        }
        cards[num - 1].classList.add("active")
        setTimeout(() => {
            setactiveid(num)
            setcurrentProjectPrev(GetProjectDetails(num - 1))
        }, 100);
    }

    function ProjectPrev(props) {
        return <div onClick={() => focusprev(props.id)} className={props.active ? 'ProjectPrev-container active' : 'ProjectPrev-container'}>
            <div className='ProjectPrev'>
                <img alt="" src={props.img} />
            </div>
            <p>{props.heading}</p>
        </div>
    }

    return (
        <div id='MoreProjects'>
            {/* <div id="rotatingSticsContainer">
                <div id='rotatingSticksBox'>
                    <RotatingSticks />
                </div>
            </div> */}
            <div id='moreProjectsMenu'>
                <ProjectPrev
                    img={torSS}
                    heading="Another Tor"
                    active={activeid === 1}
                    id={1}
                />
                <ProjectPrev
                    img={foocusSS}
                    heading="Foocus App"
                    id={2}
                    active={activeid === 2}
                />
                <ProjectPrev
                    img={cardDesignSS}
                    heading="cards Design"
                    active={activeid === 3}
                    id={3}
                />
                <ProjectPrev
                    img={tipeSS}
                    heading="TypeIt"
                    active={activeid === 4}
                    id={4}
                />
                <ProjectPrev
                    img={tictactoiSS}
                    heading="Tic Tac Toe"
                    active={activeid === 5}
                    id={5}
                />
                <ProjectPrev
                    img={stonepaperSS}
                    heading="Stone Paper Scissors"
                    active={activeid === 6}
                    id={6}
                />
                <ProjectPrev
                    img={educareSs}
                    heading="educare frontend"
                    active={activeid === 7}
                    id={7}
                />
            </div>
            <div id='ProjectDetails-container'>
                {currentProjectPrev}
            </div>
        </div>
    )
}
