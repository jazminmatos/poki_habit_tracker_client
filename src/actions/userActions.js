export const createUser = user => {
    fetch('http://127.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(resp => resp.json())
        .then(user => dispatchEvent({ type: 'CREATE_USER', payload: user}))
}