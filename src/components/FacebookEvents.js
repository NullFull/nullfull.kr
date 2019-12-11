import React from 'react'


const FacebookEvents = () => {
    const [events, setEvents] = React.useState([{}])

    const fetchEvents = async () => {
        const response = await fetch(`/.netlify/functions/fbEvents`)
        const data = await response.json()
        setEvents(data.events)
    }

    React.useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div>
            {events.map((event, i) => (
                <li key={`event-${i}`}>
                    <h3><a href={event.url}>{event.title}</a></h3>
                    <p>{event.month} {event.day}</p>
                    <p>{event.time}</p>
                    <p>{event.place}</p>
                </li>
            ))}
        </div>
    )
}


export default FacebookEvents
