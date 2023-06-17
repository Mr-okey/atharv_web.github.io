import React from 'react'
import "../styles/projectpg.css"
import "../App.css"
import Dashboard from './Dashboard'

export default function ProjectPg() {
  return (
    <div id='ProjectPg' class="page">
      <div id="rotationBars-container">
        <div id="rectangle1" class="rectangle"></div>
        <div id="rectangle2" class="rectangle"></div>
        <div id="rectangle3" class="rectangle"></div>
        <div id="rectangle4" class="rectangle"></div>
        <div class="pivot" id="pivot" ></div>
      </div>
      <Dashboard />
    </div>
  )
}
