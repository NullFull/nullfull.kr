import React from 'react'


const SlackInvite = () => {
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const invite = async email => {
        setLoading(true)
        try {
            const response = await fetch('/.netlify/functions/slackInvite', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email})
            })
            const data = await response.json()

            if (data.ok) {
                alert(`${email}로 초대 드렸습니다.`)
                setEmail('')
            } else {
                alert('무언가 잘못 되었어요')
            }
        } catch (e) {
            // TODO
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div>
                <span>잠시만 기다려주세요</span>
            </div>
        )
    }

    return (
        <div>
            <input placeholder="E-MAIL" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={() => invite(email)}>초대</button>
        </div>
    )
}


export default SlackInvite
