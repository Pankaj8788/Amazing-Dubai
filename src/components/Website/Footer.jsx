// import React from "react";
// import { Box, Typography, Link, Grid, useTheme } from "@mui/material";
// import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
// import Logo from "./../Assets/Logo.jpg"; // Import the logo
// import Img_1 from "./../Assets/Footerimg/img_1.png";
// import Img_2 from "./../Assets/Footerimg/img_2.png";
// import Img_3 from "./../Assets/Footerimg/img_3.png";
// import Img_4 from "./../Assets/Footerimg/img_4.png";
// import CoinLogo from "../Assets/home_web/coin_img.png";


// const Footer = () => {
//   const theme = useTheme();

//   // Smooth scroll to a section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(180deg, #FFD700, #8A681D)", // Gradient background
//         color: "white",
//         padding: "2rem 0",
//         marginTop: "auto",
//         textAlign: "center",
//         boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)", // Add subtle shadow
//       }}
//     >
//       <Grid container spacing={3} justifyContent="center">
//         {/* Logo Column */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Box sx={{ mb: 2 }}>
//             <img
//               src={Logo}
//               alt="Logo"
//               style={{
//                 maxWidth: "150px", // Adjust the size of the logo
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: "50%", // Round shape
//               }}
//             />
//           </Box>
//         </Grid>

//         {/* Navigation Links Column */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography
//             variant="h6"
//             sx={{ marginBottom: "1rem", fontWeight: "bold" }}
//           >
//             Navigation
//           </Typography>
//           <Box>
//             <Link
//               onClick={() => scrollToSection("about-us-section")}
//               color="inherit"
//               sx={{
//                 display: "block",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: theme.palette.secondary.main },
//               }}
//             >
//               About Us
//             </Link>
//             <Link
//               onClick={() => scrollToSection("services")}
//               color="inherit"
//               sx={{
//                 display: "block",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: theme.palette.secondary.main },
//               }}
//             >
//               Services
//             </Link>
//             <Link
//               href="/login"
//               color="inherit"
//               sx={{
//                 display: "block",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: theme.palette.secondary.main },
//               }}
//             >
//               Blog
//             </Link>
//             <Link
//               href="/login"
//               color="inherit"
//               sx={{
//                 display: "block",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: theme.palette.secondary.main },
//               }}
//             >
//               Contact
//             </Link>
//           </Box>
//         </Grid>

//         {/* Social Media Links Column */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography
//             variant="h6"
//             sx={{ marginBottom: "1rem", fontWeight: "bold" }}
//           >
//             Follow Us
//           </Typography>
//           <Box>
//             <Link
//               href="https://facebook.com"
//               target="_blank"
//               color="inherit"
//               sx={{
//                 marginRight: "1rem",
//                 "&:hover": { color: "#3b5998" },
//               }}
//             >
//               <Facebook />
//             </Link>
//             <Link
//               href="https://twitter.com"
//               target="_blank"
//               color="inherit"
//               sx={{
//                 marginRight: "1rem",
//                 "&:hover": { color: "#1DA1F2" },
//               }}
//             >
//               <Twitter />
//             </Link>
//             <Link
//               href="https://instagram.com"
//               target="_blank"
//               color="inherit"
//               sx={{
//                 marginRight: "1rem",
//                 "&:hover": { color: "#C13584" },
//               }}
//             >
//               <Instagram />
//             </Link>
//             <Link
//               href="https://linkedin.com"
//               target="_blank"
//               color="inherit"
//               sx={{
//                 marginRight: "1rem",
//                 "&:hover": { color: "#0077B5" },
//               }}
//             >
//               <LinkedIn />
//             </Link>
//           </Box>
//         </Grid>

//         {/* Copyright Section */}
//         <Grid item xs={12}>
//           <Typography variant="body2" sx={{ marginTop: "1rem" }}>
//             &copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;


import React from "react";
import { Box, Typography, Link, Grid, useTheme } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Logo from "./../Assets/Logo.jpg";
import { styled } from "@mui/material/styles";

// Snowfall Effect
const Snowflake = styled("div")({
  position: "absolute",
  top: "-50px",
  width: "10px",
  height: "10px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  opacity: 0.9,
  animation: "fall 10s linear infinite",
});

const Footer = () => {
  const theme = useTheme();

  // Smooth scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #FFD700, #8A681D)", // Gradient background
        color: "white",
        padding: "2rem 0",
        marginTop: "auto",
        textAlign: "center",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)", // Add subtle shadow
        position: "relative", // Added to position snowflakes relative to the footer
        overflow: "hidden",  // Prevent snowflakes from overflowing
      }}
    >
      {/* Snowflakes falling effect */}
      {[...Array(30)].map((_, index) => (
        <Snowflake
          key={index}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <Grid container spacing={3} justifyContent="center">
        {/* Logo Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ mb: 2 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                maxWidth: "150px", // Adjust the size of the logo
                width: "100%",
                height: "auto",
                borderRadius: "50%", // Round shape
              }}
            />
          </Box>
        </Grid>

        {/* Navigation Links Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Navigation
          </Typography>
          <Box>
            <Link
              onClick={() => scrollToSection("about-us-section")}
              color="inherit"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              About Us
            </Link>
            <Link
              onClick={() => scrollToSection("services")}
              color="inherit"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Services
            </Link>
            <Link
              href="/login"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Blog
            </Link>
            <Link
              href="/login"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Social Media Links Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Follow Us
          </Typography>
          <Box>
            <Link
              href="https://facebook.com"
              target="_blank"
              color="inherit"
              sx={{
                marginRight: "1rem",
                "&:hover": { color: "#3b5998" },
              }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              color="inherit"
              sx={{
                marginRight: "1rem",
                "&:hover": { color: "#1DA1F2" },
              }}
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              color="inherit"
              sx={{
                marginRight: "1rem",
                "&:hover": { color: "#C13584" },
              }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              color="inherit"
              sx={{
                marginRight: "1rem",
                "&:hover": { color: "#0077B5" },
              }}
            >
              <LinkedIn />
            </Link>
          </Box>
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ marginTop: "1rem" }}>
            &copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

// Add global keyframes for animation
const styleSheet = document.styleSheets[0];
const fallAnimation = `
@keyframes fall {
  0% { transform: translateY(-50px) rotate(0); opacity: 1; }
  100% { transform: translateY(calc(100vh + 50px)) rotate(360deg); opacity: 0; }
}
`;
styleSheet.insertRule(fallAnimation, styleSheet.cssRules.length);
