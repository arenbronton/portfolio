import React, { useState, useRef } from 'react';

import './About.scss'

export default function About() {

    return (
        <div className="about-container page-section">
            <div className="about">
                <header>
                    <h1>About</h1>
                </header>
                <div className="about-text">
                    <p>
                        <em>Computer Science Major</em> with 6 years of hands-on Software Development. Proficient in <em>HTML, CSS, JS, React, Express.js, Axum,
                        </em> and <em>Mongoose</em>.
                    </p>
                </div>
            </div>
        </div>
    )
}