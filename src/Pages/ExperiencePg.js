import React from 'react'

import "../styles/exppg.css"


export default function ExperiencePg() {

    return (

        <div id='ExperiencePg'>

            <h1 id='ExperiencePg-heading'>
                Experience and Responsibilities
            </h1>

            <div className='pageContent'>
                {/* pageContent section-1 */}
                <div className='pageContent-section-1'>

                    <b className='pageContent-section-title'>Internships</b>

                    {/* all internships */}
                    <div className='internships subsectionIndentleft'>

                        <div className='internshipInfo'>
                            <span className='time'>[ Sept, 2023 - Ongoing ]</span>
                            <span className='title'>Three js Developer Intern (Three.js)  | Zigy Prints.</span>
                        </div>

                        <div className='internshipInfo'>
                            <span className='time'>[ Dec, 2022 - Jan, 2022 ]</span>
                            <span className='title'> Frontend Developer | Areksoft.</span>
                        </div>

                    </div>

                    <b className='pageContent-section-title'>Other Responsibilities</b>

                    {/* all internships */}
                    <div className='internships subsectionIndentleft'>

                        <div className='internshipInfo'>
                            <span>[ 2023 - 2024 ]</span>
                            <span>Technical Head at ACM Student Chapter DYPIEMR.</span>
                        </div>

                        <div className='internshipInfo'>
                            <span>[ 2023 - 2024 ]</span>
                            <span>Web Developer at TEDX DYPEC, Akurdi.</span>
                        </div>

                        <div className='internshipInfo'>
                            <span>[ 2023 - 2024 ]</span>
                            <span>Web Development Head at Novus Neurons.</span>
                        </div>

                        <div className='internshipInfo'>
                            <span>[ 2022 - 2023 ]</span>
                            <span>Jt. Web Development Head at CSI DYPIEMR.</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
