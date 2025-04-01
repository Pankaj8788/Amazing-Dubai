// import { Container, Box, Card, CardContent, Typography, TextField, CircularProgress, Chip } from "@mui/material";
// import { styled } from "@mui/system";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GiftCardListContainer = styled(Box)({
//   padding: "16px",
//   marginTop: "20px",
// });

// const GiftcardList = () => {
//   const [giftCards, setGiftCards] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     axios
//       .get("https://apiamazingdubai.ipaisa.co.in/api/admin/getallgiftcards", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setGiftCards(response.data.giftCards);
//         setFilteredCards(response.data.giftCards);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching gift cards:", error);
//         setLoading(false);
//       });
//   }, [token]);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = giftCards.filter(
//       (card) =>
//         card.barcode.toLowerCase().includes(value) ||
//         card.amount.toString().includes(value)
//     );
//     setFilteredCards(filtered);
//   };

//   return (
//     <GiftCardListContainer>
//       <Container maxWidth="md">
//         <TextField
//           fullWidth
//           label="Search Gift Cards"
//           variant="outlined"
//           value={searchTerm}
//           onChange={handleSearch}
//           sx={{ mb: 2,mt:6 }}   
//         />

//         {loading ? (
//           <CircularProgress />
//         ) : (
//           filteredCards.map((card) => (
//             <Card
//               key={card.id}
//               sx={{
//                 mb: 2,
//                 p: 2,
//                 borderLeft: `42px solid ${card.isRedeemed ? "red" : "green"}`,
//                 borderRight: `42px solid ${card.isRedeemed ? "red" : "green"}`,
//                 backgroundColor: card.isRedeemed ? "#ffe6e6" : "#e6ffe6",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//                 borderRadius: "108px",
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
//                   Barcode: {card.barcode}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Amount:</strong> ${card.amount}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Coin Value:</strong> {card.coinvalue}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Coin Rate:</strong> {card.coinrate}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Created At:</strong> {new Date(card.createdAt).toLocaleString()}
//                 </Typography>
//                 <Chip
//                   label={card.isRedeemed ? "Redeemed" : "Not Redeemed"}
//                   sx={{
//                     mt: 1,
//                     color: "#fff",
//                     backgroundColor: card.isRedeemed ? "red" : "green",
//                     fontWeight: "bold",
//                   }}
//                 />
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </Container>
//     </GiftCardListContainer>
//   );
// };

// export default GiftcardList;

// import React, { useState, useEffect } from 'react';
// import { 
//   Container,
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   CircularProgress,
//   Grid,
//   InputAdornment
// } from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';

// const StyledCard = styled(Card)(({ theme, isredeemed }) => ({
//   transition: 'transform 0.2s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
//   borderRadius: 12,
//   overflow: 'hidden',
//   backgroundColor: isredeemed === 'true' ? "#ffe6e6" : "#e6ffe6"
// }));

// const CardHeader = styled(Box)(({ theme }) => ({
//   background: 'linear-gradient(45deg,rgb(189, 210, 25) 30%,rgb(229, 243, 33) 30%)',
//   padding: '16px',
//   color: 'white'
// }));

// const StyledCardContent = styled(CardContent)({
//   padding: '20px',
//   '&:last-child': {
//     paddingBottom: '20px',
//   },
// });

// const InfoRow = styled(Box)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: '12px',
// });

// const GiftCardList = () => {
//   const [giftCards, setGiftCards] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
    
//     fetch("https://apiamazingdubai.ipaisa.co.in/api/admin/getallgiftcards", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setGiftCards(data.giftCards);
//         setFilteredCards(data.giftCards);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching gift cards:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
    
//     const filtered = giftCards.filter(
//       (card) =>
//         card.barcode.toLowerCase().includes(value) ||
//         card.amount.toString().includes(value)
//     );
//     setFilteredCards(filtered);
//   };

//   return (
//     <Container maxWidth="xl">
//       <Box sx={{ py: 4 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Search by barcode or amount..."
//           value={searchTerm}
//           onChange={handleSearch}
//           sx={{ mb: 4, mt: 6 }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />

//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
//             <CircularProgress />
//           </Box>
//         ) : (
//           <Grid container spacing={3}>
//             {filteredCards.map((card) => (
//               <Grid item xs={12} md={6} lg={4} key={card.barcode}>
//                 <StyledCard 
//                   elevation={3}
//                   isredeemed={card.isRedeemed.toString()}
//                 >
//                   <CardHeader>
//                     <Box display="flex" justifyContent="space-between" alignItems="center">
//                       <Typography variant="h6" component="h3">
//                         Gift Card
//                       </Typography>
//                       <Typography variant="body2">
//                         {new Date(card.createdAt).toLocaleDateString()}
//                       </Typography>
//                     </Box>
//                   </CardHeader>
//                   <StyledCardContent>
//                     <InfoRow>
//                       <Typography color="textSecondary">Barcode</Typography>
//                       <Typography sx={{ fontFamily: 'monospace', fontWeight: 500 }}>
//                         {card.barcode}
//                       </Typography>
//                     </InfoRow>
//                     <InfoRow>
//                       <Typography color="textSecondary">Amount</Typography>
//                       <Typography color="success.main" sx={{ fontWeight: 'bold' }}>
//                         ${card.amount}
//                       </Typography>
//                     </InfoRow>
//                     <InfoRow>
//                       <Typography color="textSecondary">Coin Value</Typography>
//                       <Typography>{card.coinvalue}</Typography>
//                     </InfoRow>
//                     <InfoRow>
//                       <Typography color="textSecondary">Coin Rate</Typography>
//                       <Typography>{card.coinrate}</Typography>
//                     </InfoRow>
//                     <InfoRow>
//                       <Typography color="textSecondary">Status</Typography>
//                       <Typography color={card.isRedeemed ? "error.main" : "success.main"}>
//                         {card.isRedeemed ? "Redeemed" : "Available"}
//                       </Typography>
//                     </InfoRow>
//                     <Box sx={{ pt: 2, mt: 2, borderTop: '1px solid #eee' }}>
//                       <Typography variant="caption" color="text.secondary">
//                         Created: {new Date(card.createdAt).toLocaleTimeString()}
//                       </Typography>
//                     </Box>
//                   </StyledCardContent>
//                 </StyledCard>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default GiftCardList;

import React, { useState, useEffect } from 'react';
import { 
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  Grid,
  InputAdornment
} from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const StyledCard = styled(Card)(({ theme, isredeemed }) => ({
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  borderRadius: 12,
  overflow: 'hidden',
  backgroundColor: isredeemed === 'true' ? "#ffe6e6" : "#e6ffe6"
}));

const CardHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, rgb(189, 210, 25) 30%, rgb(229, 243, 33) 30%)',
  padding: '16px',
  color: 'white'
}));

const StyledCardContent = styled(CardContent)({
  padding: '20px',
  '&:last-child': {
    paddingBottom: '20px',
  },
});

const InfoRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
});

const GiftCardList = () => {
  const [giftCards, setGiftCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    
    fetch("https://apiamazingdubai.ipaisa.co.in/api/admin/getallgiftcards", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGiftCards(data.giftCards);
        setFilteredCards(data.giftCards);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gift cards:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = giftCards.filter(
      (card) =>
        card.barcode.toLowerCase().includes(value) ||
        card.amount.toString().includes(value)
    );
    setFilteredCards(filtered);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by barcode or amount..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ 
            mb: 4,
            mt: 6,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgb(189, 210, 25)',
              },
              '&:hover fieldset': {
                borderColor: 'rgb(229, 243, 33)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(189, 210, 25)',
              },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgb(189, 210, 25)' }} />
              </InputAdornment>
            ),
          }}
        />

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
            <CircularProgress sx={{ color: 'rgb(189, 210, 25)' }} />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredCards.map((card) => (
              <Grid item xs={12} md={6} lg={4} key={card.barcode}>
                <StyledCard 
                  elevation={3}
                  isredeemed={card.isRedeemed.toString()}
                >
                  <CardHeader>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" component="h3" sx={{ 
                        color: '#000',
                        fontWeight: 'bold'
                      }}>
                        Gift Card
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#000' }}>
                        {new Date(card.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </CardHeader>
                  <StyledCardContent>
                    <InfoRow>
                      <Typography color="textSecondary">Barcode</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontWeight: 500 }}>
                        {card.barcode}
                      </Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography color="textSecondary">Amount</Typography>
                      <Typography color="success.main" sx={{ fontWeight: 'bold' }}>
                        ${card.amount}
                      </Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography color="textSecondary">Coin Value</Typography>
                      <Typography>{card.coinvalue}</Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography color="textSecondary">Coin Rate</Typography>
                      <Typography>{card.coinrate}</Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography color="textSecondary">Status</Typography>
                      <Typography color={card.isRedeemed ? "error.main" : "success.main"}>
                        {card.isRedeemed ? "Redeemed" : "Available"}
                      </Typography>
                    </InfoRow>
                    <Box sx={{ pt: 2, mt: 2, borderTop: '1px solid #eee' }}>
                      <Typography variant="caption" color="text.secondary">
                        Created: {new Date(card.createdAt).toLocaleTimeString()}
                      </Typography>
                    </Box>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default GiftCardList;