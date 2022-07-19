const endpoint = "http://localhost:5000"

export default function loginService ({ email }) {
    return fetch (`${endpoint}/login`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email}),
    }).then(res => {
        if (!res.ok) throw new Error('Error en la respuesta')
        return res.json()
    }).then(res => {
        const { email } =res
        return email
    })
}