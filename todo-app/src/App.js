// Import React and necessary components
import React from 'react';
import AddTodo from './Components/AddTodo'; // Import the AddTodo component
import TodoList from './Components/TodoList'; // Import the TodoList component
import Heading from './Components/Heading'; // Import the Heading component
import './App.css'; // Import the CSS file for styling

// Define the App component
const App = () => {
  // Define styles for the grid layout
  var grid = {
    display: 'grid', // Use CSS grid for layout
    gridTemplateColumns: '1fr 50fr 1fr', /* Three columns, middle column wider */
    gap: '20px', /* Gap between grid items */
  }

  // Adjust grid layout for smaller screens
  if (window.innerWidth <= 768) {
    grid.gridTemplateColumns = '1fr'; // Only one column for smaller screens
  }

  // Return JSX for the App component
  return (
    <div style={grid}>
      {/* Empty div for spacing */}
      <div></div>
      {/* Main content area */}
      <div>
        {/* Display the heading with animation */}
        <Heading />
        {/* Component to add todos */}
        <AddTodo />
        {/* Component to view todos in a list */}
        <TodoList />
      </div>
      {/* Empty div for spacing */}
      <div></div>
    </div>
  );
};

// Export the App component as default
export default App;
