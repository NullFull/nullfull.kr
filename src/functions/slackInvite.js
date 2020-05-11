import fetch from 'node-fetch'


export async function handler (event, context, callback) {
    const body = JSON.parse(event.body)
    const { email } = body
    const token = process.env.SLACK_TOKEN
    const url = `https://nullfull.slack.com/api/users.admin.invite`

    const params = new URLSearchParams()
    params.append('token', token)
    params.append('email', email)
    params.append('set_active', true)

    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: params
    })
    const data = await response.json()

    callback(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(data)
    })
}
