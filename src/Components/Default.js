import React from 'react'
import NavBar from './NavBar'
import "../App.css"

export default function DefaultComp(props) {
  return (
    <div id='defaultPg'>
      <div id='defpg-child-pg'>
        {/* map function will show an error is you have less than 2 childrens under the default */}
        {props.children.map(childPg => {
          return childPg
        })}
      </div>
      <div id='default-navbar'>
        <NavBar />
      </div>
    </div>
  )
}
