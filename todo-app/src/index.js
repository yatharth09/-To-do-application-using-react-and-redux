// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import Provider component from react-redux for Redux store integration
import { Provider } from 'react-redux';

// Import configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the root component of the application
import App from './App';

// Import the root reducer of the application
import rootReducer from './reducers';

// Create the Redux store using configureStore function from Redux Toolkit
const store = configureStore({ reducer: rootReducer });

// Render the application inside the Redux Provider to provide access to the Redux store
ReactDOM.render(
  <Provider store={store}> {/* Provider component wraps the App component */}
    <App /> {/* Root component of the application */}
  </Provider>, {/* Closing Provider tag */}
  ,document.getElementById('root') // Render the application inside the HTML element with the id 'root'
);

