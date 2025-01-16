// import React, { useState, useEffect } from "react";
// import { Box, Typography, Container, Grid, Button, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import Flight_img from '../Assets/home_web/flight_black.gif'; // Your flight image
// import Boardingpass from '../Assets/home_web/boardingpass.png'; // Boarding pass image
// import Winsound from "../Assets/home_web/win_sound.mp3";
// import CoinLogo from "../Assets/home_web/coin_img1.png";
// import Win_Ticket from '../Assets/home_web/Win_Ticket.gif'
// import Win_Ticket2 from '../Assets/home_web/BookFlight.gif'



// const AboutUs = () => {
//   const theme = useTheme();

//   // Stepper state
//   const [activeStep, setActiveStep] = useState(0);
//   const [openDialog, setOpenDialog] = useState(false);
//   const steps = ["Get Your Target", "Complete the Task", "Earn Rewards", "View Reward"]; // Added 4th step

// // Play sound effect when the dialog opens
// useEffect(() => {
//   if (openDialog) {
//     const audio = new Audio(Winsound);
//     audio.play();
//   }
// }, [openDialog]);

//   // Handle next step
//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep(activeStep + 1);
//     } else {
//       setOpenDialog(true); // Open the dialog after completing all steps
//     }
//   };

//   // Handle back step
//   const handleBack = () => {
//     if (activeStep > 0) {
//       setActiveStep(activeStep - 1);
//     }
//   };

//   // Close the dialog
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   // Open dialog automatically when the last step is reached
//   useEffect(() => {
//     if (activeStep === steps.length - 1) {
//       setOpenDialog(true);
//     }
//   }, [activeStep, steps.length]);

//   return (
  
//     <Box
//   id="about-us-section"
//   sx={{
//     position: "relative",
//     backgroundColor: theme.palette.background.paper,
//     padding: 0, // Remove the padding to cover full screen
//     height: "100vh", // Make the section full screen
//     overflow: "hidden", // Ensure no content spills outside
//   }}
// >
//   {/* Full-Screen Background Image */}
//   <Box
//     sx={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundImage: `url(${CoinLogo})`,
//       backgroundSize: "cover", // Cover the whole screen with the image
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       opacity: 0.2, // Subtle watermark effect for the image
//       zIndex: 1,
//     }}
//   />
  
//   {/* Background Color Overlay */}
//   <Box
//     sx={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(156, 136, 136, 0.5)", // Semi-transparent black overlay
//       zIndex: 2,
//     }}
//   />

//   <Container
//     id="about-us-container"
//     sx={{
//       position: "relative",
//       zIndex: 3, // Ensure content appears above the overlays
//       height: "100%", // Ensure the container stretches to full height
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center", // Vertically center the content
//       textAlign: "center", // Center the text
//       color: theme.palette.text.primary,
//     }}
//   >
//     {/* Title Section */}
//     <Typography
//       id="about-us-title"
//       variant="h2"
//       sx={{
//         marginBottom: "2rem",
//         fontWeight: 700,
//         color: theme.palette.primary.main,
//         background: "linear-gradient(45deg,rgb(37, 31, 35),rgb(89, 86, 161),rgb(5, 15, 8))",
//         WebkitBackgroundClip: "text",
//         color: "transparent",
//       }}
//     >
//       About Us
//     </Typography>

//     <Grid container spacing={4} sx={{ justifyContent: "center" }}>
//       {/* Left Side Content */}
//       <Grid item xs={12} md={6} id="about-us-content">
//         <Typography
//           id="about-us-paragraph-1"
//           variant="h5"
//           paragraph
//           sx={{
//             lineHeight: 1.6,
//             background: "linear-gradient(45deg,rgb(241, 9, 9),rgb(54, 53, 97),rgb(12, 12, 12))",
//             WebkitBackgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           Welcome to **Amazing Dubai**, where you can **win flight tickets** and **exciting gifts** by completing targets. Our platform makes earning rewards simple and fun!
//         </Typography>

//         <Typography
//           id="about-us-paragraph-2"
//           variant="h6"
//           paragraph
//           sx={{
//             lineHeight: 1.6,
//             background: "linear-gradient(45deg,rgb(63, 55, 60),rgb(83, 82, 110),rgb(241, 9, 9))",
//             WebkitBackgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           Invest in our exclusive offers to grow your coins, and unlock rewards like **silver coins** for higher investments! Our system is designed to ensure you get maximum value for every milestone you achieve.
//         </Typography>

//         {/* Stepper */}
//         <Box sx={{ marginTop: 4 }}>
//           <Stepper
//             activeStep={activeStep}
//             alternativeLabel
//             sx={{
//               "& .MuiStepLabel-root .Mui-completed": {
//                 color: "#4caf50", // Green for completed steps
//               },
//               "& .MuiStepLabel-root .Mui-active": {
//                 color: "#ff9800", // Orange for active step
//               },
//               "& .MuiStepLabel-label": {
//                 color: "#ffffff", // White for the step label text
//               },
//               transition: "all 0.3s ease", // Animation for step transitions
//             }}
//           >
//             {steps.map((step, index) => (
//               <Step key={index}>
//                 <StepLabel>{step}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <Box sx={{ marginTop: 2 }}>
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{ marginRight: 2 }}
//               disabled={activeStep === steps.length - 1}
//             >
//               Next
//             </Button>
//             <Button
//               variant="contained"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               Back
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   </Container>

//   {/* Dialog for the Boarding Pass */}
//   <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
//   <DialogTitle
//    sx={{
//       fontWeight:'bold',
//       background: "linear-gradient(45deg,rgb(241, 9, 9),rgb(54, 53, 97),rgb(12, 12, 12))",
//       color:'#fff',
//   }}
//   >✈️Winning this flight ticket is just the start. Bon voyage!! Congrats! 🎉🎊"</DialogTitle>
//     <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
//       <img src={Win_Ticket2} alt="Boarding Pass" style={{ width: "100%", height: "auto" }} />
//     </DialogContent>
//     <DialogActions sx={{ justifyContent: "center" }}>
//       <Button variant="contained" onClick={handleCloseDialog}>Close</Button>
//     </DialogActions>
//   </Dialog>
// </Box>
//   );
// };

// export default AboutUs;


import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid, Button, Stepper, Step, StepLabel, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Flight_img from '../Assets/home_web/flight_black.gif'; // Your flight image
import Boardingpass from '../Assets/home_web/boardingpass.png'; // Boarding pass image
import Winsound from "../Assets/home_web/win_sound.mp3";
import CoinLogo from "../Assets/home_web/coin_img.png"; // Coin image
import Win_Ticket from '../Assets/home_web/Win_Ticket.gif'
import Win_Ticket2 from '../Assets/home_web/BookFlight.gif'

const AboutUs = () => {
  const theme = useTheme();

  // Stepper state
  const [activeStep, setActiveStep] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const steps = ["Get Your Target", "Complete the Task", "Earn Rewards", "View Reward"]; // Added 4th step

  // Play sound effect when the dialog opens
  useEffect(() => {
    if (openDialog) {
      const audio = new Audio(Winsound);
      audio.play();
    }
  }, [openDialog]);

  // Handle next step
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setOpenDialog(true); // Open the dialog after completing all steps
    }
  };

  // Handle back step
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Open dialog automatically when the last step is reached
  useEffect(() => {
    if (activeStep === steps.length - 1) {
      setOpenDialog(true);
    }
  }, [activeStep, steps.length]);

  return (
    <Box
      id="about-us-section"
      sx={{
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        padding: 0, // Remove the padding to cover full screen
        height: "100vh", // Make the section full screen
        overflow: "hidden", // Ensure no content spills outside
        animation: "background-color-change 10s infinite", // Animation for background color change
      }}
    >
      {/* Full-Screen Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${CoinLogo})`,
          backgroundSize: "contain", // Make sure the coin image fits the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2, // Subtle watermark effect for the image
          zIndex: 1,
          animation: "rotate 20s linear infinite", // Rotate the coin image in circular motion
        }}
      />
      
      {/* Background Color Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(156, 136, 136, 0.5)", // Semi-transparent black overlay
          zIndex: 2,
        }}
      />

      <Container
        id="about-us-container"
        sx={{
          position: "relative",
          zIndex: 3, // Ensure content appears above the overlays
          height: "100%", // Ensure the container stretches to full height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center the content
          textAlign: "center", // Center the text
          color: theme.palette.text.primary,
        }}
      >
        {/* Title Section */}
        <Typography
          id="about-us-title"
          variant="h2"
          sx={{
            marginBottom: "2rem",
            fontWeight: 700,
            color: theme.palette.primary.main,
            background: "linear-gradient(45deg,rgb(37, 31, 35),rgb(89, 86, 161),rgb(5, 15, 8))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Us
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {/* Left Side Content */}
          <Grid item xs={12} md={6} id="about-us-content">
            <Typography
              id="about-us-paragraph-1"
              variant="h5"
              paragraph
              sx={{
                lineHeight: 1.6,
                background: "linear-gradient(45deg,rgb(241, 9, 9),rgb(54, 53, 97),rgb(12, 12, 12))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Welcome to **Amazing Dubai**, where you can **win flight tickets** and **exciting gifts** by completing targets. Our platform makes earning rewards simple and fun!
            </Typography>

            <Typography
              id="about-us-paragraph-2"
              variant="h6"
              paragraph
              sx={{
                lineHeight: 1.6,
                background: "linear-gradient(45deg,rgb(63, 55, 60),rgb(83, 82, 110),rgb(241, 9, 9))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Invest in our exclusive offers to grow your coins, and unlock rewards like **silver coins** for higher investments! Our system is designed to ensure you get maximum value for every milestone you achieve.
            </Typography>

            {/* Stepper */}
            <Box sx={{ marginTop: 4 }}>
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#4caf50", // Green for completed steps
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#ff9800", // Orange for active step
                  },
                  "& .MuiStepLabel-label": {
                    color: "#ffffff", // White for the step label text
                  },
                  transition: "all 0.3s ease", // Animation for step transitions
                }}
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ marginRight: 2 }}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </Button>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Dialog for the Boarding Pass */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            background: "linear-gradient(45deg,rgb(241, 9, 9),rgb(54, 53, 97),rgb(12, 12, 12))",
            color: '#fff',
          }}
        >
          ✈️Winning this flight ticket is just the start. Bon voyage!! Congrats! 🎉🎊"
        </DialogTitle>
        <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
          <img src={Win_Ticket2} alt="Boarding Pass" style={{ width: "100%", height: "auto" }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* CSS Styles */}
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes background-color-change {
          0% {
            background-color: rgba(255, 255, 255, 0.6);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.8);
          }
          100% {
            background-color: rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>
    </Box>
  );
};

export default AboutUs;
