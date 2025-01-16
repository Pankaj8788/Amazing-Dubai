import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";
import Backgroundimg from "../Assets/backgroundimg.jpg"; // Import the background image

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true); // Start loading
    setError(null); // Reset previous error

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/login", // API URL
        userData, // The user data to be sent in the request body
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: "JSESSIONID=E8B31ADE85997C98B6808A878C4010C5", // Include session cookie
          },
        }
      );
      // Handle success (you can do something with the response here)
      console.log(response.data);
      setMessage("User created successfully!");
    } catch (error) {
      // Handle error
      console.error(error);
      setError("Failed to create user. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${Backgroundimg})`, // Use the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 2, sm: 4 },
            borderRadius: "16px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Create User
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ opacity: 0.8 }}>
            Enter the details to create a new user account.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                "& .MuiInputBase-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                "& .MuiInputBase-root": { borderRadius: "8px" },
              }}
            />
            {error && <Typography color="error">{error}</Typography>}
            {message && (
              <Typography color="success.main" sx={{ mt: 2 }}>
                {message}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Create User"
              )}
            </Button>
          </Box>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Button
                href="/login"
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
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

export default CreateUser;
