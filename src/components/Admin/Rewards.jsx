import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import CoinAnimation from "../Assets/CoinAnimation.gif";
import successSound from "../Assets/success_sound.mp3";
import offer_one from "../Assets/home_web/offer_gif.gif";
import offer_two from "../Assets/home_web/offer2gif.gif";
import Img_1 from "../Assets/Footerimg/img_1.png";
import Img_2 from "../Assets/Footerimg/img_2.png";
import Img_3 from "../Assets/Footerimg/img_3.png";
import Img_4 from "../Assets/Footerimg/img_4.png";
import CoinLogo from "../Assets/home_web/coin_img.png"; // Watermark image

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: "bold",
  textAlign: "center",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4),
}));

const OfferCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.default,
  border: `2px solid transparent`,
  backgroundClip: "padding-box",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0 16px 48px ${theme.palette.primary.light}`,
  },
}));

const OfferImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "180px",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const OfferTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const OfferDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

const RewardsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(6),
//   background: "linear-gradient(135deg, #f5f7fa, #e4e7eb)",
background: "linear-gradient(135deg,rgb(44, 45, 49) 30%,rgb(10, 41, 221) 90%)",

  borderRadius: theme.shape.borderRadius,
}));

const Rewards = () => {
  const services = [
    {
      title: "Contest Winning Schemes",
      description:
      "Complete your target and stand a chance to win exciting flight tickets and awesome gifts! Participate and win big rewards.",
      image: Img_1,
      gif: offer_one,
    },
    {
      title: "Offers and Rewards",
      description:
      "Unlock exclusive offers and redeem rewards points for great deals. Coins rate: 21 INR for 2024/2025. After 3 years, 153 INR for 2027/2028.",
      image: Img_2,
      gif: offer_two,
    },
    {
      title: "Coins Growth Plan",
      description:
      "Invest in our coin plans and see your investments grow. If you invest 3 lakh, you will get 1 silver coin (20gm). Invest 15 lakh, and you will get 5 silver coins (20gm),Invest in multiples of 3X to earn Silver Coin",
      image: Img_3,
      gif: offer_one,
    },
    {
      title: "Special Pre-Launch Offers",
      description:
      "Invest in our pre-launch offers and get exceptional returns. 6% growth for 1-10 lakh, 8% growth for 11-20 lakh, and 10% growth for investments above 21 lakh.",
      image: Img_4,
      gif: offer_two,
    },
  ];

  return (
    <Container>
      {/* Watermark */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.1,
          zIndex: 0,
        //   backgroundImage: `url(${CoinLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "60%",
          height: "60%",
        }}
      />

      <RewardsContainer>
        <Title sx={{color: "#ffffff",}}>Our Offers & Rewards</Title>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <OfferCard elevation={3}>
                <OfferImage>
                  <img src={service.image} alt={service.title} />
                </OfferImage>
                <OfferTitle>{service.title}</OfferTitle>
                <OfferDescription>{service.description}</OfferDescription>
                <Box>
                  <img
                    src={service.gif}
                    alt={service.title}
                    width="100%"
                    style={{ borderRadius: "12px" }}
                  />
                </Box>
              </OfferCard>
            </Grid>
          ))}
        </Grid>
      </RewardsContainer>
    </Container>
  );
};

export default Rewards;
