import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TargetSetting = () => {
  const [newTarget, setNewTarget] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdateTarget = async () => {
    if (!newTarget) {
      toast.error("Please enter a target value.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("authToken"); // Fetch token if required
      const response = await axios.put(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/updatetarget",
        { newTarget: parseInt(newTarget) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Adjust if needed
          },
        }
      );

      setSuccessMessage(response.data.message);
      toast.success("Target updated successfully!");
    } catch (error) {
      toast.error("Failed to update target. Please try again.");
      console.error("Error updating target:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f4f6f8",
        height: "100vh",
        background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)",
        mt: 4,
      }}
    >
      <Container>
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            maxWidth: 500,
            margin: "auto",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Update Target
          </Typography>
          <TextField
            label="New Target"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newTarget}
            onChange={(e) => setNewTarget(e.target.value)}
            type="number"
            placeholder="Enter new target value"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpdateTarget}
            disabled={loading}
            sx={{
                  py: 1.5,
                  marginTop:'5px',
                  background: "linear-gradient(135deg,rgb(255, 234, 43),rgb(242, 255, 65))",
                  color: "#000000",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "linear-gradient(135deg,rgb(255, 234, 43),rgb(242, 255, 65))",
                  },
                }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Update Target"
            )}
          </Button>
          {successMessage && (
            <Typography
              variant="body1"
              color="success.main"
              sx={{ marginTop: "1rem", fontWeight: "bold" }}
            >
              {successMessage}
            </Typography>
          )}
        </Paper>
        <ToastContainer />
      </Container>
    </Box>
  );
};

export default TargetSetting;
