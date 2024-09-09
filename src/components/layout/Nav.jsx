import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Nav.scss'

export default function Nav({ currentTab }) {

    const [selectedTab, setSelectedTab] = useState(currentTab);

    const tabs = [
        {
            name: "Overview",
            to: "/",
        },
        {
            name: "Projects",
            to: "/projects",
        },
        {
            name: "Experience",
            to: "/experience",
        }
    ]

    return (
        <div className="nav-container">
            <nav>
                <ol>
                    {
                        tabs.map(tab =>
                            <div className={`nav-tab ${tab.name == selectedTab ? "selected" : ""}`}>
                                <a href={tab.to}>{tab.name}</a>
                            </div>
                        )
                    }
                </ol>
            </nav>
        </div>
    )
}