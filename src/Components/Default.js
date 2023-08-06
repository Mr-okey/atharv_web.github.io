import React from 'react'
import NavBar from './NavBar'
import "../App.css"
import PageDots from "../Components/PageDots.js"
import NotResponsive from './NotResponsive'

export default function DefaultComp(props) {
  return (
    <div id='defaultPg'>
      <NotResponsive />
      <PageDots />
      <div id='defpg-child-pg'>
        {/* map function will show an error if there are less than 2 childrens under the defaul componentt */}
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
