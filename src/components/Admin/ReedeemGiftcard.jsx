import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  CircularProgress,
  Container
} from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const RedeemGiftcard = () => {
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!barcode.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter a gift card barcode'
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const token = localStorage.getItem("authToken"); // Assume token is stored in localStorage
      
      const response = await axios.post(
        'https://apiamazingdubai.ipaisa.co.in/api/admin/redeemgiftcard',
        { barcode },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      // Handle successful redemption
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: response.data.message,
        footer: response.data.note
      });
      
      // You can do something with the response data if needed
      console.log('Gift card details:', response.data.giftCard);
      
      // Reset the form
      setBarcode('');
      
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message || 'Failed to redeem gift card'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while processing your request'
        });
      }
      console.error('Error redeeming gift card:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mt: 12, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Redeem Gift Card
        </Typography>
        
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="barcode"
                label="Gift Card Barcode"
                name="barcode"
                autoComplete="off"
                autoFocus
                value={barcode}
                onChange={handleBarcodeChange}
                placeholder="Enter gift card barcode"
                disabled={loading}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading || !barcode.trim()}
              >
                {loading ? <CircularProgress size={24} /> : 'Redeem Gift Card'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default RedeemGiftcard;