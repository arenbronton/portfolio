import GitHubCard from '../containers/GithubCard'
import './Extra.scss'

export default function Extra() {

    const repos = [
        'todoRust',
        'Audio-Player',
    ];

    const langColors = {
        'Rust': '#dea584',
        'Java': '#b07219',
    }

    return (
        <div className="extra-container page-section">
            <div className="extra">
                <header>
                    <h1>Extra</h1>
                </header>
                <main>
                    <h3>Systems Development</h3>
                    <b>Some systems projects that I have made</b>
                    <div className="repos">
                        {
                            repos.map(repo =>
                                <GitHubCard repo={repo} langColors={langColors} />
                            )
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}