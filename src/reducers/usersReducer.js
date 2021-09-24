export const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return console.log("inside fetch_user reducer", action.payload)
        case 'CREATE_USER':
            return console.log("inside reducer", action.payload)
        default: 
            return state
    }
}