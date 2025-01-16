// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2'; // For success/failure popup
// import axios from 'axios';
// import successSound from '../Assets/success_sound.mp3'; // Importing success sound
// import {
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   TextField,
//   Box,
//   Container,
//   Grid,
//   Typography,
//   CircularProgress,
// } from '@mui/material';

// const TransferCoins = () => {
//   const [userId, setUserId] = useState('');
//   const [amount, setAmount] = useState('');
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const token = localStorage.getItem('authToken'); // Use token from localStorage or context

//   // Fetch users for the select dropdown
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://apiamazingdubai.ipaisa.co.in/api/admin/users', {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Failed to fetch users', error);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   // Handle Coin Transfer
//   const handleTransferCoins = async () => {
//     if (!userId || !amount) {
//       Swal.fire('Error', 'Please select a user and enter the amount', 'error');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/addcoins',
//         {
//           userId: parseInt(userId, 10), // Ensure userId is a number
//           coins: Number(amount), // Convert amount to a number
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.message === 'Coins added successfully') {
//         // Play success sound
//         const audio = new Audio(successSound);
//         audio.play();

//         // Show success popup
//         Swal.fire('Success', 'Coins added successfully!', 'success');
//       }
//     } catch (error) {
//       Swal.fire('Error', 'Failed to transfer coins. Please try again later.', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ paddingTop: 4, marginTop: 6 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Transfer Coins
//       </Typography>

//       {/* Select user */}
//       <FormControl fullWidth margin="normal">
//         <InputLabel id="user-select-label">Select User</InputLabel>
//         <Select
//           labelId="user-select-label"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           label="Select User"
//         >
//           {users.map((user) => (
//             <MenuItem key={user.id} value={user.id}>
//               ({user.id}) {user.firstname} {user.lastname} - {user.email}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       {/* Amount input */}
//       <TextField
//         label="Enter Amount"
//         fullWidth
//         variant="outlined"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         type="number"
//         margin="normal"
//         sx={{ marginBottom: 2 }}
//       />

//       {/* Transfer Button */}
//       <Grid container justifyContent="center">
//         <Grid item xs={12} sm={6}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleTransferCoins}
//             disabled={loading}
//             fullWidth
//             sx={{
//               padding: '12px 16px',
//               fontSize: '16px',
//               textTransform: 'none',
//               boxShadow: 3,
//               borderRadius: 3,
//             }}
//           >
//             {loading ? (
//               <CircularProgress size={24} sx={{ marginRight: 2 }} />
//             ) : (
//               'Transfer Coins'
//             )}
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default TransferCoins;


import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // For success/failure popup
import axios from 'axios';
import successSound from '../Assets/success_sound.mp3'; // Importing success sound
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material';

const TransferCoins = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('authToken'); // Use token from localStorage or context

  // Fetch users for the select dropdown
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://apiamazingdubai.ipaisa.co.in/api/admin/users', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUsers();
  }, [token]);

  // Handle Coin Transfer
  const handleTransferCoins = async () => {
    if (!userId || !amount) {
      Swal.fire('Error', 'Please select a user and enter the amount', 'error');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://apiamazingdubai.ipaisa.co.in/api/admin/addcoins',
        {
          userId: parseInt(userId, 10), // Ensure userId is a number
          coins: Number(amount), // Convert amount to a number
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message) {
        // Play success sound
        const audio = new Audio(successSound);
        audio.play();

        const { user, message } = response.data;

        // Show success popup with custom message
        Swal.fire({
          title: 'Target Achieved!',
          html: `
            <p><strong>${user.firstname} ${user.lastname}</strong> </p>
            <p>Details:</p>
            <ul>
              <li><strong>Target Coins:</strong> ${user.targetCoins}</li>
              <li><strong>Invested Coins:</strong> ${user.investedCoins}</li>
              <li><strong>Target Achieved At:</strong> ${user.updatedAt}</li>
            </ul>
            <p>${message}</p>
          `,
          icon: 'success',
        });
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to transfer coins. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
          Transfer Coins
        </Typography>

        {/* Select user */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="user-select-label" sx={{ color: 'white' }}>
            Select User
          </InputLabel>
          <Select
            labelId="user-select-label"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            label="Select User"
            sx={{ background: 'white' }}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                ({user.id}) {user.firstname} {user.lastname} - {user.email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Amount input */}
        <TextField
          label="Enter Amount"
          fullWidth
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          margin="normal"
          sx={{ marginBottom: 2, background: 'white' }}
        />

        {/* Transfer Button */}
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleTransferCoins}
              disabled={loading}
              fullWidth
              sx={{
                padding: '12px 16px',
                fontSize: '16px',
                textTransform: 'none',
                boxShadow: 3,
                borderRadius: 3,
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ marginRight: 2, color: 'white' }} />
              ) : (
                'Transfer Coins'
              )}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransferCoins;
