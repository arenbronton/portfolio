import React from 'react'

import './Experience.scss'
import Timeline from '../containers/Timeline'

export default function Experience() {

    return (
        <div className="experience-container page-section">
            <div className="experience">
                <header>
                    <h1>Experience</h1>
                </header>
                <main>
                    <p>
                        My frontend exprience consists of <em>React</em> development, vanilla <em>HTML/CSS/JS</em>, <em>Typescript</em>, and <em>Sass</em>.
                        I can write simple API backends with <em>Express</em> and <em>Node</em> with <em>Mongoose</em> and <em>Firebase</em>.
                        These skills come from thousands of hours of software development.
                    </p>
                    <Timeline />
                </main>
            </div>
        </div>
    )
}