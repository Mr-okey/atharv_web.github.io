import React from 'react'
import "../styles/RotatingSticks.css"

export default function RotatingSticks(props) {
    return (
        <div id="rotationBars-container">
            <div id="rectangle1" class="rectangle"></div>
            <div id="rectangle2" class="rectangle"></div>
            <div id="rectangle3" class="rectangle"></div>
            <div id="rectangle4" class="rectangle"></div>
            <div class="pivot" id="pivot"></div>
        </div>
    )
}
