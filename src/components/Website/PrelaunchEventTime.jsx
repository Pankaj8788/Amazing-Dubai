import React from "react";
import { Box, Typography } from "@mui/material";

const PrelaunchEventTime = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#000", // Black background
        overflow: "hidden",
      }}
      id="prelaunchtimestamp"
    >
      {/* Circular Ripple Effect */}
      <Box
        sx={{
          position: "absolute",
          width: "30vw", // Relative to viewport width
          height: "30vw", // Maintain circular shape
          borderRadius: "50%",
          backgroundColor: "transparent",
          animation: "rippleEffect 1.5s linear infinite",
          boxShadow:
            "inset 0 0 30px 5px rgba(240, 206, 14, 0.87), 0 0 50px 15px rgba(251, 236, 24, 0.9)",
            top: "18%",
            left: "35%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          "@keyframes rippleEffect": {
            "0%": {
              transform: "scale(1)",
              opacity: 1,
            },
            "100%": {
              transform: "scale(2)",
              opacity: 0,
            },
          },
          // Responsive adjustments
          "@media (max-width: 600px)": {
            width: "40vw",
            height: "40vw",
          },
        }}
      />

      {/* Event Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "#fff",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        COINERA PRE-LAUNCH EVENT
      </Typography>

      {/* Event Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          border: "2px solid #fff",
          zIndex: 1,
          width: "90%",
          maxWidth: "600px",
        }}
      >
        {/* Event Date and Time */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Friday, 31st January 2025
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "gold",
            textAlign: "center",
          }}
        >
          Time: 06:00 PM
        </Typography>

        {/* Venue Details */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: "medium",
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Venue: The Orchid Hotel, Mumbai Bangalore Road, <br />
          Balewadi Gaon, Pune
        </Typography>
      </Box>
    </Box>
  );
};

export default PrelaunchEventTime;
