import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import { projects } from "../projects";
import Project from "../components/containers/Project";

import './ProjectsPage.scss'

export default function ProjectsPage() {

    const { tool } = useParams();
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        console.log(tool)
        let projectsUpdated = [];
        for (let p = 0; p < projects.length; p++) {
            for (let t = 0; t < projects[p].tools.length; t++) {
                if (projects[p].tools[t].name.toLowerCase() === tool.toLowerCase()) {
                    projectsUpdated.push(projects[p]);
                }
            }
        }
        setFilteredProjects(projectsUpdated);
    }, [tool]);

    return (
        <>
            <div className="projects-page">
                <div className="projects-page-header">
                    <h1>{capitalize(tool)} Projects</h1>
                </div>

                {filteredProjects.length ?
                    (
                        <div className="projects-list">
                            {
                                filteredProjects.map(project =>
                                    <Project project={project} />
                                )
                            }
                        </div>
                    ) : (
                        <b>No projects using {tool} have been uploaded yet.</b>
                    )
                }
            </div>
            <button className="back-button" onClick={() => window.location.href="/"}>
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
        </>
    )
}

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1);
}