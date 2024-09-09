import React from 'react'

import './Timeline.scss'

export default function Timeline() {

    const timeline = [
        {
            item: "AP Computer Science Principles",
            desc: "High School",
            date: "Aug 2022 - May 2023",
        },
        {
            item: "AP Computer Science A",
            desc: "High School",
            date: "Aug 2023 - May 2024",
        },
        {
            item: "Computer Science BA",
            desc: "University of North Florida",
            date: "Jan 2025 - Dec 2028",
        },
    ];

    return (
        <>
            <div className="timeline">
                {
                    timeline.map(entry =>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <p>{entry.item}</p>
                                <h5>{entry.desc}</h5>
                                <label>{entry.date}</label>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}