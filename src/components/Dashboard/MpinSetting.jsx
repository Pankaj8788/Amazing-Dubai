import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import successuserSound from "../Assets/success_user_create.mp3";

const MpinSetting = () => {
  const [oldMpin, setOldMpin] = useState("");
  const [newMpin, setNewMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showOldMpin, setShowOldMpin] = useState(false);
  const [showNewMpin, setShowNewMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);

  const token = localStorage.getItem("authToken"); // Token from localStorage

  const handleChangeMpin = async (e) => {
    e.preventDefault();

    // Validate MPIN inputs
    const mpinPattern = /^\d{4}$/;
    if (!mpinPattern.test(newMpin) || !mpinPattern.test(confirmMpin)) {
      setErrorMessage("MPIN must be exactly 4 digits.");
      return;
    }

    if (newMpin !== confirmMpin) {
      setErrorMessage("New MPIN and Confirm MPIN must match.");
      return;
    }

    if (oldMpin === "" || newMpin === "" || confirmMpin === "") {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const mpinData = {
        oldMpin,
        newMpin,
      };

      const apiUrl = "https://apiamazingdubai.ipaisa.co.in/api/public/changempin";

      const response = await axios.put(apiUrl, mpinData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const audio = new Audio(successuserSound);
        audio.play();

        Swal.fire({
          title: "Success!",
          text: "MPIN updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        toast.success("MPIN updated successfully!");
      } else {
        setErrorMessage("Failed to update MPIN. Please try again.");
        toast.error("Failed to update MPIN. Please try again.");
      }
    } catch (error) {
      console.error("Error during MPIN change:", error);
      setErrorMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)",
        padding: 4,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper
            elevation={5}
            sx={{
              padding: 4,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Change MPIN
            </Typography>
            {errorMessage && (
              <Typography
                color="error"
                align="center"
                sx={{ marginBottom: 2, fontWeight: "bold" }}
              >
                {errorMessage}
              </Typography>
            )}
            <form onSubmit={handleChangeMpin}>
              <TextField
                label="Old MPIN"
                type={showOldMpin ? "text" : "password"}
                fullWidth
                value={oldMpin}
                onChange={(e) => setOldMpin(e.target.value)}
                required
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowOldMpin(!showOldMpin)}>
                        {showOldMpin ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: 2,
                  "& .MuiInputBase-root": { borderRadius: "8px" },
                  "& .MuiOutlinedInput-root": {
                    background: "#fff",
                  },
                }}
              />
              <TextField
                label="New MPIN"
                type={showNewMpin ? "text" : "password"}
                fullWidth
                value={newMpin}
                onChange={(e) => setNewMpin(e.target.value)}
                required
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewMpin(!showNewMpin)}>
                        {showNewMpin ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: 2,
                  "& .MuiInputBase-root": { borderRadius: "8px" },
                  "& .MuiOutlinedInput-root": {
                    background: "#fff",
                  },
                }}
              />
              <TextField
                label="Confirm MPIN"
                type={showConfirmMpin ? "text" : "password"}
                fullWidth
                value={confirmMpin}
                onChange={(e) => setConfirmMpin(e.target.value)}
                required
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmMpin(!showConfirmMpin)}>
                        {showConfirmMpin ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom: 3,
                  "& .MuiInputBase-root": { borderRadius: "8px" },
                  "& .MuiOutlinedInput-root": {
                    background: "#fff",
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  background: "linear-gradient(135deg,rgb(255, 234, 43),rgb(242, 255, 65))",
                  color: "#000000",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "linear-gradient(135deg,rgb(255, 234, 43),rgb(242, 255, 65))",
                  },
                }}
              >
                Change MPIN
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default MpinSetting;
