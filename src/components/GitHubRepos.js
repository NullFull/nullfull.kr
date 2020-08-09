import React from 'react'


const GitHubRepos = () => {
    const [repos, setRepos] = React.useState([])

    const getDate = dateString => new Date(dateString).getTime()

    const fetchRepos = async () => {
        const response = await fetch(`https://api.github.com/orgs/nullfull/repos`)
        const data = await response.json()
        data.sort((a, b) => b['stargazers_count'] - a['stargazers_count'] || getDate(b['updated_at']) - getDate(a['updated_at']))
        setRepos(data)
    }

    React.useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <div className="github-repos">
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
