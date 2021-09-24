// default state is set equal to array instead of object to avoid nesting
export const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USER':
            console.log("inside fetch_user reducer", action.payload)
            return action.payload
        case 'CREATE_USER':
            // debugger
            console.log("inside create_user reducer", action.payload)
            return action.payload
        default: 
            return state
    }
}