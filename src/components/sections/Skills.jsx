import './Skills.scss'

export default function Skills() {

    const languages = [
        {
            name: "Javascript",
            icon: "/icons/js.svg",
            linkable: true,
        },
        {
            name: "Typescript",
            icon: "/icons/typescript.svg",
            linkable: true,
        },
        {
            name: "Python",
            icon: "/icons/python.svg",
            linkable: true,
        },
        {
            name: "C",
            icon: "/icons/c.svg",
            linkable: true,
        },
        {
            name: "Rust",
            icon: "/icons/rust.svg",
            linkable: true,
        },
        {
            name: "Ruby",
            icon: "/icons/ruby.svg",
            linkable: true,
        },
        {
            name: "Java",
            icon: "/icons/java.svg",
            linkable: true,
        },
    ];

    const frameworks = [
        {
            name: "React",
            icon: "/icons/react.svg",
            linkable: true,
        },
        {
            name: "Angular",
            icon: "/icons/angular.svg",
            linkable: true,
        },
        {
            name: "Svelte",
            icon: "/icons/svelte.svg",
            linkable: true,
        },
        {
            name: "Mongoose",
            icon: "/icons/mongo.svg",
            linkable: true,
        },
        {
            name: "PostgreSQL",
            icon: "/icons/postgre.svg",
            linkable: true,
        },
        {
            name: "Prisma",
            icon: "/icons/prisma.svg",
            linkable: true,
        },
        {
            name: "Firebase",
            icon: "/icons/firebase.svg",
            linkable: true,
        },
    ]

    const devops = [
        {
            name: "Docker",
            icon: "/icons/docker.svg",
            linkable: true,
        },
        {
            name: "AWS",
            icon: "/icons/aws.svg",
            linkable: true,
        },
        {
            name: "Git",
            icon: "/icons/git.svg",
            linkable: false,
        },
    ];

    return (
        <div className="page-section">
            <div className="skills">
                <header>
                    <h1>Skills</h1>
                    <b>Hands on experience with the following:</b>
                </header>
                <div className="skills-container">
                    <div className="skills-subcontainer">
                        <h3>Languages</h3>
                        <div className="skills-row">
                            {
                                languages.map(lang =>
                                    <div className="skill">
                                        <div className="tooltip-container">
                                            <a href={`/projects/${lang.name.toLowerCase()}`}>
                                                <img src={lang.icon} />
                                            </a>
                                            <div className="tooltip">
                                                <b>{lang.name}</b>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="skills-subcontainer">
                        <h3>Frameworks & Libraries</h3>
                        <div className="skills-row">
                            {
                                frameworks.map(framework =>
                                    <div className="skill">
                                        <div className="tooltip-container">
                                            <a href={`/projects/${framework.name.toLowerCase()}`}>
                                                <img src={framework.icon} />
                                            </a>
                                            <div className="tooltip">
                                                <b>{framework.name}</b>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="skills-subcontainer">
                        <h3>DevOps</h3>
                        <div className="skills-row">
                            {
                                devops.map(devop =>
                                    <div className="skill">
                                        <div className="tooltip-container">
                                            {devop.linkable ?
                                                (
                                                    <a href={`/projects/${devop.name.toLowerCase()}`}>
                                                        <img src={devop.icon} />
                                                    </a>
                                                ) : (
                                                    <img src={devop.icon} />
                                                )
                                            }
                                            <div className="tooltip">
                                                <b>{devop.name}</b>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}