import fetch from 'node-fetch'
import {parse} from 'node-html-parser'


export async function handler (event, context, callback) {
    const response = await fetch('https://iphone.facebook.com/groupnullfull/events?locale=ko_KR')
    const html = await response.text()
    const doc = parse(html)
    const upcoming = doc.querySelectorAll('._5zma ._55ws._5cqg._5cqi')

    const events = upcoming.map(event => {
        const path = event.querySelector('a').attributes.href
        const url = 'https://facebook.com' + path
        const title = event.querySelector('._592p').text
        const month = event.querySelector('._1e39').text
        const day = event.querySelector('._1e3a').text

        const infos = event.querySelectorAll('._52jc._5d19')
        const time = infos[0].text

        let data = {url, title, month, day, time}

        if (infos.length > 1) {
            data['place'] = infos[1].text
        }

        return data
    })

    callback(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            events: events
        })
    })
}
