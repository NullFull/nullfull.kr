import fetch from 'node-fetch'
import {parse} from 'node-html-parser'


const BASE_URL = 'https://m.facebook.com/'


const parseEvent = async path => {
    const response = await fetch(BASE_URL + path)
    const html = await response.text()
    const doc = parse(html)
    const summary = doc.querySelector('#event_summary')
    const tables = summary.querySelectorAll('table')
    const [date, place] = tables.map(table => {
        const cells = table.querySelectorAll('td')
        const valueEl = cells[1].querySelector('dt')
        return valueEl.text
    })

    return new Promise((resolve, reject) => {
        resolve({date, place})
    })
}


const parsePages = async path => {
    const response = await fetch(BASE_URL + path)
    const html = await response.text()
    const doc = parse(html)
    const links = doc.querySelectorAll('a')
    const eventLinks = links.filter(link => link.attributes.href && link.attributes.href.startsWith('/events/'))
    const events = await Promise.all(eventLinks.map(link => parseEvent(link.attributes.href)))
    return new Promise(((resolve, reject) => {
        resolve(events)
    }))
}


export async function handler (event, context, callback) {
    const events = await parsePages('/groupnullfull/events/')

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            events
        })
    })
}
