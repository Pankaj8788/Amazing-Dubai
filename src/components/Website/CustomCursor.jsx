// import React, { useEffect } from 'react';

// const CustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.createElement("div");
//     cursor.classList.add("custom-cursor");
//     document.body.appendChild(cursor);

//     const moveCursor = (e) => {
//       cursor.style.left = `${e.pageX}px`;
//       cursor.style.top = `${e.pageY}px`;
//     };

//     window.addEventListener("mousemove", moveCursor);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       document.body.removeChild(cursor);
//     };
//   }, []);

//   return null;
// };

// // CSS styles (this will be applied globally)
// const style = `
//   .custom-cursor {
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     background-color: rgba(0, 0, 0, 0.5);
//     border-radius: 50%;
//     pointer-events: none;
//     transform: translate(-50%, -50%);
//     transition: width 0.1s, height 0.1s, box-shadow 0.2s;
//     box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
//   }

//   /* On hover of interactive elements, hide default cursor */
//   a:hover, button:hover, input:hover, textarea:hover {
//     cursor: none;
//   }
// `;

// const injectCSS = () => {
//   const styleElement = document.createElement('style');
//   styleElement.innerHTML = style;
//   document.head.appendChild(styleElement);
// };

// // Inject CSS when the component mounts
// injectCSS();

// export default CustomCursor;


import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

// CSS styles (this will be applied globally)
const style = `
  .custom-cursor {
    position: absolute;
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5));
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.15s, height 0.15s, box-shadow 0.2s ease-out, background 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
    animation: pulse 1.5s infinite ease-in-out;
  }

  /* Cursor grows and shrinks on hover */
  .custom-cursor:hover {
    width: 60px;
    height: 60px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 255, 255, 0.6);
  }

  /* Add dynamic cursor behavior for interactive elements */
  a:hover, button:hover, input:hover, textarea:hover {
    cursor: none;
  }

  /* Animation for a "pulsing" eye effect */
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 255, 255, 0.5);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
    }
  }
`;

const injectCSS = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = style;
  document.head.appendChild(styleElement);
};

// Inject CSS when the component mounts
injectCSS();

export default CustomCursor;
