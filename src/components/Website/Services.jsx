import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import Backgroundimg from "./../Assets/home_web/coin_img1.png";
import offer_one from "../Assets/home_web/offer_gif.gif";
import offer_two from "../Assets/home_web/offer2gif.gif";

const services = [
  {
    title: "Contest Winning Schemes",
    description:
      "Complete your target and stand a chance to win exciting flight tickets and awesome gifts! Participate and win big rewards.",
    image: offer_one,
  },
  {
    title: "Offers and Rewards",
    description:
      "Unlock exclusive offers and redeem rewards points for great deals. Coins rate: 21 INR for 2024/2025. After 3 years, 153 INR for 2027/2028.",
    image: offer_two,
  },
  {
    title: "Special Pre-Launch Offers",
    description:
      "Invest in our coin plans and see your investments grow. If you invest 3 lakh, you will get 1 silver coin (20gm). Invest 15 lakh, and you will get 5 silver coins (20gm),Invest in multiples of 3X to earn Silver Coin",
    image: offer_one,
  },
  {
    title: "Coins Growth Plan",
    description:
      "Invest in our pre-launch offers and get exceptional returns. 6% growth for 1-10 lakh, 8% growth for 11-20 lakh, and 10% growth for investments above 21 lakh.",
    image: offer_two,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        padding: "4rem 0",
        backgroundColor: "#000000",
        backgroundImage: `url(${Backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          zIndex: -1,
        }}
      />
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: "12rem",
            fontWeight: 700,
            color: "#3f51b5",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Our Offers
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                }}
                variants={cardVariants}
              >
                <Card
                  sx={{
                    position: "relative",
                    boxShadow: 3,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg,rgb(159, 135, 185), #2575fc)", // Gradient background
                    transition: "all 0.4s ease-in-out",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "scale(1.05)",
                    },
                    "&:hover::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "200%",
                      height: "200%",
                      background: "radial-gradient(circle, rgba(33, 72, 96, 0.5), transparent)",
                      borderRadius: "50%",
                      zIndex: -1,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: 200,
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      objectFit: "contain",
                      marginTop: "10px",
                    }}
                  />
                  <CardContent
                    sx={{
                      backgroundColor: "rgba(12, 206, 240, 0.8)", // Slightly transparent white
                      padding: "1.5rem",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="#ffffffcc">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
