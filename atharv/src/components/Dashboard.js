import React from 'react'
import "../App.css"

export default function Dashboard() {
    return (
        <div id='Dashboard-container'>
            <div id='Dashboard'>
                <div className='Dash-btn'>About</div>
                <div className='Dash-btn Dash-btn-active' >Home</div>
                <div className='Dash-btn'>Projects</div>
            </div>
        </div>
    )
}
