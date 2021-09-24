export const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return action.payload
        case 'FIND_OR_CREATE_USER':
            return console.log(action.payload)
        default: 
            return state
    }
}