import React from 'react'
import "../styles/SkillPg.css"
import skillPgimg from "../images/skillPgimg.png"

function SkillComp(props) {
    return <div className='SkillComp'>
        <div className='SkillComp-heading'>
            <div className="skillcompHline"></div>
            <h1>{props.heading}</h1>
        </div>
        <div className='SkillComp-desc'>
            {props.desc}
        </div>
    </div>
}

export default function SkillPg() {
    return (
        <div id='SkillPg'>
            <div id='SkillPg-mainImg'>
                <img src={skillPgimg} alt='unavailable' />
            </div>
            <div id='SkillPg-skillBox-container'>
                <div id='SkillPg-skillBox'>
                    <vline id="SkillPg-skillBox-verticleBar"></vline>
                    <div id="SkillPg-skillBox-content">
                        <SkillComp
                            desc="Starting with web development, I learned HTML and CSS, enabling me to create responsive web applications with structured content and visually appealing layouts. These skills are fundamental for any web developer to present information effectively."
                            heading="HTML/CSS" />
                        <SkillComp
                            desc="With JavaScript, I learned how to create dynamic websites, adding interactivity, animations, and user-friendly features. It made my web applications more engaging and inclusive for users, enhancing the overall user experience."
                            heading="JavaScript" />
                        <SkillComp
                            desc="TypeScript! It enhances JavaScript development with static typing, early error catching, and improved code maintainability."
                            heading="Typescript" />
                        <SkillComp
                            desc="Learning ReactJS allowed me to build scalable and interactive user interfaces through a component-based architecture. It significantly improved the efficiency of my web development projects and facilitated code reusability."
                            heading="ReactJS" />
                        <SkillComp
                            desc="Understanding Redux helped me manage complex application states in React-based projects. With centralized state management, I could create scalable applications that were easier to maintain and debug."
                            heading="Redux" />
                        <SkillComp
                            desc="Django taught me how to develop robust and secure web applications using Python. Its built-in features for authentication, routing, and database management streamlined the development process, making it a powerful backend framework."
                            heading="Django" />
                        <SkillComp
                            desc="By mastering Bootstrap, I could rapidly build mobile-first, responsive web layouts. Its pre-designed components saved time and effort, providing a solid foundation for crafting visually appealing websites."
                            heading="Bootstrap" />
                        <SkillComp
                            desc="Using Chakra UI, I could implement accessible and themed React components, ensuring a consistent and polished user interface experience across my projects"
                            heading="Chakra UI" />
                    </div>
                </div>
            </div>
        </div>
    )
}
