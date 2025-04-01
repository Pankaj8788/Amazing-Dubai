// import { Container } from '@mui/material'
// import React from 'react'

// const Testing = () => {
//   return (
//     <Container sx={{ mt: 44,ml:44, }}>
//       <button onclick="showMessage()">Click Me</button>
// <script>
//   function showMessage() {
//     alert("Button Clicked!");
//   }
// </script> 
//     </Container>
//   )
// }

// export default Testing

import { Container, Button } from "@mui/material";
import React from "react";

const Testing = () => {
  // Define the function inside the component
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <Container sx={{ mt: 44, ml: 44 }}>
      <Button variant="contained" color="primary" onClick={showMessage}>
        Click Me
      </Button>
    </Container>
  );
};

export default Testing;

