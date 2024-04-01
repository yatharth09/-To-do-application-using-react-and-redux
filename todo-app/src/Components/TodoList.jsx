// Import necessary dependencies from React and Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/actions'; // Import the toggleTodo and deleteTodo action creators
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component from FontAwesome
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import trash icon from FontAwesome
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import check and times icons from FontAwesome

// Define the TodoList component
const TodoList = () => {
  // Access todos from the Redux store
  const todos = useSelector(state => state.todos);
  // Initialize useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle toggling todo completion status
  const handleToggleTodo = id => {
    dispatch(toggleTodo(id)); // Dispatch the toggleTodo action with the provided id
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id)); // Dispatch the deleteTodo action with the provided id
  };

  // Styles for the container
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  // Styles for toggle button
  var toggleStyles = {
    padding: '1.5rem',
    backgroundColor: '#32c563',
    cursor: 'pointer',
    margin: '0',
    display: 'inline-block',
    border: 'none',
    outline: 'none',
    width: '6rem'
  }

  // Styles for delete button
  var deleteStyles = {
    padding: '1.5rem',
    backgroundColor: '#a095af',
    borderTopRightRadius: '36%',
    borderBottomRightRadius: '36%',
    cursor: 'pointer',
    margin: '0',
    display: 'inline-block',
    border: 'none',
    outline: 'none',
    width: '6rem'
  }

  // Adjust styles for smaller screens
  if(window.innerWidth <= 768){
    toggleStyles.padding = '0.5rem'
    deleteStyles.padding = '0.5rem'
    deleteStyles.borderBottomRightRadius = '0'
    deleteStyles.borderTopRightRadius = '0'
    deleteStyles.margin = '0.5rem 0 0.5rem 0.5rem'
    toggleStyles.margin  = '0.5rem 0.5rem 0.5rem 0rem'
  }

  // Return JSX for the TodoList component
  return (
    <div style={containerStyles}>
      <ul style={{minWidth: '30%', listStyle: 'none'}}>
        {/* Map through todos and render each todo */}
        {todos.map(todo => (
          <li
            key={todo.id}
            style={
              // Conditional styles based on screen width
              window.innerWidth > 768
                ? {
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    margin: '0.5rem',
                    paddingLeft: '1.5rem',
                    background: 'white',
                    color: 'black',
                    fontSize: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: '0.5s',
                    borderRadius: '2rem',
                    width: '80vw',
                    opacity: todo.completed ? '0.5' : '1',
                    whiteSpace: 'nowrap',
                  }
                : {
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    display: 'block',
                    margin: '0.5rem',
                    paddingLeft: '1.5rem',
                    background: 'white',
                    color: 'black',
                    fontSize: '1rem',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: '0.5s',
                    borderRadius: '1rem',
                    width: '80vw',
                    opacity: todo.completed ? '0.5' : '1',
                  }
            }
          >
            {/* Render todo text */}
            <span style={{fontSize: "1.5rem", whiteSpace: 'normal', display: 'inline-block'}}>{todo.text}</span>
            {/* Buttons to toggle and delete todos */}
            <div style={{position: 'relative'}}>
              {/* Toggle button */}
              <button style={toggleStyles} onClick={() => handleToggleTodo(todo.id)}>
                {/* Show check or cross icon based on todo completion status */}
                {todo.completed ? <FontAwesomeIcon icon={faTimes} style={{fontSize: '1.5rem'}} /> : <FontAwesomeIcon icon={faCheck} style={{fontSize: '1.5rem'}} />}
              </button>
              {/* Delete button */}
              <button style={deleteStyles} onClick={() => handleDeleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} style={{fontSize: '1.5rem'}} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Export the TodoList component as default
