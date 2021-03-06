import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';

// create keys inside of store that will return value of state, set by the individual reducers
// every time I refresh the page, debugger gets hit
export const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;
