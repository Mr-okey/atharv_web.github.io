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
      <Link className='pagedot-box' onClick={() => handleLinkClick("HomePg")} to="#HomePg">
        <div className='pagedot'></div>
      </Link>
      <Link className='pagedot-box' onClick={() => handleLinkClick("SkillPg")} to="#SkillPg">
        <div className='pagedot'></div>
      </Link>
      <Link className='pagedot-box' onClick={() => handleLinkClick("ProjectPg")} to="#ProjectPg">
        <div className='pagedot'></div>
      </Link>
    </div>
  )
}
