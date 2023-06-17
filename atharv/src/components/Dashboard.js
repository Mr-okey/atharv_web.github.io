import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div id='Dashboard-container'>
            <div id='Dashboard'>
                <div className='Dash-btn'><Link to={"/about"}>About</Link></div>
                <div className='Dash-btn Dash-btn-active' ><Link to={"/"}>Home</Link></div>
                <div className='Dash-btn'><Link to={"/projects"}>Projects</Link></div>
            </div>
        </div>
    )
}
