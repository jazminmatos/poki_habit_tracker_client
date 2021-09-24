export const createUser = user => {
    const configObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'CREATE_USER', payload: user}))
        .catch((error) => {console.error('Error:', error)})
    }
}