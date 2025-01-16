import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import Backgroundimg from '../Assets/backgroundimg.jpg';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call for password reset
    if (email) {
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${Backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 2, sm: 4 },
            borderRadius: '16px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Forgot Password
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ opacity: 0.8 }}>
            Enter your registered email address and we'll send you a link to reset your password.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                '& .MuiInputBase-root': { borderRadius: '8px' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
            >
              Send Reset Link
            </Button>
          </Box>
          {message && (
            <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Button
                href="/login"
                variant="text"
                color="primary"
                sx={{ textTransform: 'none' }}
              >
                Back to Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ForgetPassword;
