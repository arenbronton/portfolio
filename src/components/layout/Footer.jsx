import React from 'react'

import './Footer.scss'

export default function Footer() {

    const contacts = [
        {
            name: "arenbronton",
            icon: "/icons/socials/linkedin.svg",
            link: "https://linkedin.com/arenbronton",
        },
        {
            name: "arenbronton",
            icon: "/icons/socials/instagram.svg",
            link: "https://instagram.com/arenbronton",
        },
        {
            name: "arenbronton",
            icon: "/icons/socials/github.svg",
            link: "https://github.com/arenbronton",
        },
    ]

    const extra = [

    ]

    return (
        <footer className="footer-container">
            <div className="footer">
                <div className="contacts-list">
                    {
                        contacts.map(contact =>
                            <div>
                                <img src={contact.icon} />
                                {contact.link ?
                                    (
                                        <a href={contact.link} target="_blank">{contact.name}</a>
                                    ) : (
                                        <p>{contact.name}</p>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div>

                </div>
            </div>

            <div className="copyright">
                <label>Licensed under CC-BY-4.0</label>
            </div>
        </footer>
    )
}