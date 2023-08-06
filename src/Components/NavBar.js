import React from 'react'
import "../styles/NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id='NavBar-Box'>
            <div id='NavBar'>
                <Link to={"/blog"} className='NavBarBtn'>Blog</Link>
                <Link to={"/Home"} className='NavBarBtn'>Home</Link>
                <Link to={"/contact"} className='NavBarBtn'>Contact</Link>
            </div>
        </div>
    )
}
