// default state is set equal to array instead of object to avoid nesting
export const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FIND_OR_CREATE_USER':
            console.log("inside FIND_OR_CREATE_USER reducer", action.payload)
            return [...state, action.payload] // need to check whether state exists, if it does, don't add it in
        default: 
            return state
    }
}