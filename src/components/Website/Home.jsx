// import React from "react";
// import { styled } from "@mui/material/styles";
// import { Typography, Button, Box } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import CoinLogo from "../Assets/home_web/coin_img1.png";

// const HeroSection = styled("div")(({ theme }) => ({
//   background:
//     "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
//   minHeight: "90vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "#fff",
//   textAlign: "center",
//   position: "relative",
//   overflow: "hidden",
//   [theme.breakpoints.down("sm")]: {
//     minHeight: "70vh",
//   },
// }));

// const ContentWrapper = styled("div")(() => ({
//   position: "relative",
//   zIndex: 3,
//   padding: "20px",
//   maxWidth: "80%",
//   background: "rgba(0, 0, 0, 0.6)", // Slight background for better contrast
//   borderRadius: "10px",
//   textAlign: "center",
// }));

// // const StyledImage = styled("img")(() => ({
// //   width: "150px",
// //   height: "150px",
// //   marginBottom: "20px",
// //   borderRadius: "50%", // Optional circular styling
// //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for highlight
// // }));

// const StyledImage = styled("img")(() => ({
//   height: "190px",
//   marginRight: "8px",
//   borderRadius: "130px", // Adjust the border radius as per your requirement
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for highlight
// }));

// const SolidTypography = styled(Typography)(() => ({
//   color: "#FFFFFF",
//   fontWeight: "bold",
//   textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   borderRadius: "20px",
//   padding: "10px 20px",
//   margin: "0 10px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
// }));

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// };

// const Home = () => {
//   return (
//     <HeroSection
//     id="hero-section"
//     >
//       <ContentWrapper>
//         {/* Highlight the CoinLogo */}
//         <StyledImage src={CoinLogo} alt="Coin Logo" />
//         {/* <SolidTypography 
//           variant="h2" 
//           component="h1" 
//           sx={{
//             mb: 2,
//             background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
//           }}
//         >
//           Unlock Opportunities
//         </SolidTypography> */}
//         <SolidTypography
//           variant="h2"
//           component="h1"
//           sx={{
//             mb: 2,
//             background:
//               "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
//             // backgroundClip: "text",
//             color: "", // Makes the gradient visible in the text
//             textAlign: "center", // Center-aligns text for all screen sizes
//             fontSize: {
//               xs: "1.8rem", // Smaller font size for mobile screens
//               sm: "2.5rem", // Medium font size for small screens
//               md: "3rem", // Larger font size for tablets
//               lg: "3.5rem", // Default size for larger screens
//             },
//             fontWeight: "bold", // Makes the text visually prominent
//             lineHeight: 1.2, // Adjusts line height for better readability
//             letterSpacing: {
//               xs: "0.5px", // Narrow spacing for smaller screens
//               md: "1px", // Standard spacing for larger screens
//             },
//           }}
//         >
//           Unlock Opportunities
//         </SolidTypography>

//         <Typography
//           variant="h4"
//           color="textPrimary"
//           sx={{
//             mb: 4,
//             background:
//               "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
//           }}
//         >
//           Contest Winning Schemes, Offers, and Rewards!
//         </Typography>
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           sx={{ mb: 4 }}
//         >
//           <StyledButton
//             onClick={() => scrollToSection("services")}
//             variant="contained"
//             color="secondary"
//           >
//             Explore Offers
//           </StyledButton>
//           <StyledButton
//             component={RouterLink}
//             to="/login"
//             variant="contained"
//             color="secondary"
//           >
//             Invest Now
//           </StyledButton>
//           <StyledButton
//             component={RouterLink}
//             to="/prelaunchevent/register"
//             variant="contained"
//             color="secondary"
//           >
//             Event Register
//           </StyledButton>
//         </Box>
//         <SolidTypography
//           variant="h2"
//           color="textPrimary"
//           sx={{
//             background:
//               "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
//           }}
//         >
//           Invest Today, Earn Tomorrow. Your journey to rewards and growth starts
//           here!
//         </SolidTypography>
//       </ContentWrapper>
//     </HeroSection>
//   );
// };

// export default Home;

// import React from "react";
// import { styled } from "@mui/material/styles";
// import { Typography, Button, Box } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import CoinLogo from "../Assets/home_web/coin_img1.png";

// // Hero Section with Animated Gradient Background
// const HeroSection = styled("div")(({ theme }) => ({
//   position: "relative",
//   overflow: "hidden",
//   background: "linear-gradient(45deg, #FF4E50, #F9D423)",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "#fff",
//   textAlign: "center",
//   animation: "gradientAnimation 20s ease-in-out infinite",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//   },
//   "& > *": {
//     position: "relative",
//     zIndex: 2,
//   },
// }));

// const Snowflake = styled("div")(() => ({
//   position: "absolute",
//   top: "-10px",
//   width: "10px",
//   height: "10px",
//   backgroundColor: "#fff",
//   borderRadius: "50%",
//   animation: "snow 12s linear infinite",
//   opacity: 0.8,
//   boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
// }));

// const ContentWrapper = styled("div")(() => ({
//   position: "relative",
//   zIndex: 3,
//   padding: "20px",
//   maxWidth: "80%",
//   background: "rgba(0, 0, 0, 0.7)",
//   borderRadius: "10px",
//   textAlign: "center",
// }));

// const StyledImage = styled("img")(() => ({
//   height: "190px",
//   marginRight: "8px",
//   borderRadius: "130px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   borderRadius: "20px",
//   padding: "10px 20px",
//   margin: "0 10px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
// }));

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// };

// const Home = () => {
//   return (
//     <HeroSection>
//       {/* Snowfall effect */}
//       <Snowflake style={{ left: "5%", animationDuration: "8s" }} />
//       <Snowflake style={{ left: "15%", animationDuration: "10s" }} />
//       <Snowflake style={{ left: "30%", animationDuration: "12s" }} />
//       <Snowflake style={{ left: "50%", animationDuration: "9s" }} />
//       <Snowflake style={{ left: "70%", animationDuration: "11s" }} />
//       <Snowflake style={{ left: "90%", animationDuration: "13s" }} />

//       <ContentWrapper>
//         <StyledImage src={CoinLogo} alt="Coin Logo" />
//         <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold", fontSize: { xs: "2rem", sm: "3rem" } }}>
//           Unlock Opportunities
//         </Typography>
//         <Typography variant="h4" sx={{ mb: 4 }}>
//           Contest Winning Schemes, Offers, and Rewards!
//         </Typography>
//         <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
//           <StyledButton onClick={() => scrollToSection("services")} variant="contained" color="secondary">
//             Explore Offers
//           </StyledButton>
//           <StyledButton component={RouterLink} to="/login" variant="contained" color="secondary">
//             Invest Now
//           </StyledButton>
//           <StyledButton component={RouterLink} to="/prelaunchevent/register" variant="contained" color="secondary">
//             Event Register
//           </StyledButton>
//         </Box>
//         <Typography variant="h6" sx={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}>
//           Invest Today, Earn Tomorrow. Your journey to rewards and growth starts here!
//         </Typography>
//       </ContentWrapper>
//     </HeroSection>
//   );
// };

// export default Home;

// // Add global keyframes for animation
// const styleSheet = document.styleSheets[0];
// const gradientAnimation = `
// @keyframes gradientAnimation {
//   0% { background: linear-gradient(45deg, #FF4E50, #F9D423); }
//   50% { background: linear-gradient(45deg, #1A2A6C, #B21F1F); }
//   100% { background: linear-gradient(45deg, #FF4E50, #F9D423); }
// }
// `;
// const snowAnimation = `
// @keyframes snow {
//   0% { transform: translateX(0) translateY(0); }
//   100% { transform: translateX(calc(100vw - 50px)) translateY(100vh); }
// }
// `;
// styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);
// styleSheet.insertRule(snowAnimation, styleSheet.cssRules.length);


import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CoinLogo from "../Assets/home_web/coin_img1.png"; // Coin Logo used in the hero section
import FallingCoinImage from "../Assets/home_web/coin_img1.png"; // Image for falling coins

// Hero Section with Animated Gradient Background
const HeroSection = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(45deg, #FF4E50, #F9D423)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  animation: "gradientAnimation 20s ease-in-out infinite",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));

const Coin = styled("img")(() => ({
  position: "absolute",
  top: "-50px",
  width: "30px", // Adjust size as needed
  height: "30px",
  animation: "fall 10s linear infinite",
  opacity: 0.9,
  zIndex: 0,
}));

const ContentWrapper = styled("div")(() => ({
  position: "relative",
  zIndex: 3,
  padding: "20px",
  maxWidth: "80%",
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: "10px",
  textAlign: "center",
}));

const StyledImage = styled("img")(() => ({
  height: "190px",
  marginRight: "8px",
  borderRadius: "130px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  padding: "10px 20px",
  margin: "0 10px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Home = () => {
  return (
    <HeroSection>
      {/* Falling coins */}
      {[...Array(20)].map((_, index) => (
        <Coin
          key={index}
          src={FallingCoinImage}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <ContentWrapper>
        <StyledImage src={CoinLogo} alt="Coin Logo" />
        <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold", fontSize: { xs: "2rem", sm: "3rem" } }}>
          Unlock Opportunities
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Contest Winning Schemes, Offers, and Rewards!
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
          <StyledButton onClick={() => scrollToSection("services")} variant="contained" color="secondary">
            Explore Offers
          </StyledButton>
          <StyledButton component={RouterLink} to="/login" variant="contained" color="secondary">
            Invest Now
          </StyledButton>
          <StyledButton component={RouterLink} to="/prelaunchevent/register" variant="contained" color="secondary">
            Event Register
          </StyledButton>
        </Box>
        <Typography variant="h6" sx={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}>
          Invest Today, Earn Tomorrow. Your journey to rewards and growth starts here!
        </Typography>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Home;

// Add global keyframes for animation
const styleSheet = document.styleSheets[0];
const gradientAnimation = `
@keyframes gradientAnimation {
  0% { background: linear-gradient(45deg, #FF4E50, #F9D423); }
  50% { background: linear-gradient(45deg, #1A2A6C, #B21F1F); }
  100% { background: linear-gradient(45deg, #FF4E50, #F9D423); }
}
`;
const fallAnimation = `
@keyframes fall {
  0% { transform: translateY(-50px) rotate(0); opacity: 1; }
  100% { transform: translateY(calc(100vh + 50px)) rotate(360deg); opacity: 0; }
}
`;
styleSheet.insertRule(gradientAnimation, styleSheet.cssRules.length);
styleSheet.insertRule(fallAnimation, styleSheet.cssRules.length);
