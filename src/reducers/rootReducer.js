import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';

// create keys inside of store that will return value of state, set by the individual reducers
export const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;
