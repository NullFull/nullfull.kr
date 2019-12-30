import React from 'react'


const useFacebookEvents = () => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)
    const [events, setEvents] = React.useState([])

    const fetchEvents = async () => {
        try {
            const response = await fetch(`/.netlify/functions/fbEvents`)
            const data = await response.json()
            setEvents(data.events)
        } catch (e) {
            setHasError(true)
        } finally {
            setIsLoaded(true)
        }
    }

    return [events, isLoaded, hasError, fetchEvents]
}

const FacebookEvents = () => {
    const [events, isLoaded, hasError, fetchEvents] = useFacebookEvents()

    React.useEffect(() => {
        fetchEvents()
    }, [])

    if (!isLoaded) {
        return <div>로딩중</div>
    }

    return (
        <div className="fb-event">
            {hasError ?
                <p>앗 에러가</p>
                :
                <ul>
                    {events.map((event, i) => (
                        <li key={`event-${i}`}>
                            <h3><a href={event.url}>{event.title}</a></h3>
                            <p>{event.month} {event.day}</p>
                            <p>{event.time}</p>
                            <p>{event.place}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}


export default FacebookEvents
