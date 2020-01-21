import React from 'react'


const SlackStatistics = () => {
    const [isLoaded, setLoaded] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)
    const [statistics, setStatistics] = React.useState({})

    const fetchStatistics = async () => {
        try {
            const response = await fetch(`/.netlify/functions/slackStatistics`)
            const data = await response.json()
            setStatistics(data)
        } catch (e) {
            setHasError(true)
        } finally {
            setLoaded(true)
        }
    }

    React.useEffect(() => {
        fetchStatistics()
    }, [])

    if (!isLoaded) {
        return <div>로딩...</div>
    }

    if (hasError) {
        return <div>에러ㅠ</div>
    }

    return (
        <dl>
            <dt>오늘 떠듬:</dt>
            <dd>{statistics['on:today']}</dd>
            <dt>어제 떠듬:</dt>
            <dd>{statistics['on:yesterday']}</dd>
        </dl>
    )
}

export default SlackStatistics
