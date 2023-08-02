import React from 'react'
import "../styles/PageDots.css"
import { Link } from 'react-router-dom'

export default function PageDots() {
  return (
    <div id='PageDots'>
        <Link className='pagedot' to="#HomePg"></Link>           
        <Link className='pagedot' to="#HomePg"></Link>           
        <Link className='pagedot' to="#ProjectPg"></Link>           
    </div>
  )
}
