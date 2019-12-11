import React from 'react'


const GitHubRepos = () => {
    const [repos, setRepos] = React.useState([])

    const fetchRepos = async () => {
        const response = await fetch(`https://api.github.com/orgs/nullfull/repos`)
        const data = await response.json()
        setRepos(data)
    }
    React.useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <div>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>
                            <h3>{repo.name}</h3>
                        </a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default GitHubRepos
