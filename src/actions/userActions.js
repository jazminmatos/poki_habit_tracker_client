export const findOrCreateUser = user => {
    return dispatch => {
        fetch('http://127.0.1:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(user => dispatchEvent({ type: 'FIND_OR_CREATE_USER', payload: user}))
    }
}