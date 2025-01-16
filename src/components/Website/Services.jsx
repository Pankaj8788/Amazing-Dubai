// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
// import Img_1 from './../Assets/Footerimg/img_1.png';
// import Img_2 from './../Assets/Footerimg/img_2.png';
// import Img_3 from './../Assets/Footerimg/img_3.png';
// import Img_4 from './../Assets/Footerimg/img_4.png';
// import Backgroundimg from './../Assets/home_web/coin_img1.png';
// import offer_one from '../Assets/home_web/offer_gif.gif';
// import offer_two from '../Assets/home_web/offer2gif.gif';

// const services = [
//   {
//     title: 'Contest Winning Schemes',
//     description: 'Complete your target and stand a chance to win exciting flight tickets and awesome gifts! Participate and win big rewards.',
//     image: offer_one, // Use the imported image
//   },
//   {
//     title: 'Offers and Rewards',
//     description: 'Unlock exclusive offers and redeem rewards points for great deals. Coins rate: 21 INR for 2024/2025. After 3 years, 153 INR for 2027/2028.',
//     image: offer_two, // Use the imported image
//   },
//   {
//     title: 'Coins Growth Plan',
//     description: 'Invest in our coin plans and see your investments grow. If you invest 2 lakh, you will get 1 silver coin (25gm). Invest 10 lakh, and you will get 5 silver coins (25gm).',
//     image: offer_one, // Use the imported image
//   },
//   {
//     title: 'Special Pre-Launch Offers',
//     description: 'Invest in our pre-launch offers and get exceptional returns. 10% growth for 1-10 lakh, 20% growth for 11-20 lakh, and 25% growth for investments above 21 lakh.',
//     image: offer_two, // Use the imported image
//   },
// ];

// const Services = () => {
//   return (
//     <Box
//       id="services"
//       sx={{
//         padding: '4rem 0',
//         backgroundColor: '#000000',
//         backgroundImage: `url(${Backgroundimg})`, // Set the background image
//         backgroundSize: 'cover', // Cover the entire background
//         backgroundPosition: 'center', // Center the background
//         backgroundRepeat: 'no-repeat', // Prevent repeating the image
//         position: 'relative', // Make sure content overlays on top
//         overflow: 'hidden',

//       }}
//     >
//       {/* Overlay to dim the background image */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light white overlay with transparency
//           zIndex: -1, // Place the overlay behind the content
//         }}
//       />
//       <Container>
//         <Typography
//           variant="h3"
//           align="center"
//           sx={{
//             marginBottom: '3rem',
//             fontWeight: 700,
//             color: '#3f51b5',
//             textTransform: 'uppercase',
//             letterSpacing: '2px',
//             marginBottom: '22%',
//           }}
//         >
//           Our Offers
//         </Typography>
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   borderRadius: '10px',
//                   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: 6,
//                     backgroundColor: '#f0f0f0',
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="180"
//                   image={service.image}
//                   alt={service.title}
//                   sx={{
//                     borderTopLeftRadius: '10px',
//                     borderTopRightRadius: '10px',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     backgroundColor: '#fff',
//                     padding: '1.5rem',
//                     textAlign: 'center',
//                   }}
//                 >
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     sx={{
//                       fontWeight: 600,
//                       color: '#333',
//                       textTransform: 'uppercase',
//                       letterSpacing: '1px',
//                     }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {service.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Services;

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
import Img_1 from "./../Assets/Footerimg/img_1.png";
import Img_2 from "./../Assets/Footerimg/img_2.png";
import Img_3 from "./../Assets/Footerimg/img_3.png";
import Img_4 from "./../Assets/Footerimg/img_4.png";
import Backgroundimg from "./../Assets/home_web/coin_img1.png";
import offer_one from "../Assets/home_web/offer_gif.gif";
import offer_two from "../Assets/home_web/offer2gif.gif";
import CoinLogo from "../Assets/home_web/coin_img1.png";

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
    title: "Coins Growth Plan",
    description:
      "Invest in our coin plans and see your investments grow. If you invest 2 lakh, you will get 1 silver coin (20gm). Invest 10 lakh, and you will get 5 silver coins (20gm).",
    image: offer_one,
  },
  {
    title: "Special Pre-Launch Offers",
    description:
      "Invest in our pre-launch offers and get exceptional returns. 10% growth for 1-10 lakh, 20% growth for 11-20 lakh, and 25% growth for investments above 21 lakh.",
    image: offer_two,
  },
];

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
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: "10px",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    height: 200, // Set a fixed height to display GIFs properly
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    objectFit: "contain", // Ensure the GIF fits within the available space
                    marginTop: "10px",
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: "#fff",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
