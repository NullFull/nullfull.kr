import fetch from 'node-fetch'


export async function handler (event, context, callback) {
    const queries = ['on:today', 'on:yesterday']
    const promises = queries.map(async query => {
        const token = process.env.SLACK_TOKEN
        const url = `https://slack.com/api/search.messages?query=${query}&token=${token}`
        const response = await fetch(url)
        const data = await response.json()
        return {
            [query]: data['messages']['total']
        }
    })
    const results = await Promise.all(promises)

    callback(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(
            Object.assign({}, ...results)
        )
    })
}
