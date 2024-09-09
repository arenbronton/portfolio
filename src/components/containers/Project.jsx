import React, { useEffect, useRef } from 'react'

import './Project.scss'

export default function Project({ project }) {

    const containerRef = useRef(null);
    useEffect(() => {
        containerRef.current?.style.setProperty('--project-color', project.color + "20");
    }, [containerRef])

    return (
        <div className="project-container" ref={containerRef}>
            <header>
                <h1 style={{color: project.color}}>{project.name}</h1>
            </header>
            <main>
                <p>{project.desc}</p>
            </main>
            <footer>
                <div className="project-date">
                    <time>{project.date}</time>
                </div>
                <div className="tools-list">
                    {
                        project.tools.map(tool =>
                            <div className="tooltip-container tool-icon">
                                <img src={tool.icon} />
                                <h4 className="tooltip">{tool.name}</h4>
                            </div>
                        )
                    }
                    {project.visit &&
                        <a target="_blank" rel="noopener noreferrer" href={project.visit} className="visit-button tooltip-container">
                            <button>Visit</button>
                            <h4 className="tooltip">{project.visit}</h4>
                        </a>
                    }
                </div>
            </footer>
            {/* <div className="project-img">
                <img src={project.cover} />
            </div> */}
        </div>
    )
}