import React from 'react'
import NavBar from './NavBar'
import "../App.css"

export default function DefaultComp(props) {
  return (
    <div id='defaultPg'>
      <div id='defpg-child-pg'>
        {props.children}
      </div>
      <div id='default-navbar'>
        <NavBar />
      </div>
    </div>
  )
}
