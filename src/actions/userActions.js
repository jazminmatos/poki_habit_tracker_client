export const fetchUser = user => {
    return dispatch => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then((json) => {
            // Iterate through JSON object
            // Check if user exists in JSON object
            const foundUser = json.find(obj => obj.name === user.name)
            // if user exists in backend
            if (foundUser !== undefined) {
                // console.log("hooray, we found them")
                dispatch({ type: 'FETCH_USER', payload: foundUser})
            } else {
                console.log("send a POST fetch request")
                createUser(user)
            }
        })
    }
}

export const createUser = user => {
    debugger
    const configObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return dispatch => {
        fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'CREATE_USER', payload: user}))
    }
}