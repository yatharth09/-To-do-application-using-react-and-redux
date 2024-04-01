// Retrieve todos from local storage or initialize as an empty array
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

// Define the todoReducer function which takes state and action as parameters
const todoReducer = (state = initialState, action) => {
  let newState; // Declare a variable to store the new state after each action

  // Switch statement to handle different action types
  switch (action.type) {
    // Case for adding a new todo
    case 'ADD_TODO':
      // Create a new todo object with current timestamp, text from action payload, and default completed status
      const newTodo = {
        id: Date.now(), // Generate unique id using current timestamp
        text: action.payload, // Get todo text from action payload
        completed: false // Default completion status is false
      };
      // Create a new state by adding the new todo to the existing state
      newState = [...state, newTodo];
      // Update local storage with the new state
      localStorage.setItem('todos', JSON.stringify(newState));
      // Return the new state
      return newState;

    // Case for toggling todo completion status
    case 'TOGGLE_TODO':
      // Map through todos and toggle completion status of the todo with matching id
      newState = state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      // Update local storage with the new state
      localStorage.setItem('todos', JSON.stringify(newState));
      // Return the new state
      return newState;

    // Case for deleting a todo
    case 'DELETE_TODO':
      // Filter out the todo with matching id to delete it
      newState = state.filter(todo => todo.id !== action.payload);
      // Update local storage with the new state
      localStorage.setItem('todos', JSON.stringify(newState));
      // Return the new state
      return newState;

    // Default case if action type doesn't match any case
    default:
      // Return the current state unchanged
      return state;
  }
};

// Export the todoReducer function as default
export default todoReducer;
