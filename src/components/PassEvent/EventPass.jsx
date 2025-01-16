import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import CoinLogo from "../Assets/home_web/coin_img1.png";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";
import Pass_Background from "../Assets/Event_pass/part_pass1.png";
import pass_Background2 from "../Assets/Event_pass/part_pass2.jpg";
import pass_Background3 from "../Assets/Event_pass/part_pass3.jpg";
import JsBarcode from "jsbarcode";

const EventPass = () => {
  const [passNumber, setPassNumber] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const passRef = useRef();
  const barcodeRef = useRef(); // Reference for the barcode element
  const buttonRef = useRef();

  const handlePassNumberChange = (e) => {
    setPassNumber(e.target.value);
  };

  const handleFetchDetails = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/eventpass/${passNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserDetails(response.data.user);
    } catch (error) {
      console.error("Error fetching details", error);
    }
  };

  const generateBarcode = (value) => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: "CODE128", // Barcode format
        lineColor: "black",
        width: 1.5,
        height: 50,
        displayValue: true, // Show value below the barcode
        background: "white",
      });
    }
  };

  useEffect(() => {
    if (userDetails) {
      // Generate barcode when userDetails is set
      generateBarcode(userDetails.eventPass.passNumber);
    }
  }, [userDetails]);

  const generatePDF = () => {
    if (buttonRef.current) {
      buttonRef.current.style.display = "none";
    }

    const element = passRef.current;
    const options = {
      filename: "Coin_Era_Event_Pass.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(() => {
        if (buttonRef.current) {
          buttonRef.current.style.display = "block";
        }
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f0f5",
        padding: 2,
      }}
    >
      <Box
        ref={passRef}
        sx={{
          width: { xs: "90%", sm: "400px" },
          backgroundImage: `url(${pass_Background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          position: "relative",
          color: "#fff",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        {/* Dark overlay for better readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></Box>

        {/* Content Section */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              background:
                userDetails?.occupation === "Student"
                  ? "linear-gradient(135deg, rgb(9, 12, 179) 10%, rgb(9, 106, 197) 90%)"
                  : userDetails?.occupation === "Business"
                    ? "linear-gradient(135deg, rgb(223, 192, 20) 10%, rgb(223, 192, 20) 90%)"
                    : "linear-gradient(135deg, #2196F3 10%, #4CAF50 90%)",
              padding: "30px 20px",
              textAlign: "center",
              color: "#fff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "150px",
                height: "150px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            {/* Content Container */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Coin Logo */}
              <Box
                component="img"
                src={CoinLogo}
                alt="Coin Logo"
                sx={{
                  height: "90px",
                  marginBottom: "15px",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                  background:
                    "linear-gradient(45deg, rgb(8, 8, 8), rgb(44, 76, 95), rgb(29, 1, 54))",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />

              {/* Dynamic Letter 'S' or 'B' */}
              {["Student", "Business"].includes(userDetails?.occupation) && (
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    fontSize: "64px",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    letterSpacing: "5px",
                  }}
                >
                  {userDetails?.occupation === "Student" ? "S" : "B"}
                </Typography>
              )}

              {/* Event Title */}
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  letterSpacing: "2px",
                }}
              >
                CoinEra Event
              </Typography>

              {/* Event Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}
              >
                Experience the future of cryptocurrency
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  height: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  width: "80%",
                  margin: "20px auto",
                }}
              />

              {/* Pass Details */}
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                {userDetails?.occupation === "Student"
                  ? "Special Access Pass"
                  : userDetails?.occupation === "Business"
                    ? "VIP Business Pass"
                    : "Standard Event Pass"}
              </Typography>
            </Box>
          </Box>

          {/* Pass Number Input */}
          {!userDetails && (
            <Box sx={{ padding: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Enter Pass Number
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                label="Pass Number"
                value={passNumber}
                onChange={handlePassNumberChange}
                sx={{
                  marginBottom: 2,
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Default label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff", // Input text color
                    caretColor: "#fff", // Cursor color
                  },
                }}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleFetchDetails}
                sx={{ width: "100%" }}
              >
                Get Details
              </Button>
            </Box>
          )}

          {/* Fetched Event Details */}
          {userDetails && (
            <Box sx={{ padding: 3 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(90deg, #FF9800 30%, #F44336 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Event Details
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  background:
                    "linear-gradient(90deg, #FF9800 30%, #F44336 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                <strong>Name:</strong> {userDetails.fullName}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  background:
                    "linear-gradient(90deg, #FF9800 30%, #F44336 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                <strong>Mobile:</strong> {userDetails.mobileNo}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  background:
                    "linear-gradient(90deg, #FF9800 30%, #F44336 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                <strong>Pass Number:</strong> {userDetails.eventPass.passNumber}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(90deg, rgb(25, 10, 230) 20%, rgb(181, 172, 219) 80%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  letterSpacing: "0.5px",
                  lineHeight: "1.5",
                }}
                gutterBottom
              >
                <strong>Venue & Time:</strong> The Orchid Hotel,{" "}
                Mumbai-Bangalore Highway, Pune. <br />
                Date: <strong>31st January 2025</strong>
                <br></br> Time: <strong>6:00 PM onwards</strong>.<br></br>
                <strong>Followed by- Dinner & Cocktail.</strong>
              </Typography>

              <Divider
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.5)", // Light color for the divider
                  borderStyle: "dashed", // Dashed style
                  margin: "20px 0",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                {userDetails && userDetails.eventPass.passNumber && (
                  <Box
                    sx={{
                      backgroundColor: "white", // White background for the container
                      padding: "10px", // Add padding around the SVG
                      display: "inline-block", // Ensure the box size is tight around the content
                      borderRadius: "5px", // Optional rounded corners
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
                      height: "130px",
                    }}
                  >
                    <svg
                      ref={barcodeRef}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        maxWidth: "100%",
                        marginTop: "30px",
                    
                      }}
                    ></svg>
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {/* Footer Section */}
          <Box
            sx={{
              background: "#6a11cb",
              color: "#fff",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            <Typography variant="body2">
              Please present this pass at the entry gate
            </Typography>
          </Box>

          {/* Download Button */}
          {userDetails && (
            <Box sx={{ textAlign: "center", padding: 2 }}>
              <Button
                ref={buttonRef}
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                onClick={generatePDF}
                sx={{
                  background:
                    "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "12px 24px",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #2575fc 30%, #6a11cb 90%)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
              >
                Download Pass
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EventPass;
