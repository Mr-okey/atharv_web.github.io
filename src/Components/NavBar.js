import React from 'react'
import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <div id='NavBar-Box'>
            <div id='NavBar'>
                <div className='NavBarBtn'>Blog</div>
                <div className='NavBarBtn'>Home</div>
                <div className='NavBarBtn'>More</div>
            </div>
        </div>
    )
}
