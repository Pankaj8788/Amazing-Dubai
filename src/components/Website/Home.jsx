
import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CoinLogo from "../Assets/home_web/coin_img1.png"; // Coin Logo used in the hero section
import FallingCoinImage from "../Assets/home_web/Coinimgnew.png"; // Image for falling coins

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
