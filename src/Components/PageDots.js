import React from 'react'
import "../styles/PageDots.css"
import { Link } from 'react-router-dom'

export default function PageDots() {
  const handleLinkClick = (targetid) => {
    const bodyCardsElement = document.getElementById(targetid);
    if (bodyCardsElement) {
      bodyCardsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='PageDots'>
      <Link className='pagedot' onClick={() => handleLinkClick("HomePg")} to="#HomePg"></Link>
      <Link className='pagedot' onClick={() => handleLinkClick("SkillPg")} to="#SkillPg"></Link>
      <Link className='pagedot' onClick={() => handleLinkClick("ProjectPg")} to="#ProjectPg"></Link>
    </div>
  )
}
