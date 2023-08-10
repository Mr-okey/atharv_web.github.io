import React from 'react'
import "../styles/ContactPg.css"
import qr from "../images/linkedQR.png"
import { Link } from 'react-router-dom'

export default function ContactPg() {
  return (
    <div id='ContactPg'>
      <div>
        <div id='temp'>
          <Link to="https://www.linkedin.com/in/mstatharv/"><img alt="" src={qr} /></Link>
          </div> 
      </div>
    </div>
  )
}
