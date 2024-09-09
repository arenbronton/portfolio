import Socials from '../containers/Socials';
import './Hero.scss'

export default function Hero() {

    const frontendSkills = [
        {
            name: "React.js",
            icon: "icons/react.svg",
        },
        {
            name: "Sass",
            icon: "icons/sass.svg",
        },
        {
            name: "Javascript",
            icon: "icons/js.svg",
        },
        {
            name: "Typescript",
            icon: "icons/typescript.svg",
        },
    ];

    const backendSkills = [
        {
            name: "Express.js",
            icon: "icons/node.svg",
        },
        {
            name: "Axum",
            icon: "icons/rust.svg",
        },
        {
            name: "PHP",
            icon: "icons/php.svg",
        },
        {
            name: "Mongoose",
            icon: "icons/mongo.svg",
        },
    ];

    return (
        <div className="hero-container">
            <div className="hero">
                <section className="hero-title">
                    <h1>Aren Bronton</h1>
                    <p><span style={{color: "salmon"}}>Full Stack Software Engineer</span> | <span style={{color: "cornsilk"}}>Florida, USA</span> <img src="/icons/decorative/palm.svg" alt="" /></p>
                    <Socials />
                </section>
                <aside className="techstack-container">
                    <div className="techstack">
                        <h1>Frontend</h1>
                        <ol>
                            {
                                frontendSkills.map(skill =>
                                    <div>
                                        <h3>{skill.name}</h3>
                                        <img src={skill.icon} alt="" />
                                    </div>
                                )
                            }
                        </ol>
                    </div>
                    <div className="techstack">
                        <h1>Backend</h1>
                        <ol>
                            {
                                backendSkills.map(skill =>
                                    <div>
                                        <h3>{skill.name}</h3>
                                        <img src={skill.icon} alt="" />
                                    </div>
                                )
                            }
                        </ol>
                    </div>
                </aside>
            </div>
        </div>
    )
}