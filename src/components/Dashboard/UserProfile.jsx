import React, { useEffect, useState } from 'react';
import { Box, Container, Paper, Avatar, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details
    axios
      .get('https://apiamazingdubai.ipaisa.co.in/api/public/mydetails', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/logout');
  };

  if (!userData) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Paper
          sx={{
            maxWidth: 400,
            margin: 'auto',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: 2,
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                marginBottom: 2,
                border: '3px solid #4caf50',
              }}
              alt={`${userData.firstname} ${userData.lastname}`}
              src={userData.profilePicture || '/static/images/avatar/1.jpg'} // Replace with actual image URL if available
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {userData.firstname} {userData.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
             
              <strong>Email:</strong> {userData.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Mobile:</strong> {userData.mobileno}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Invested Coins:</strong> {userData.investedCoins}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Target Coins:</strong> {userData.targetCoins}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Target Achieved:</strong> {userData.targetAchieved ? 'Yes' : 'No'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Previous Target Coins:</strong> {userData.previousTargetCoins}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Member Since:</strong> {new Date(userData.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            <strong>Last Updated:</strong> {new Date(userData.updatedAt).toLocaleDateString()}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2 }}>
              <Button variant="outlined" fullWidth sx={{ marginRight: 1 }}>
                My account
              </Button>
              <Button
                variant="contained"
                color="error"
                fullWidth
                sx={{ marginLeft: 1 }}
                onClick={handleLogout}
              >
                Sign out
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UserProfile;
