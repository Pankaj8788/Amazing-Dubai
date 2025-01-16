// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid, Container, Box, Avatar, Paper, Button } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const token = localStorage.getItem("authToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user details
//     axios.get('https://apiamazingdubai.ipaisa.co.in/api/public/mydetails', {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       }
//     })
//       .then(response => {
//         setUserData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user profile:', error);
//       });
//   }, [token]);

//   const handleLogout = () => {
//     // Clear token from local storage
//     localStorage.removeItem("authToken");
//     // Navigate to the logout or login page
//     navigate('/logout'); // Adjust the path as per your routing setup
//   };

//   if (!userData) {
//     return <Typography variant="h6">Loading...</Typography>;
//   }

//   return (
//     <Box sx={{ padding: '2rem', backgroundColor: '#f4f6f8', mt: 6 }}>
//       <Container>
//         <Paper sx={{
//           backgroundColor: '#ffffff',
//           borderRadius: 2,
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//           overflow: 'hidden',
//           padding: 2
//         }}>
//           <Card sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
//             <CardContent>
//               <Grid container spacing={3} alignItems="center">
//                 {/* Profile Avatar */}
//                 <Grid item xs={12} sm={4}>
//                   <Avatar
//                     sx={{ width: 120, height: 120, margin: 'auto', border: '4px solid #4caf50' }}
//                     alt={`${userData.firstname} ${userData.lastname}`}
//                     src="/static/images/avatar/1.jpg" // Placeholder, replace with actual image if available
//                   />
//                 </Grid>

//                 {/* Profile Details */}
//                 <Grid item xs={12} sm={8}>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       fontWeight: 'bold',
//                       color: '#4caf50',
//                       marginBottom: 1,
//                     }}
//                   >
//                     {userData.firstname} {userData.lastname}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Role:</strong> {userData.role}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Email:</strong> {userData.email}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Mobile:</strong> {userData.mobileno}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Invested Coins:</strong> {userData.investedCoins}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Target Coins:</strong> {userData.targetCoins}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Target Achieved:</strong> {userData.targetAchieved ? 'Yes' : 'No'}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Previous Target Coins:</strong> {userData.previousTargetCoins}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Previous Target Achieved:</strong> {userData.previousTargetAchieved ? 'Yes' : 'No'}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Member Since:</strong> {new Date(userData.createdAt).toLocaleDateString()}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: 1 }}>
//                     <strong>Last Updated:</strong> {new Date(userData.updatedAt).toLocaleDateString()}
//                   </Typography>
//                   {/* Logout Button */}
//                   <Button
//                     variant="contained"
//                     color="error"
//                     onClick={handleLogout}
//                     sx={{ marginTop: 2 }}
//                   >
//                     Logout
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default UserProfile;


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
