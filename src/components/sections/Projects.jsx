import React from 'react'
import { useState, useEffect } from 'react'

import './Projects.scss'
import Project from '../containers/Project';

import { projects } from '../../projects'

export default function Projects() {

    return (
        <div className="projects-container page-section">
            <div className="projects">
                <h1>Projects</h1>

                <div className="projects-grid">
                    {
                        projects.map(project =>
                            <Project project={project} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}