// import React, { useState } from "react";
// import { Box, Grid, Typography, Paper, Button, Container, Dialog, DialogActions, DialogContent } from "@mui/material";
// import { styled } from "@mui/system";
// import CoinAnimation from '../Assets/CoinAnimation.gif'; 
// import successSound from '../Assets/success_sound.mp3'; 
// import offer_one from '../Assets/home_web/offer_gif.gif';
// import offer_two from '../Assets/home_web/offer2gif.gif';
// import Img_1 from './../Assets/Footerimg/img_1.png';
// import Img_2 from './../Assets/Footerimg/img_2.png';
// import Img_3 from './../Assets/Footerimg/img_3.png';
// import Img_4 from './../Assets/Footerimg/img_4.png';
// import CoinLogo from "../Assets/home_web/coin_img.png";


// const Title = styled(Typography)(() => ({
//   fontSize: "2.5rem",
//   fontWeight: "bold",
//   marginBottom: "30px",
//   textAlign: "center",
//   color: "transparent",
//   background: "linear-gradient(45deg, #FF6F61, #FF9A8B)",
//   backgroundClip: "text",
//   letterSpacing: "2px",
//   textTransform: "uppercase",
//   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
// }));

// const OfferCard = styled(Paper)(() => ({
//   padding: "24px",
//   textAlign: "center",
//   fontSize: "1rem",
//   color: "#fff", // Set text color to white by default for better readability
//   background: "rgba(0, 0, 0, 0.3)", // Slightly dark background for better contrast
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//   borderRadius: "12px",
//   marginBottom: "20px",
//   transition: "transform 0.3s ease, background 0.3s ease", // Added background transition
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//     background: "rgba(0, 0, 0, 0.6)", // Darker background on hover for contrast
//   },
// }));

// const OfferImage = styled(Box)(() => ({
//   width: "100%",
//   maxHeight: "180px",
//   overflow: "hidden",
//   borderRadius: "12px",
//   marginBottom: "16px",
// }));

// const OfferTitle = styled(Typography)(() => ({
//   fontSize: "1.4rem",
//   fontWeight: "bold",
//   marginBottom: "12px",
//   color: "#FF9A8B", // Lighter title color to match the theme
// }));

// const OfferDescription = styled(Typography)(() => ({
//   fontSize: "1rem",
//   color: "#ddd", // Light text color for description
//   textAlign: "center",
// }));

// const RewardsContainer = styled(Box)(() => ({
//   padding: "16px",
//   marginTop: "40px",
// }));

// const services = [
//   {
//     title: 'Contest Winning Schemes',
//     description: 'Complete your target and stand a chance to win exciting flight tickets and awesome gifts! Participate and win big rewards.',
//     image: Img_1,
//     gif: offer_one
//   },
//   {
//     title: 'Offers and Rewards',
//     description: 'Unlock exclusive offers and redeem rewards points for great deals. Coins rate: ₹21/coin for 2024/2025. ₹153/coin for 2027/2028.',
//     image: Img_2,
//     gif: offer_two
//   },
//   {
//     title: 'Coins Growth Plan',
//     description: 'Invest in our coin plans and see your investments grow. ₹2 Lakh investment gets 1 silver coin (25gm). ₹10 Lakh gets 5 silver coins (25gm).',
//     image: Img_3,
//     gif: offer_one
//   },
//   {
//     title: 'Special Pre-Launch Offers',
//     description: 'Invest in our pre-launch offers and get exceptional returns. 10% growth for 1-10 lakh, 20% growth for 11-20 lakh, 25% growth above ₹21 lakh.',
//     image: Img_4,
//     gif: offer_two
//   },
// ];

// const Rewards = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [rewards] = useState([
//     { id: 1, title: "Signup Bonus", points: 500, date: "2024-12-15" },
//     { id: 2, title: "Referral Bonus", points: 300, date: "2024-12-18" },
//     { id: 3, title: "Holiday Special", points: 800, date: "2024-12-20" },
//   ]);
//   const totalPoints = rewards.reduce((acc, reward) => acc + reward.points, 0);

//   const handleClaimReward = () => {
//     const sound = new Audio(successSound);
//     sound.play();
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Container>
//       <RewardsContainer>
//         <Title>Our Offers & Rewards</Title>
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <OfferCard elevation={3}>
//                 <OfferImage>
//                   <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                 </OfferImage>
//                 <OfferTitle>{service.title}</OfferTitle>
//                 <OfferDescription>{service.description}</OfferDescription>
//                 <Box>
//                   <img src={service.gif} alt={service.title} width="100%" style={{ borderRadius: '12px' }} />
//                 </Box>
//               </OfferCard>
//             </Grid>
//           ))}
//         </Grid>
//       </RewardsContainer>

//       {/* Claim Reward Dialog */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogContent>
//           <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//             <Typography variant="h6" marginBottom={2} color="primary" fontWeight="bold">
//               Congratulations! You've claimed your reward!
//             </Typography>
//             <img src={CoinAnimation} alt="Coin Animation" width="200" height="200" />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary" variant="contained">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default Rewards;


// import React, { useState } from "react"; 
// import { Box, Grid, Typography, Paper, Button, Container, Dialog, DialogActions, DialogContent } from "@mui/material";
// import { styled } from "@mui/system";
// import CoinAnimation from '../Assets/CoinAnimation.gif'; 
// import successSound from '../Assets/success_sound.mp3'; 
// import offer_one from '../Assets/home_web/offer_gif.gif';
// import offer_two from '../Assets/home_web/offer2gif.gif';
// import Img_1 from './../Assets/Footerimg/img_1.png';
// import Img_2 from './../Assets/Footerimg/img_2.png';
// import Img_3 from './../Assets/Footerimg/img_3.png';
// import Img_4 from './../Assets/Footerimg/img_4.png';
// import CoinLogo from "../Assets/home_web/coin_img.png"; // Watermark image

// const Title = styled(Typography)(() => ({
//   fontSize: "2.5rem",
//   fontWeight: "bold",
//   marginBottom: "30px",
//   textAlign: "center",
//   color: "transparent",
//   background: "linear-gradient(45deg, #FF6F61, #FF9A8B)",
//   backgroundClip: "text",
//   letterSpacing: "2px",
//   textTransform: "uppercase",
//   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
// }));

// const OfferCard = styled(Paper)(() => ({
//   padding: "24px",
//   textAlign: "center",
//   fontSize: "1rem",
//   color: "#fff", // Set text color to white by default for better readability
//   background: "rgba(0, 0, 0, 0.3)", // Slightly dark background for better contrast
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//   borderRadius: "12px",
//   marginBottom: "20px",
//   transition: "transform 0.3s ease, background 0.3s ease", // Added background transition
//   "&:hover": {
//     transform: "scale(1.05)",
//     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//     background: "rgba(0, 0, 0, 0.6)", // Darker background on hover for contrast
//   },
// }));

// const OfferImage = styled(Box)(() => ({
//   width: "100%",
//   maxHeight: "180px",
//   overflow: "hidden",
//   borderRadius: "12px",
//   marginBottom: "16px",
// }));

// const OfferTitle = styled(Typography)(() => ({
//   fontSize: "1.4rem",
//   fontWeight: "bold",
//   marginBottom: "12px",
//   color: "#FF9A8B", // Lighter title color to match the theme
// }));

// const OfferDescription = styled(Typography)(() => ({
//   fontSize: "1rem",
//   color: "#ddd", // Light text color for description
//   textAlign: "center",
// }));

// const RewardsContainer = styled(Box)(() => ({
//   padding: "16px",
//   marginTop: "40px",
// }));

// const services = [
//   {
//     title: 'Contest Winning Schemes',
//     description: 'Complete your target and stand a chance to win exciting flight tickets and awesome gifts! Participate and win big rewards.',
//     image: Img_1,
//     gif: offer_one
//   },
//   {
//     title: 'Offers and Rewards',
//     description: 'Unlock exclusive offers and redeem rewards points for great deals. Coins rate: ₹21/coin for 2024/2025. ₹153/coin for 2027/2028.',
//     image: Img_2,
//     gif: offer_two
//   },
//   {
//     title: 'Coins Growth Plan',
//     description: 'Invest in our coin plans and see your investments grow. ₹2 Lakh investment gets 1 silver coin (25gm). ₹10 Lakh gets 5 silver coins (25gm).',
//     image: Img_3,
//     gif: offer_one
//   },
//   {
//     title: 'Special Pre-Launch Offers',
//     description: 'Invest in our pre-launch offers and get exceptional returns. 10% growth for 1-10 lakh, 20% growth for 11-20 lakh, 25% growth above ₹21 lakh.',
//     image: Img_4,
//     gif: offer_two
//   },
// ];

// const Rewards = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [rewards] = useState([
//     { id: 1, title: "Signup Bonus", points: 500, date: "2024-12-15" },
//     { id: 2, title: "Referral Bonus", points: 300, date: "2024-12-18" },
//     { id: 3, title: "Holiday Special", points: 800, date: "2024-12-20" },
//   ]);
//   const totalPoints = rewards.reduce((acc, reward) => acc + reward.points, 0);

//   const handleClaimReward = () => {
//     const sound = new Audio(successSound);
//     sound.play();
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Container>
//       {/* Watermark */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           opacity: 0.1,
//           zIndex: 0,
//           backgroundImage: `url(${CoinLogo})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           width: "60%",
//           height: "60%",
//         }}
//       />

//       <RewardsContainer>
//         <Title>Our Offers & Rewards</Title>
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <OfferCard elevation={3}>
//                 <OfferImage>
//                   <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                 </OfferImage>
//                 <OfferTitle>{service.title}</OfferTitle>
//                 <OfferDescription>{service.description}</OfferDescription>
//                 <Box>
//                   <img src={service.gif} alt={service.title} width="100%" style={{ borderRadius: '12px' }} />
//                 </Box>
//               </OfferCard>
//             </Grid>
//           ))}
//         </Grid>
//       </RewardsContainer>
//     </Container>
//   );
// };

// export default Rewards;


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
        "Unlock exclusive offers and redeem rewards points for great deals. Coins rate: ₹21/coin for 2024/2025. ₹153/coin for 2027/2028.",
      image: Img_2,
      gif: offer_two,
    },
    {
      title: "Coins Growth Plan",
      description:
        "Invest in our coin plans and see your investments grow. ₹2 Lakh investment gets 1 silver coin (25gm). ₹10 Lakh gets 5 silver coins (25gm).",
      image: Img_3,
      gif: offer_one,
    },
    {
      title: "Special Pre-Launch Offers",
      description:
        "Invest in our pre-launch offers and get exceptional returns. 10% growth for 1-10 lakh, 20% growth for 11-20 lakh, 25% growth above ₹21 lakh.",
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
