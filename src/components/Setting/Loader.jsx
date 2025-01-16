// components/Loader.js
import React from "react";
import { Box } from "@mui/material";
import CoinLogo from "../Assets/home_web/coin_img1.png";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white", // Optional: set background color during loading
      }}
    >
      <img
        src={CoinLogo}
        alt="Loading..."
        style={{
          width: "100px",
          height: "100px",
          animation: "spin 2s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default Loader;
