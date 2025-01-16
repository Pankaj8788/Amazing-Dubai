// import React, { useState } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Container,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Backgroundimg from "../Assets/background2.jpeg";
// import Logo from "./../Assets/Logo.jpg";
// import Backgroundimg2 from "../Assets/desktopscreen.jpg";
// import Newlogin from "../Assets/loginnew.jpg";
// import CoinLogo from "../Assets/home_web/coin_img.png"

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const theme = useTheme();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const userData = {
//         mobileno: username,
//         mpin: password,
//       };

//       const apiUrl = "https://apiamazingdubai.ipaisa.co.in/api/public/login";

//       const response = await axios.post(apiUrl, userData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 200) {
//         const { token, user } = response.data;
//         const role = user.role;

//         // Store token and role in localStorage
//         localStorage.setItem("authToken", token);
//         localStorage.setItem("role", role);

//         toast.success("Login successful!");

//         // Navigate based on role
//         if (role === "USER") {
//           navigate("/userdashboard");
//         } else {
//           navigate("/dashboard");
//         }
//       } else {
//         setErrorMessage("Login failed! Please try again.");
//         toast.error("Login failed! Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setErrorMessage("An error occurred. Please try again.");
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Box
//         sx={{
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundImage: `url(${Backgroundimg2})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: 2,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//             sx={{
//               height: "100%",
//               // marginLeft: { xs: 0, sm: "28%" }, // responsive margin
//             }}
//           >
//             <Grid item xs={12} md={6}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   padding: { xs: 2, sm: 4 },
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   borderRadius: "16px",
//                   // background:
//                   //   "linear-gradient(180deg,rgb(196, 196, 9),rgb(127, 168, 13))",
//                   background: "linear-gradient(180deg, #FFD700, #8A681D)",


//                   color: "#fff",
//                   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               >
//                 <img
//                   src={CoinLogo}
//                   alt="Amazing Dubai Logo"
//                   style={{
//                     height: "190px",
//                     marginRight: "8px",
//                     borderRadius: "130px",
//                   }}
//                 />
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{ fontWeight: "bold", marginTop: 2 }}
//                 >
//                   Welcome Back To Get Reward
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   gutterBottom
//                   sx={{ opacity: 0.8, textAlign: "center" }}
//                 >
//                   Please login to your account
//                 </Typography>
//                 {errorMessage && (
//                   <Typography color="error" gutterBottom>
//                     {errorMessage}
//                   </Typography>
//                 )}
//                 <Box
//                   component="form"
//                   onSubmit={handleLogin}
//                   sx={{ width: "100%", mt: 2 }}
//                 >
//                   <TextField
//                     label="Mobile Number"
//                     variant="filled"
//                     fullWidth
//                     margin="normal"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.15)",
//                       input: { color: "#fff" },
//                       "& .MuiInputLabel-root": { color: "#ddd" },
//                       "& .MuiInputBase-root": { borderRadius: "8px" },
//                     }}
//                   />
//                   <TextField
//                     label="MPIN"
//                     type="password"
//                     variant="filled"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.15)",
//                       input: { color: "#fff" },
//                       "& .MuiInputLabel-root": { color: "#ddd" },
//                       "& .MuiInputBase-root": { borderRadius: "8px" },
//                     }}
//                   />
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       mt: 2,
//                       py: 1.5,
//                       background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
//                       color: "#fff",
//                       fontWeight: "bold",
//                       borderRadius: "8px",
//                       "&:hover": {
//                         background: "linear-gradient(135deg,rgb(128, 41, 26), #ff416c)",
//                       },
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Box>
//                 <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
//                   <Grid item>
//                     <Link
//                       to="/forgot-password"
//                       style={{ textDecoration: "none", color: "#fff" }}
//                     >
//                       <Typography variant="body2">Forgot MPIN?</Typography>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link
//                       to="/createuser"
//                       style={{ textDecoration: "none", color: "#fff" }}
//                     >
//                       <Typography variant="body2">
//                         Don't have an account? Sign Up
//                       </Typography>
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backgroundimg2 from "../Assets/desktopscreen.jpg";
import CoinLogo from "../Assets/home_web/coin_img.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [mpinError, setMpinError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset errors
    setMobileError("");
    setMpinError("");

    // Validate Mobile Number (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(username)) {
      setMobileError("Mobile number must be 10 digits.");
      return;
    }

    // Validate MPIN (4 digits)
    const mpinRegex = /^[0-9]{4}$/;
    if (!mpinRegex.test(password)) {
      setMpinError("MPIN must be 4 digits.");
      return;
    }

    try {
      const userData = {
        mobileno: username,
        mpin: password,
      };

      const apiUrl = "https://apiamazingdubai.ipaisa.co.in/api/public/login";

      const response = await axios.post(apiUrl, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        const role = user.role;

        // Store token and role in localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("role", role);

        toast.success("Login successful!");

        // Navigate based on role
        if (role === "USER") {
          navigate("/userdashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        // Get dynamic error message from response
        const errorMessage = response.data.message || "An error occurred. Please try again.";
        setErrorMessage(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error during login:", error);
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      setErrorMessage(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Backgroundimg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: "100%",
            }}
          >
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: { xs: 2, sm: 4 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #FFD700, #8A681D)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  src={CoinLogo}
                  alt="Amazing Dubai Logo"
                  style={{
                    height: "190px",
                    marginRight: "8px",
                    borderRadius: "130px",
                  }}
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold", marginTop: 2 }}
                >
                  Welcome Back To Get Reward
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: 0.8, textAlign: "center" }}
                >
                  Please login to your account
                </Typography>
                {errorMessage && (
                  <Typography color="error" gutterBottom>
                    {errorMessage}
                  </Typography>
                )}
                <Box
                  component="form"
                  onSubmit={handleLogin}
                  sx={{ width: "100%", mt: 2 }}
                >
                  <TextField
                    label="Mobile Number"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    error={!!mobileError}
                    helperText={mobileError}
                    inputProps={{
                      maxLength: 10, // Restrict to 10 digits
                    }}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      input: { color: "#fff" },
                      "& .MuiInputLabel-root": { color: "#ddd" },
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                    }}
                  />
                  <TextField
                    label="MPIN"
                    type="password"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    error={!!mpinError}
                    helperText={mpinError}
                    inputProps={{
                      maxLength: 4, // Restrict to 4 digits
                    }}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      input: { color: "#fff" },
                      "& .MuiInputLabel-root": { color: "#ddd" },
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "linear-gradient(135deg,rgb(128, 41, 26), #ff416c)",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
                <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                  <Grid item>
                    <Link
                      to="/forgot-password"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <Typography variant="body2">Forgot MPIN?</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/createuser"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <Typography variant="body2">
                        Don't have an account? Sign Up
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ToastContainer />
    </div>
  );
}

export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Container,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Backgroundimg2 from "../Assets/desktopscreen.jpg";
// import CoinLogo from "../Assets/home_web/coin_img.png";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [mobileError, setMobileError] = useState("");
//   const [mpinError, setMpinError] = useState("");
//   const navigate = useNavigate();
//   const theme = useTheme();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setMobileError("");
//     setMpinError("");
//     setErrorMessage(""); // Clear any previous error message

//     // Validate Mobile Number (10 digits)
//     const mobileRegex = /^[0-9]{10}$/;
//     if (!mobileRegex.test(username)) {
//       setMobileError("Mobile number must be 10 digits.");
//       return;
//     }

//     // Validate MPIN (4 digits)
//     const mpinRegex = /^[0-9]{4}$/;
//     if (!mpinRegex.test(password)) {
//       setMpinError("MPIN must be 4 digits.");
//       return;
//     }

//     try {
//       const userData = {
//         mobileno: username,
//         mpin: password,
//       };

//       const apiUrl = "https://apiamazingdubai.ipaisa.co.in/api/public/login";

//       const response = await axios.post(apiUrl, userData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       // Check the response status and the role
//       console.log("Response Data: ", response.data);  // Debugging log

//       if (response.status === 200 && response.data.token) {
//         const { token, user } = response.data;
//         const role = user.role;
        
//         // Store token and role in localStorage
//         localStorage.setItem("authToken", token);
//         localStorage.setItem("role", role);

//         // Navigate based on role
//         toast.success("Login successful!");
//         console.log("Navigating to dashboard for role: ", role);  // Debugging log

//         if (role === "USER") {
//           navigate("/userdashboard");
//         } else {
//           navigate("/dashboard");
//         }
//       } else {
//         // Check for specific error message from response
//         const errorMessage = response.data.message || "Login failed! Please try again.";
//         setErrorMessage(errorMessage);
//         toast.error(errorMessage);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
//       setErrorMessage(errorMessage);
//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <div>
//       <Box
//         sx={{
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundImage: `url(${Backgroundimg2})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: 2,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//             sx={{
//               height: "100%",
//             }}
//           >
//             <Grid item xs={12} md={6}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   padding: { xs: 2, sm: 4 },
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   borderRadius: "16px",
//                   background: "linear-gradient(180deg, #FFD700, #8A681D)",
//                   color: "#fff",
//                   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               >
//                 <img
//                   src={CoinLogo}
//                   alt="Amazing Dubai Logo"
//                   style={{
//                     height: "190px",
//                     marginRight: "8px",
//                     borderRadius: "130px",
//                   }}
//                 />
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{ fontWeight: "bold", marginTop: 2 }}
//                 >
//                   Welcome Back To Get Reward
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   gutterBottom
//                   sx={{ opacity: 0.8, textAlign: "center" }}
//                 >
//                   Please login to your account
//                 </Typography>
//                 {errorMessage && (
//                   <Typography color="error" gutterBottom>
//                     {errorMessage}
//                   </Typography>
//                 )}
//                 <Box
//                   component="form"
//                   onSubmit={handleLogin}
//                   sx={{ width: "100%", mt: 2 }}
//                 >
//                   <TextField
//                     label="Mobile Number"
//                     variant="filled"
//                     fullWidth
//                     margin="normal"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     error={!!mobileError}
//                     helperText={mobileError}
//                     inputProps={{
//                       maxLength: 10, // Restrict to 10 digits
//                     }}
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.15)",
//                       input: { color: "#fff" },
//                       "& .MuiInputLabel-root": { color: "#ddd" },
//                       "& .MuiInputBase-root": { borderRadius: "8px" },
//                     }}
//                   />
//                   <TextField
//                     label="MPIN"
//                     type="password"
//                     variant="filled"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     error={!!mpinError}
//                     helperText={mpinError}
//                     inputProps={{
//                       maxLength: 4, // Restrict to 4 digits
//                     }}
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.15)",
//                       input: { color: "#fff" },
//                       "& .MuiInputLabel-root": { color: "#ddd" },
//                       "& .MuiInputBase-root": { borderRadius: "8px" },
//                     }}
//                   />
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       mt: 2,
//                       py: 1.5,
//                       background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
//                       color: "#fff",
//                       fontWeight: "bold",
//                       borderRadius: "8px",
//                       "&:hover": {
//                         background: "linear-gradient(135deg,rgb(128, 41, 26), #ff416c)",
//                       },
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Box>
//                 <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
//                   <Grid item>
//                     <Link
//                       to="/forgot-password"
//                       style={{ textDecoration: "none", color: "#fff" }}
//                     >
//                       <Typography variant="body2">Forgot MPIN?</Typography>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link
//                       to="/createuser"
//                       style={{ textDecoration: "none", color: "#fff" }}
//                     >
//                       <Typography variant="body2">
//                         Don't have an account? Sign Up
//                       </Typography>
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;
