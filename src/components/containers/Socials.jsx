import React from 'react'

import './Socials.scss'

export default function Socials() {

    const socials = [
        {
            name: "Github",
            link: "https://github.com/arenbronton",
            icon: "/icons/socials/github.svg"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/arenbronton",
            icon: "/icons/socials/linkedin.svg"
        },
    ]

    return (
        <div className="socials-container">
            <div className="socials">
                <ol>
                    {
                        socials.map(social =>
                            <div className="social-link">
                                <div className="tooltip-container">
                                    <a target="_blank" rel="noopener noreferrer" href={social.link}>
                                        <img src={social.icon} className="icon" />
                                    </a>
                                    <div className="tooltip">
                                        <p>{social.name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </ol>
            </div>
        </div>
    )
}