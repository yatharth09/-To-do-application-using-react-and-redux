// Import the combineReducers function from Redux
import { combineReducers } from 'redux';
// Import the todoReducer from the todoReducer file
import todoReducer from './todoReducer';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  todos: todoReducer // Assign the todoReducer to the 'todos' slice of state
});

// Export the rootReducer as default
export default rootReducer;
