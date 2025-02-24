// import React from 'react'

// const GiftCard = () => {
//   return (
//     <div>
//       hallo
//     </div>
//   )
// }

// export default GiftCard

// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Paper } from '@mui/material';
// import Barcode from 'react-barcode';
// import Backgroundstartimg from '../Assets/GiftCard/stars.png'
// import Ribanimg from '../Assets/GiftCard/riban.png'
// import Eraxlogoimg from '../Assets/GiftCard/EraxLogo.png'
// import Coineranameimg from '../Assets/GiftCard/CoinEraname.png'

// const GiftCard = () => {
//   const [amount, setAmount] = useState('');
//   const [barcodeData, setBarcodeData] = useState('');
//   const [formDisabled, setFormDisabled] = useState(false);

//   // Handle amount input change
//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   // Handle submit button click
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setBarcodeData(amount); // Set the barcode data to the amount entered
//     setFormDisabled(true); // Disable the form after submitting
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 15 }}>
//       {/* First Paper: Input Form */}
//       {!formDisabled && (
//         <Paper sx={{ padding: 3, marginBottom: 3, width: 300, boxShadow: 2 }}>
//           <Typography variant="h6" gutterBottom>
//             Generate Gift Card Voucher
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Enter Amount"
//               type="number"
//               value={amount}
//               onChange={handleAmountChange}
//               fullWidth
//               required
//               sx={{ marginBottom: 2 }}
//             />
//             <Button variant="contained" color="primary" type="submit" fullWidth>
//               Generate Voucher
//             </Button>
//           </form>
//         </Paper>
//       )}

//       {/* Second Paper: Generated Barcode */}
//       {formDisabled && barcodeData && (
//         <Paper sx={{ padding: 3, width: 300, boxShadow: 2 }}>
//           <Typography variant="h6" gutterBottom>
//             Generated Barcode:
//           </Typography>
//           <Barcode value={barcodeData} />
//           <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
//             Scanned Amount: {barcodeData}
//           </Typography>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default GiftCard;
import React, { useState } from 'react';
import { Box, Typography, Paper, Button, TextField } from '@mui/material';
import Barcode from 'react-barcode';
import Ribanimg from '../Assets/GiftCard/riban.png';
import Eraxlogoimg from '../Assets/GiftCard/EraxLogo.png';
import Coineranameimg from '../Assets/GiftCard/CoinEraname.png';
import Backgroundstarsimg from '../Assets/GiftCard/stars.png';
import CoinLogo from "../Assets/home_web/coin_img1.png"; // Coin Logo used in the hero section


const GiftCard = () => {
  const [amount, setAmount] = useState('');
  const [showVoucher, setShowVoucher] = useState(false);

  // Coin calculation (1 Coin = 21 INR)
  const coinValue = (amount / 21).toFixed(3);

  const handleGenerateVoucher = () => {
    if (amount > 0) {
      setShowVoucher(true);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        padding: 2,
      }}
    >
      {/* Input Section */}
      {!showVoucher && (
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h4" sx={{ color: 'gold', marginBottom: 2 }}>
            Generate Your Gift Card
          </Typography>
          <TextField
            type="number"
            label="Enter Amount (₹)"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{
              input: { color: '#fff' },
              label: { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'gold' },
                '&:hover fieldset': { borderColor: '#ffd700' },
                '&.Mui-focused fieldset': { borderColor: '#ffd700' },
              },
              marginBottom: 2,
              width: '300px',
            }}
          />
          <br />
          <Button
            variant="contained"
            onClick={handleGenerateVoucher}
            sx={{
              backgroundColor: 'gold',
              color: '#000',
              '&:hover': { backgroundColor: '#ffd700' },
              padding: '10px 20px',
            }}
          >
            Generate Voucher
          </Button>
        </Box>
      )}

      {/* Voucher Design */}
      {showVoucher && (
        <Paper
          sx={{
            width: '90%',
            maxWidth: 600,
            padding: 3,
            position: 'relative',
            // backgroundImage: `url(${Backgroundstarsimg})`,
            backgroundSize: 'cover',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            border: '1px solid gold',
            boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.7)',
          }}
        >
          {/* Top Logo */}
          <img
            src={Eraxlogoimg}
            alt="Erax Logo"
            style={{
              width: '280px',
              position: 'absolute',
              top: 1,
              left: 1,
            }}
          />

          {/* Central Coin Design */}
          

          {/* Text */}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 2, color: 'gold', fontWeight: 'bold' }}
          >
            CRYPTO FOR EVERYONE EVERYWHERE
          </Typography>

          <img
           src={CoinLogo}
            variant="h4"
            sx={{  height: "190px",
              marginRight: "8px",
              borderRadius: "130px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", }}
          />
            
          

          {/* Dynamic Values */}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginY: 2 }}>
            {/* Amount in Rupees */}
            <Box
              sx={{
                borderRadius: '50%',
                border: '2px solid gold',
                padding: '16px',
                textAlign: 'center',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'gold',
              }}
            >
              ₹ {amount}
            </Box>

            {/* Coin Value */}
            <Box
              sx={{
                borderRadius: '50%',
                border: '2px solid gold',
                padding: '16px',
                textAlign: 'center',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'gold',
              }}
            >
              {coinValue} Coins
            </Box>
          </Box>

          {/* Barcode */}
          <Box sx={{ marginTop: 2 }}>
            <Barcode value={amount.toString()} />
          </Box>

          {/* Back Button */}
          <Button
            variant="contained"
            onClick={() => setShowVoucher(false)}
            sx={{
              backgroundColor: 'gold',
              color: '#000',
              '&:hover': { backgroundColor: '#ffd700' },
              marginTop: 3,
            }}
          >
            Back
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default GiftCard;
