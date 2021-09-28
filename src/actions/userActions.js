export const CreateUser = user => {
    const configObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    debugger
    return dispatch => {
        fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'FIND_OR_CREATE_USER', payload: user}))
        .catch((error) => {console.error('Error:', error)})
    }
}

export const fetchUser = user => {
    //debugger
    return dispatch => {
        dispatch({ type: 'LOADING_USER' })
        fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(users => {
            dispatch({ type: 'FETCH_USER', payload: users.find(u => u.name === user)})
        })
        .catch((error) => {console.error('Error:', error)})
    }
}