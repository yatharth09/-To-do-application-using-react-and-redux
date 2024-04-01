// Import React and necessary hooks from React
import React from 'react'
import { useEffect, useRef } from 'react'; 
import gsap from 'gsap'; // Import the GSAP animation library
import { fontSize } from '@mui/system'; // Import fontSize from Material-UI

// Define the Heading component
const Heading = () => {

    // Create a ref to store the component element for GSAP animation
    const component = useRef(null)
    
    // Effect hook to animate the component using GSAP
    useEffect(() => {
        // Animation timeline using GSAP
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.fromTo('.name-animation', {
                x: -100, opacity: 0, rotate: -10
            },
            {
                x:0, opacity:1, rotate:0,
                ease: "elastic.out(1, 0.3)",
                duration: 1,
                transformOrigin: 'left top',
                delay: 0.5,
                stagger: {
                    each: 0.1,
                    from: 'random',
                },
            });
        }, component)

        // Revert the animation when the component is unmounted
        return () => ctx.revert();

    },[]);

    // Function to render each letter of the heading with animation
    const render = (name, key) => {
        if(!name) return;
        return name.split('').map((letter, index) => (
            <span key={index} className={`name-animation name-animation-${key}`}>
                {letter}
            </span>
        ))

    }

    // Define styles for the heading based on screen width
    let headingStyles;
    if (window.innerWidth <= 768) {
        headingStyles = {
            fontSize: '3rem',
            marginBottom:'0.5rem',
            minHeight: '5vh',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
      }else{
        headingStyles = {
            fontSize: '4rem', 
            marginBottom: '1rem',
            minHeight: '20vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }
      }

  // Return the JSX for the Heading component
  return (
    <div style={headingStyles} ref={component} aria-label='Todo App'>
        {/* Render each letter of the heading with animation */}
        <span style={{fontFamily: '"Lucida Console", "Courier New", monospace'}}>
            {render('My To Do List', 'first')}
        </span>
    </div>
  )
}

export default Heading // Export the Heading component as default
