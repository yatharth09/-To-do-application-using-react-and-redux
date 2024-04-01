// Import necessary dependencies from React and Redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/actions'; // Import the addTodo action creator

// Import additional hooks from React
import { useEffect, useRef } from 'react'; 
import gsap from 'gsap'; // Import the GSAP animation library

// Import the FontAwesomeIcon component and the faPlusCircle icon from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

// Define the AddTodo component
const AddTodo = () => {
  // Initialize the useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Define state variables for input value and hover state
  const [input, setInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle adding a new todo item
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input)); // Dispatch the addTodo action with the input value
      setInput(''); // Reset the input value
    }
  };

  // Ref to store the component element for GSAP animation
  const component = useRef(null);

  // Effect hook to animate the component using GSAP
  useEffect(() => {
    setTimeout(() => {
      // Animation timeline using GSAP
      let ctx = gsap.context(() => {
        const tl = gsap.timeline()
        tl.fromTo('.addtodo', {
          y:20,
          opacity:0,
          scale: 1.2
        },{
          opacity: 1,
          y:0,
          duration:1,
          scale: 1,
          ease: 'elastic.out(1, 0.3)',
        });
      }, component)

      // Revert the animation when the component is unmounted
      return () => ctx.revert();
    }, 2000);
  },[]);

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo(); // Call handleAddTodo function when Enter key is pressed
    }
  };

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true); // Set isHovered to true when mouse enters button
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false); // Set isHovered to false when mouse leaves button
  };

  // Styles for the container, input, button, and FontAwesome icon
  const styles = {
    minHeight: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const inputStyles = {
    padding: '0.5rem',
    paddingLeft: '1rem',
    fontSize: '1.8rem',
    border: 'none',
    background: 'white',
    borderRadius: '2rem',
    opacity: '0',
  }

  const buttonStyles = {
    padding: '0.5rem',
    paddingLeft: '1rem',
    fontSize: '1.8rem',
    border: 'none',
    color: isHovered? 'white':'rgb(255, 200, 0)',
    background: isHovered? 'rgb(255, 200, 0)': 'white',
    cursor: 'pointer',
    transition: 'all 0.3 ease',
    marginLeft: '0.5rem',
    borderRadius: '50%',
    opacity: '0',
  }

  const faPlusCircleStyles = {
    marginTop: '0.1rem',
    marginLeft: '-8px',
    fontSize: '2.8rem'
  }

  // Adjust styles for smaller screens
  if(window.innerWidth <= 768){
    inputStyles.fontSize = '1.2rem'
    buttonStyles.padding = '0.5rem'
  }

  // Return the JSX for the AddTodo component
  return (
    <div ref={component} style={styles} >
      <input
        className='addtodo'
        variant='standard'
        color='secondary'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add Task"
        style={inputStyles}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleAddTodo}
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='addtodo'
      >
        <FontAwesomeIcon style={faPlusCircleStyles} icon={faPlusCircle} />
      </button>
    </div>
  );
};

// Export the AddTodo component as default
export default AddTodo;