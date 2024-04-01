// Define a function called 'addTodo' that takes 'text' as a parameter
export const addTodo = text => ({
  // Return an object with a 'type' property set to 'ADD_TODO' and a 'payload' property set to the provided 'text'
  type: 'ADD_TODO',
  payload: text
});

// Define a function called 'toggleTodo' that takes 'id' as a parameter
export const toggleTodo = id => ({
  // Return an object with a 'type' property set to 'TOGGLE_TODO' and a 'payload' property set to the provided 'id'
  type: 'TOGGLE_TODO',
  payload: id
});

// Define a function called 'deleteTodo' that takes 'id' as a parameter
export const deleteTodo = id => ({
  // Return an object with a 'type' property set to 'DELETE_TODO' and a 'payload' property set to the provided 'id'
  type: 'DELETE_TODO',
  payload: id
});