// default state is set equal to array instead of object to avoid nesting
export const usersReducer = (state = {users: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_USER':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        case 'FETCH_USER':
            console.log("inside FETCH_USER:", action.payload)
            //debugger
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        case 'CREATE_USER':
            console.log("inside FIND_OR_CREATE_USER reducer", action.payload)
            //debugger
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        default: 
            return state
    }
}