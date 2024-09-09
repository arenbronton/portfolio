import { useEffect, useState } from "react"

import './GithubCard.scss'

export default function GitHubCard({ repo, langColors }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/arenbronton/${repo}`);

                if (!response.ok) {
                    console.log("Failed to fetch repo data:", repo);
                }

                const json = await response.json();
                setData(json);
            } catch (err) {
                console.log(err)
            }
        }

        fetchData();
    }, [repo]);

    return (
        <div className="gh-card-container">
            <div className="gh-card-header">
                <img src="/icons/decorative/repo.svg" alt="" />
                <a href={data?.svn_url} target="_blank">{data?.name}</a>
            </div>
            <div className="gh-card-body">
                <p>{data?.description}</p>
            </div>
            <div className="gh-card-footer">
                {data?.language &&
                    <div>
                        <div className="lang-color" style={{'--color': langColors[data.language]}}></div>
                        <p>{data.language}</p>
                    </div>
                }
                <div>
                    <img src="/icons/decorative/star.svg" alt="" />
                    <label>{data?.stargazers_count}</label>
                </div>
            </div>
        </div>
    )
}