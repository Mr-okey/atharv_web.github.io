import React from 'react'
import NavBar from './NavBar'

export default function DefaultComp(props) {
  return (
    <div>
        {props.children}
        <NavBar />
    </div>
  )
}
