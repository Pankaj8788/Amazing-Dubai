// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { keyframes } from "@mui/system";
// import { styled } from "@mui/system";
// import prelaunchimg1 from "../Assets/Web_prelaunch/prelaunchimg1.jpg";
// import prelaunchimg2 from "../Assets/Web_prelaunch/prelaunchimg2.jpg";
// import DNP_9430 from "../Assets/Web_prelaunch/DNP_9351.jpg";
// import Event1 from "../Assets/Web_prelaunch/Event1.jpg";
// import Event2 from "../Assets/Web_prelaunch/Event2.jpg";
// import Event3 from "../Assets/Web_prelaunch/Event3.jpg";
// import Event5 from "../Assets/Web_prelaunch/Event5.jpg";
// import Event6 from "../Assets/Web_prelaunch/Event6.jpg";
// import Event7 from "../Assets/Web_prelaunch/Event7.jpg";
// import Event8 from "../Assets/Web_prelaunch/Event8.jpg";
// import Event9 from "../Assets/Web_prelaunch/Event9.jpg";
// import Event15 from "../Assets/Web_prelaunch/Event15.jpg";

// const images = [
//   prelaunchimg1,
//   prelaunchimg2,
//   DNP_9430,
//   Event1,
//   Event2,
//   Event3,
//   Event5,
//   Event6,
//   Event7,
//   Event8,
//   Event9,
//   Event15,
// ];

// // Keyframes for animations
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(0.95);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

// const glowingBorder = keyframes`
//   0% {
//     box-shadow: 0 0 10px #4a90e2, 0 0 20px #4a90e2, 0 0 30px #4a90e2;
//   }
//   50% {
//     box-shadow: 0 0 20px #4a90e2, 0 0 30px #4a90e2, 0 0 40px #4a90e2;
//   }
//   100% {
//     box-shadow: 0 0 10px #4a90e2, 0 0 20px #4a90e2, 0 0 30px #4a90e2;
//   }
// `;

// const floatAnimation = keyframes`
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// `;

// // Styled components
// const MainContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '2rem',
//   background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
//   minHeight: '100vh',
// });

// const Title = styled(Typography)({
//   fontFamily: "'Orbitron', sans-serif",
//   color: '#fff',
//   fontSize: '2.5rem',
//   marginBottom: '2rem',
//   textAlign: 'center',
//   textTransform: 'uppercase',
//   letterSpacing: '4px',
//   textShadow: '0 0 10px rgba(74, 144, 226, 0.5)',
//   animation: `${floatAnimation} 3s ease-in-out infinite`,
//   '@media (max-width: 600px)': {
//     fontSize: '1.8rem',
//   },
// });

// const ImageContainer = styled(Box)({
//   position: 'relative',
//   width: '80%',
//   maxWidth: '800px',
//   height: '500px',
//   margin: '0 auto',
//   borderRadius: '15px',
//   overflow: 'hidden',
//   animation: `${glowingBorder} 2s infinite`,
//   '@media (max-width: 600px)': {
//     height: '300px',
//     width: '90%',
//   },
// });

// const StyledImage = styled('img')({
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   borderRadius: '15px',
//   animation: `${fadeIn} 1s ease-out`,
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// });

// const ProgressBar = styled(Box)({
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '10px',
//   marginTop: '20px',
// });

// const ProgressDot = styled(Box)(({ active }) => ({
//   width: '10px',
//   height: '10px',
//   borderRadius: '50%',
//   backgroundColor: active ? '#4a90e2' : '#666',
//   transition: 'all 0.3s ease',
//   cursor: 'pointer',
//   '&:hover': {
//     transform: 'scale(1.2)',
//   },
// }));

// const PrelaunchEventTime = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleDotClick = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <MainContainer>
//       <Title>
//         Coinera Pre-Launch Event
//       </Title>
//       <ImageContainer>
//         <StyledImage
//           src={images[currentImage]}
//           alt={`Pre-launch event ${currentImage + 1}`}
//           loading="lazy"
//         />
//       </ImageContainer>
//       <ProgressBar>
//         {images.map((_, index) => (
//           <ProgressDot
//             key={index}
//             active={index === currentImage}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </ProgressBar>
//     </MainContainer>
//   );
// };

// export default PrelaunchEventTime;

import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { keyframes } from "@mui/system";
import { styled } from "@mui/system";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import prelaunchimg1 from "../Assets/Web_prelaunch/prelaunchimg1.jpg";
import prelaunchimg2 from "../Assets/Web_prelaunch/prelaunchimg2.jpg";
import DNP_9430 from "../Assets/Web_prelaunch/DNP_9351.jpg";
import Event1 from "../Assets/Web_prelaunch/Event1.jpg";
import Event2 from "../Assets/Web_prelaunch/Event2.jpg";
import Event3 from "../Assets/Web_prelaunch/Event3.jpg";
import Event5 from "../Assets/Web_prelaunch/Event5.jpg";
import Event6 from "../Assets/Web_prelaunch/Event6.jpg";
import Event7 from "../Assets/Web_prelaunch/Event7.jpg";
import Event8 from "../Assets/Web_prelaunch/Event8.jpg";
import Event9 from "../Assets/Web_prelaunch/Event9.jpg";
import Event15 from "../Assets/Web_prelaunch/Event15.jpg";
import DNP_9333 from "../Assets/Web_prelaunch/DNP_9333.jpg";
import DNP_9347 from "../Assets/Web_prelaunch/DNP_9347.jpg";
import DNP_9447 from "../Assets/Web_prelaunch/DNP_9447.jpg";
import DNP_9523 from "../Assets/Web_prelaunch/DNP_9523.jpg";
import DNP_9546 from "../Assets/Web_prelaunch/DNP_9546.jpg";
import New13 from "../Assets/Web_prelaunch/New13.jpg";
import New10 from "../Assets/Web_prelaunch/New10.jpg";
import New3 from "../Assets/Web_prelaunch/New3.jpg";
import DNP_9634 from "../Assets/Web_prelaunch/DNP_9634.jpg";
import New23 from "../Assets/Web_prelaunch/New23.jpg";
import New15 from "../Assets/Web_prelaunch/New15.jpg";
import New12 from "../Assets/Web_prelaunch/New12.jpg";
import New6 from "../Assets/Web_prelaunch/New6.jpg";
import New11 from "../Assets/Web_prelaunch/New11.jpg";
import Harsh from "../Assets/Web_prelaunch/Hrash.jpg";
const images = [
  prelaunchimg1, prelaunchimg2, DNP_9430,New6, Event1, Event2, Event3,
  Event5, Event6, Event7, Event8,Harsh, Event9, Event15,DNP_9447,DNP_9523,
  DNP_9546,New10,DNP_9634,New15,New12,New11,

];

// Enhanced animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateX(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

const glowingBorder = keyframes`
  0% {
    box-shadow: 0 0 15px rgba(74, 144, 226, 0.6), 0 0 30px rgba(74, 144, 226, 0.4), 0 0 45px rgba(74, 144, 226, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(74, 144, 226, 0.8), 0 0 40px rgba(74, 144, 226, 0.6), 0 0 55px rgba(74, 144, 226, 0.4);
  }
  100% {
    box-shadow: 0 0 15px rgba(74, 144, 226, 0.6), 0 0 30px rgba(74, 144, 226, 0.4), 0 0 45px rgba(74, 144, 226, 0.2);
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(0.5deg); }
  75% { transform: translateY(8px) rotate(-0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  minHeight: '100vh',
  position: 'relative',
});

const Title = styled(Typography)({
  fontFamily: "'Orbitron', sans-serif",
  color: '#fff',
  fontSize: '2.5rem',
  marginBottom: '2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  textShadow: '0 0 15px rgba(74, 144, 226, 0.7)',
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  '&::after': {
    content: '""',
    display: 'block',
    width: '60%',
    height: '3px',
    margin: '10px auto',
    background: 'linear-gradient(90deg, transparent, #4a90e2, transparent)',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.8rem',
  },
});

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '80%',
  maxWidth: '800px',
  height: '500px',
  margin: '0 auto',
  borderRadius: '15px',
  overflow: 'hidden',
  animation: `${glowingBorder} 3s infinite`,
  '&:hover .navigation-arrows': {
    opacity: 1,
  },
  '@media (max-width: 600px)': {
    height: '300px',
    width: '90%',
  },
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '15px',
  animation: `${fadeIn} 0.5s ease-out`,
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const NavigationArrow = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '20px',
  transition: 'all 0.3s ease',
  opacity: 0,
  '&:hover': {
    backgroundColor: 'rgba(74, 144, 226, 0.8)',
    transform: 'translateY(-50%) scale(1.1)',
  },
  zIndex: 2,
});

const ProgressBar = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
  padding: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '20px',
});

const ProgressDot = styled(Box)(({ active }) => ({
  width: active ? '12px' : '10px',
  height: active ? '12px' : '10px',
  borderRadius: '50%',
  backgroundColor: active ? '#4a90e2' : '#666',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.2)',
    backgroundColor: active ? '#4a90e2' : '#999',
  },
}));

const PrelaunchEventTime = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <MainContainer>
      <Title>
        Coinera Pre-Launch Event
      </Title>
      <ImageContainer>
        <NavigationArrow
          className="navigation-arrows"
          onClick={handlePrevious}
          sx={{ left: 10 }}
        >
          <ArrowBackIosNewIcon />
        </NavigationArrow>
        
        <StyledImage
          src={images[currentImage]}
          alt={`Pre-launch event ${currentImage + 1}`}
          loading="lazy"
        />
        
        <NavigationArrow
          className="navigation-arrows"
          onClick={handleNext}
          sx={{ right: 10 }}
        >
          <ArrowForwardIosIcon />
        </NavigationArrow>
      </ImageContainer>
      
      <ProgressBar>
        {images.map((_, index) => (
          <ProgressDot
            key={index}
            active={index === currentImage}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ProgressBar>
    </MainContainer>
  );
};

export default PrelaunchEventTime;