// import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import axios from 'axios';

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     const token = localStorage.getItem("authToken");

//     try {
//       const response = await axios.post(
//         'https://amazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber: passNumber },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data && response.data.message) {
//         setMessage(response.data.message); // Set success message
//         console.log(response.data.user); // Optionally log user details from the response
//       } else {
//         setMessage("Failed to mark attendance.");
//       }
//     } catch (error) {
//       setError("Error marking attendance.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Scan Your Barcode</h2>

//       <BarcodeScannerComponent
//         width={500}
//         height={500}
//         onScan={handleScan}
//         onError={handleError}
//       />

//       {/* Display scanned barcode */}
//       {scannedData && (
//         <div>
//           <h3>Scanned Pass Number: {scannedData}</h3>
//         </div>
//       )}

//       {/* Display success or error message */}
//       {message && (
//         <div style={{ color: 'green', marginTop: '20px' }}>
//           <h4>{message}</h4>
//         </div>
//       )}

//       {error && (
//         <div style={{ color: 'red', marginTop: '20px' }}>
//           <h4>{error}</h4>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BarcodeScanner;

// import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import axios from 'axios';
// import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'https://amazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         setMessage(response.data.message); // Set success message
//         console.log(response.data.user); // Optionally log user details from the response
//       } else {
//         setMessage("Failed to mark attendance.");
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("Error marking attendance. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };

//   return (
//     <Box sx={{ textAlign: 'center', padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode to mark attendance
//         </Typography>

//         <BarcodeScannerComponent
//           width={500}
//           height={500}
//           onScan={handleScan}
//           onError={handleError}
//         />

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">Scanned Pass Number: {scannedData}</Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: 'green', marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: 'red', marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={resetMessages}
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

// import React, { useState } from 'react';
// import axios from 'axios';
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// const PassScan = () => {
//   const [passNumber, setPassNumber] = useState('');
//   const [scanResult, setScanResult] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const handleScan = (data) => {
//     if (data) {
//       setPassNumber(data.text);
//       markAttendance(data.text);
//     }
//   };
//   const handleError = (err) => {
//     console.error(err);
//     setErrorMessage('Error scanning barcode.');
//   };
//   const markAttendance = async (passNumber) => {
//     try {
//         const token = localStorage.getItem("authToken");
//      const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       setScanResult(response.data);
//       setErrorMessage('');
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Failed to mark attendance. Please try again.');
//     }
//   };
//   return (
//     <div>
//       <h2>Scan Pass to Mark Attendance</h2>
//       <BarcodeScannerComponent
//         width="100%"
//         height="400px"
//         onUpdate={(err, result) => {
//           if (result) {
//             handleScan(result);
//           } else {
//             handleError(err);
//           }
//         }}
//       />
//       {scanResult && (
//         <div>
//           <h3>Scan Result</h3>
//           <p>Pass Number: {scanResult.user.passNumber}</p>
//           <p>Event Date (IST): {new Date(scanResult.user.eventDate).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
//           <p>Attendance Status: {scanResult.user.isPresent ? 'Marked Present' : 'Not Present'}</p>
//         </div>
//       )}
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };
// export default PassScan;

// import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import axios from 'axios';
// import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//       console.log("Scanned Data: ", data);  // Log the scanned data
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber }, // Sending the scanned passNumber in the request body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with the token
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         setMessage(response.data.message); // Set success message
//         console.log(response.data.user); // Optionally log user details from the response

//         // Handle user event details if needed (like isPresent)
//         const isPresent = response.data.user.isPresent ? 'Present' : 'Absent';
//         setMessage(`Attendance marked as: ${isPresent}`); // Display present/absent status
//       } else {
//         setMessage("Failed to mark attendance.");
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("Error marking attendance. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };

//   return (
//     <Box sx={{ textAlign: 'center', padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode to mark attendance
//         </Typography>

//         <BarcodeScannerComponent
//           width={500}
//           height={500}
//           onScan={handleScan}
//           onError={handleError}
//         />

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">Scanned Pass Number: {scannedData}</Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: 'green', marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: 'red', marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={resetMessages}
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

// import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import axios from 'axios';
// import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
// import Swal from 'sweetalert2'; // Import sweetalert2 for alerts

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       localStorage.setItem('passNumber', data.text); // Save passNumber in localStorage
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//       console.log("Scanned Data: ", data.text);  // Log the scanned data
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber }, // Sending the scanned passNumber in the request body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with the token
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         // Show success message in SweetAlert
//         Swal.fire({
//           title: 'Success',
//           text: response.data.message,
//           icon: 'success',
//         });

//         // Handle user event details if needed (like isPresent)
//         const isPresent = response.data.user.isPresent ? 'Present' : 'Absent';
//         setMessage(`Attendance marked as: ${isPresent}`); // Display present/absent status
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: "Failed to mark attendance.",
//           icon: 'error',
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("Error marking attendance. Please try again.");
//       console.error("Error:", error);
//       Swal.fire({
//         title: 'Error',
//         text: "Error marking attendance. Please try again.",
//         icon: 'error',
//       });
//     }
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };

//   return (
//     <Box sx={{ textAlign: 'center', padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode to mark attendance
//         </Typography>

//         <BarcodeScannerComponent
//           width={500}
//           height={500}
//           onScan={handleScan}
//           onError={handleError}
//         />

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">Scanned Pass Number: {scannedData}</Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: 'green', marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: 'red', marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={resetMessages}
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

// import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import axios from 'axios';
// import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
// import Swal from 'sweetalert2';

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//       console.log("Scanned Data: ", data);  // Log the scanned data
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber }, // Sending the scanned passNumber in the request body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with the token
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Attendance marked successfully!',
//           text: response.data.message,
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Failed to mark attendance',
//           text: 'Please try again.',
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to mark attendance. Please try again.',
//       });
//       console.error("Error:", error);
//     }
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };

//   return (
//     <Box sx={{ textAlign: 'center', padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode to mark attendance
//         </Typography>

//         <BarcodeScannerComponent
//           width="100%" // Make it full width for mobile screens
//           height={300} // Set appropriate height for mobile
//           onScan={handleScan}
//           onError={handleError}
//         />

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">Scanned Pass Number: {scannedData}</Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: 'green', marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: 'red', marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={resetMessages}
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

// import React, { useState, useRef, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import jsQR from 'jsqr';
// import axios from 'axios';
// import { Box, Typography, Paper, Button, CircularProgress } from '@mui/material';
// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isScanning, setIsScanning] = useState(true);
//   const webcamRef = useRef(null);
//   // Function to capture video frame and scan for barcode
//   const scanBarcode = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       const image = new Image();
//       image.src = imageSrc;
//       image.onload = () => {
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         canvas.width = image.width;
//         canvas.height = image.height;
//         context.drawImage(image, 0, 0, image.width, image.height);
//         const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//         const code = jsQR(imageData.data, image.width, image.height, {
//           inversionAttempts: 'dontInvert',
//         });
//         if (code) {
//           setScannedData(code.data);
//           markAttendance(code.data); // Call function to mark attendance with scanned barcode
//         }
//       };
//     }
//   };
//   // Function to mark attendance by sending passNumber to the API
//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }
//     try {
//       const response = await axios.post(
//         'https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance',
//         { passNumber },
//         {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
//         }
//       );
//       setLoading(false);
//       if (response.data && response.data.message) {
//         setMessage(response.data.message); // Set success message
//         console.log(response.data.user); // Optionally log user details from the response
//         // Handle user event details if needed (like isPresent)
//         const isPresent = response.data.user?.isPresent ? 'Present' : 'Absent';
//         setMessage(`Attendance marked as: ${isPresent}`);
//       } else {
//         setMessage("Failed to mark attendance.");
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("Error marking attendance. Please try again.");
//       console.error("Error:", error);
//     }
//   };
//   // Reset messages (success/error) after action
//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//   };
//   // Start scanning when webcam is available
//   useEffect(() => {
//     if (isScanning) {
//       const interval = setInterval(scanBarcode, 1000); // Scan every second
//       return () => clearInterval(interval); // Cleanup on unmount
//     }
//   }, [isScanning]);
//   return (
//     <Box sx={{ textAlign: 'center', padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>
//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode to mark attendance
//         </Typography>
//         {/* Display webcam feed */}
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width="100%"
//           videoConstraints={{
//             facingMode: "environment", // Use the back camera
//           }}
//         />
//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}
//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">Scanned Pass Number: {scannedData}</Typography>
//           </Box>
//         )}
//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: 'green', marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}
//         {error && (
//           <Box sx={{ color: 'red', marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}
//         {/* Button to reset messages */}
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={resetMessages}
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };
// export default BarcodeScanner;

//WORKING CODE

// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   CircularProgress,
//   TextField,
// } from "@mui/material";
// import Swal from "sweetalert2";
// import successuserSound from "../Assets/success_user_create.mp3";


// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [manualPassNumber, setManualPassNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [useManualEntry, setUseManualEntry] = useState(false); // For switching between manual and scanned entry

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//       console.log("Scanned Data: ", data); // Log the scanned data
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
//         { passNumber }, // Sending the scanned passNumber in the request body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with the token
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//            const audio = new Audio(successuserSound);
//                 audio.play();
//         Swal.fire({
//           icon: "success",
//           title: "Attendance marked successfully!",
//           text: response.data.message,
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed to mark attendance",
//           text: "Please try again.",
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Failed to mark attendance. Please try again.",
//       });
//       console.error("Error:", error);
//     }
//   };

//   const handleManualEntry = () => {
//     if (!manualPassNumber.trim()) {
//       setError("Pass number is required for manual entry.");
//       return;
//     }
//     markAttendance(manualPassNumber); // Call the markAttendance function with manual pass number
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//     setManualPassNumber("");
//   };

//   return (
//     <Box sx={{ textAlign: "center", padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode or enter pass number manually
//         </Typography>

//         {/* Barcode Scanner */}
//         {!useManualEntry && (
//           <BarcodeScannerComponent
//             width="100%" // Full width for mobile view
//             height="auto" // Let the height adjust automatically
//             onScan={handleScan}
//             onError={handleError}
//             videoOptions={{
//               facingMode: "environment", // Use rear camera (environment-facing camera)
//             }}
//           />
//         )}

//         {/* If barcode scanning fails, show manual entry option */}
//         {useManualEntry && (
//           <TextField
//             label="Enter Pass Number"
//             variant="outlined"
//             value={manualPassNumber}
//             onChange={(e) => setManualPassNumber(e.target.value)}
//             fullWidth
//             sx={{ marginTop: 2 }}
//           />
//         )}

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">
//               Scanned Pass Number: {scannedData}
//             </Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: "green", marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: "red", marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         {/* Buttons */}
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={() => setUseManualEntry(!useManualEntry)} // Toggle between scan and manual entry
//         >
//           {useManualEntry ? "Scan Barcode" : "Manual Entry"}
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3, marginLeft: 2 }}
//           onClick={handleManualEntry} // Submit manual entry
//         >
//           Submit
//         </Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ marginTop: 3, marginLeft: 2 }}
//           onClick={resetMessages} // Reset everything
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;


// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   CircularProgress,
//   TextField,
// } from "@mui/material";
// import Swal from "sweetalert2";
// import successuserSound from "../Assets/success_user_create.mp3";

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [manualPassNumber, setManualPassNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [useManualEntry, setUseManualEntry] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text);
//       markAttendance(data.text);
//       console.log("Scanned Data: ", data);
//     }
//   };

//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
//         { passNumber },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         const audio = new Audio(successuserSound);
//         audio.play();
//         Swal.fire({
//           icon: "success",
//           title: "Attendance marked successfully!",
//           text: response.data.message,
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed to mark attendance",
//           text: "Please try again.",
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Failed to mark attendance. Please try again.",
//       });
//       console.error("Error:", error);
//     }
//   };

//   const handleManualEntry = () => {
//     if (!manualPassNumber.trim()) {
//       setError("Pass number is required for manual entry.");
//       return;
//     }
//     markAttendance(manualPassNumber);
//   };

//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//     setManualPassNumber("");
//   };

//   return (
//     <Box sx={{ textAlign: "center", padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode or enter pass number manually
//         </Typography>

//         {!useManualEntry && (
//           <BarcodeScannerComponent
//             width="100%"
//             height="auto"
//             onScan={handleScan}
//             onError={handleError}
//             videoOptions={{
//               facingMode: "environment",
//             }}
//           />
//         )}

//         {useManualEntry && (
//           <TextField
//             label="Enter Pass Number"
//             variant="outlined"
//             value={manualPassNumber}
//             onChange={(e) => setManualPassNumber(e.target.value)}
//             fullWidth
//             sx={{ marginTop: 2 }}
//           />
//         )}

//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">
//               Scanned Pass Number: {scannedData}
//             </Typography>
//           </Box>
//         )}

//         {message && (
//           <Box sx={{ color: "green", marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: "red", marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         <Box sx={{ marginTop: 2 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => setUseManualEntry(!useManualEntry)}
//           >
//             {useManualEntry ? "Switch to Scanner" : "Manual Entry"}
//           </Button>
//         </Box>

//         {useManualEntry && (
//           <Box sx={{ marginTop: 2 }}>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={handleManualEntry}
//             >
//               Submit Pass Number
//             </Button>
//           </Box>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import Swal from "sweetalert2";
// import { QrReader } from "react-qr-reader"; // Barcode scanner library
// import successUserSound from "../Assets/success_user_create.mp3"; // Audio file import

// const Attendance = () => {
//   const [barcode, setBarcode] = useState("");
//   const [manualPassNumber, setManualPassNumber] = useState("");
//   const [token, setToken] = useState("");
//   const [scanMode, setScanMode] = useState(false); // Toggle for scanner

//   // Play success audio
//   const playSuccessAudio = () => {
//     const audio = new Audio(successUserSound);
//     audio.play();
//   };

//   const handleScanSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/public/markattendance",
//         { passNumber: barcode },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       playSuccessAudio(); // Play success sound
//       Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "Attendance marked successfully via scan!",
//       });
//       setBarcode("");
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text:
//           error.response?.data?.message ||
//           "Failed to mark attendance via scan!",
//       });
//     }
//   };

//   const handleManualSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
//         { passNumber: manualPassNumber },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       playSuccessAudio(); // Play success sound
//       Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "Attendance marked successfully via manual entry!",
//       });
//       setManualPassNumber("");
//       setToken("");
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text:
//           error.response?.data?.message ||
//           "Failed to mark attendance via manual entry!",
//       });
//     }
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 500, mx: "auto", textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Mark Attendance
//       </Typography>

//       {scanMode ? (
//         <Box sx={{ my: 2 }}>
//           <Typography variant="h6">Scan Barcode</Typography>
//           <QrReader
//             onResult={(result, error) => {
//               if (result) {
//                 setBarcode(result?.text);
//                 setScanMode(false); // Close scanner after scanning
//               }
//               if (error) {
//                 console.error(error);
//               }
//             }}
//             style={{ width: "100%" }}
//           />
//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{ mt: 2 }}
//             onClick={() => setScanMode(false)}
//           >
//             Cancel Scan
//           </Button>
//         </Box>
//       ) : (
//         <Box sx={{ my: 2 }}>
//           <TextField
//             fullWidth
//             label="Scan Barcode"
//             variant="outlined"
//             value={barcode}
//             onChange={(e) => setBarcode(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//             onClick={handleScanSubmit}
//           >
//             Submit via Scan
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             sx={{ mt: 2, ml: 2 }}
//             onClick={() => setScanMode(true)}
//           >
//             Open Scanner
//           </Button>
//         </Box>
//       )}

//       <Box sx={{ my: 2 }}>
//         <TextField
//           fullWidth
//           label="Manual Pass Number"
//           variant="outlined"
//           value={manualPassNumber}
//           onChange={(e) => setManualPassNumber(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Authorization Token"
//           variant="outlined"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ mt: 2 }}
//           onClick={handleManualSubmit}
//         >
//           Submit Manually
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Attendance;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import Swal from "sweetalert2";
// import { QrReader } from "react-qr-reader"; // Barcode scanner library
// import successUserSound from "../Assets/success_user_create.mp3"; // Audio file import

// const Attendance = () => {
//   const [barcode, setBarcode] = useState("");
//   const [manualPassNumber, setManualPassNumber] = useState("");
//   const [token, setToken] = useState("");
//   const [scanMode, setScanMode] = useState(false); // Toggle for scanner

//   // Play success audio
//   const playSuccessAudio = () => {
//     const audio = new Audio(successUserSound);
//     audio.play();
//   };

//   const handleScanSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/public/markattendance",
//         { passNumber: barcode },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response && response.data) {
//         playSuccessAudio(); // Play success sound
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Attendance marked successfully via scan!",
//         });
//         setBarcode("");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text:
//           error.response?.data?.message ||
//           error.message ||
//           "Failed to mark attendance via scan!",
//       });
//     }
//   };

//   const handleManualSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
//         { passNumber: manualPassNumber },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response && response.data) {
//         playSuccessAudio(); // Play success sound
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Attendance marked successfully via manual entry!",
//         });
//         setManualPassNumber("");
//         setToken("");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text:
//           error.response?.data?.message ||
//           error.message ||
//           "Failed to mark attendance via manual entry!",
//       });
//     }
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 500, mx: "auto", textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Mark Attendance
//       </Typography>

//       {scanMode ? (
//         <Box sx={{ my: 2 }}>
//           <Typography variant="h6">Scan Barcode</Typography>
//           <QrReader
//             onResult={(result, error) => {
//               if (result) {
//                 setBarcode(result?.text);
//                 setScanMode(false); // Close scanner after scanning
//               }
//               if (error) {
//                 console.error(error);
//               }
//             }}
//             style={{ width: "100%" }}
//           />
//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{ mt: 2 }}
//             onClick={() => setScanMode(false)}
//           >
//             Cancel Scan
//           </Button>
//         </Box>
//       ) : (
//         <Box sx={{ my: 2 }}>
//           <TextField
//             fullWidth
//             label="Scan Barcode"
//             variant="outlined"
//             value={barcode}
//             onChange={(e) => setBarcode(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//             onClick={handleScanSubmit}
//           >
//             Submit via Scan
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             sx={{ mt: 2, ml: 2 }}
//             onClick={() => setScanMode(true)}
//           >
//             Open Scanner
//           </Button>
//         </Box>
//       )}

//       <Box sx={{ my: 2 }}>
//         <TextField
//           fullWidth
//           label="Manual Pass Number"
//           variant="outlined"
//           value={manualPassNumber}
//           onChange={(e) => setManualPassNumber(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Authorization Token"
//           variant="outlined"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ mt: 2 }}
//           onClick={handleManualSubmit}
//         >
//           Submit Manually
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Attendance;

// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   CircularProgress,
//   TextField,
// } from "@mui/material";
// import Swal from "sweetalert2";
// import successuserSound from "../Assets/success_user_create.mp3";

// const BarcodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);
//   const [manualPassNumber, setManualPassNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [useManualEntry, setUseManualEntry] = useState(false); // For switching between manual and scanned entry

//   // Handle scanning result
//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(data.text); // Store scanned barcode value
//       markAttendance(data.text); // Call function to mark attendance with scanned barcode
//       console.log("Scanned Data: ", data); // Log the scanned data
//     }
//   };

//   // Handle error during scan
//   const handleError = (err) => {
//     setError("Error scanning barcode");
//     console.error(err);
//   };

//   // Mark attendance via API call
//   const markAttendance = async (passNumber) => {
//     setLoading(true);
//     const token = localStorage.getItem("authToken");

//     if (!token) {
//       setError("Authentication token not found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
//         { passNumber }, // Sending the scanned passNumber in the request body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with the token
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setLoading(false);

//       if (response.data && response.data.message) {
//         const audio = new Audio(successuserSound);
//         audio.play();
//         Swal.fire({
//           icon: "success",
//           title: "Attendance marked successfully!",
//           text: response.data.message,
//         });
//         setMessage(response.data.message);
//         setError(""); // Clear any previous error
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Failed to mark attendance",
//           text: "Please try again.",
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//       setError("Failed to mark attendance. Please try again.");
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Failed to mark attendance. Please try again.",
//       });
//       console.error("Error:", error);
//     }
//   };

//   // Handle manual entry submission
//   const handleManualEntry = () => {
//     if (!manualPassNumber.trim()) {
//       setError("Pass number is required for manual entry.");
//       return;
//     }
//     markAttendance(manualPassNumber); // Call the markAttendance function with manual pass number
//   };

//   // Reset messages and input fields
//   const resetMessages = () => {
//     setMessage("");
//     setError("");
//     setManualPassNumber("");
//     setScannedData(null); // Clear scanned data as well
//   };

//   return (
//     <Box sx={{ textAlign: "center", padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Scan Here
//       </Typography>

//       <Paper sx={{ padding: 4, boxShadow: 3 }}>
//         <Typography variant="h6" gutterBottom>
//           Scan your barcode or enter pass number manually
//         </Typography>

//         {/* Barcode Scanner */}
//         {!useManualEntry && (
//           <BarcodeScannerComponent
//             width="100%" // Full width for mobile view
//             height="auto" // Let the height adjust automatically
//             onScan={handleScan}
//             onError={handleError}
//             videoOptions={{
//               facingMode: "environment", // Use rear camera (environment-facing camera)
//             }}
//           />
//         )}

//         {/* Manual Entry Field */}
//         {useManualEntry && (
//           <TextField
//             label="Enter Pass Number"
//             variant="outlined"
//             value={manualPassNumber}
//             onChange={(e) => setManualPassNumber(e.target.value)}
//             fullWidth
//             sx={{ marginTop: 2 }}
//           />
//         )}

//         {/* Loading spinner while marking attendance */}
//         {loading && <CircularProgress sx={{ marginTop: 2 }} />}

//         {/* Display scanned barcode */}
//         {scannedData && (
//           <Box sx={{ marginTop: 3 }}>
//             <Typography variant="h6">
//               Scanned Pass Number: {scannedData}
//             </Typography>
//           </Box>
//         )}

//         {/* Display success or error message */}
//         {message && (
//           <Box sx={{ color: "green", marginTop: 2 }}>
//             <Typography variant="h6">{message}</Typography>
//           </Box>
//         )}

//         {error && (
//           <Box sx={{ color: "red", marginTop: 2 }}>
//             <Typography variant="h6">{error}</Typography>
//           </Box>
//         )}

//         {/* Buttons */}
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3 }}
//           onClick={() => setUseManualEntry(!useManualEntry)} // Toggle between scan and manual entry
//         >
//           {useManualEntry ? "Scan Barcode" : "Manual Entry"}
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 3, marginLeft: 2 }}
//           onClick={handleManualEntry} // Submit manual entry
//         >
//           Submit
//         </Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ marginTop: 3, marginLeft: 2 }}
//           onClick={resetMessages} // Reset everything
//         >
//           Reset
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default BarcodeScanner;

import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import successuserSound from "../Assets/success_user_create.mp3";

const BarcodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // To manage dialog visibility
  const [useManualEntry, setUseManualEntry] = useState(false); // Manual entry toggle
  const [scanTimeout, setScanTimeout] = useState(null); // Timer to check scan status

  // Handle scanning result
  const handleScan = (data) => {
    if (data && data.text) {
      setScannedData(data.text); // Store scanned barcode value
      clearTimeout(scanTimeout); // Clear any previous timeout if valid scan is received
      setOpenDialog(true); // Open dialog to submit barcode
      console.log("Scanned Data: ", data); // Log the scanned data
    }
  };

  // Handle error during scan
  const handleError = (err) => {
    setError("Error scanning barcode");
    console.error(err);
  };

  // Mark attendance via API call
  const markAttendance = async (passNumber) => {
    setLoading(true);
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("Authentication token not found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/markattendance",
        { passNumber }, // Sending the scanned passNumber in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization header with the token
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);

      if (response.data && response.data.message) {
        const audio = new Audio(successuserSound);
        audio.play();
        Swal.fire({
          icon: "success",
          title: "Attendance marked successfully!",
          text: response.data.message,
        });
        setMessage(response.data.message);
        setError(""); // Clear any previous error
        setScannedData(null); // Clear scanned data after submission
        setOpenDialog(false); // Close the dialog after submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to mark attendance",
          text: "Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      setError("Failed to mark attendance. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to mark attendance. Please try again.",
      });
      console.error("Error:", error);
    }
  };

  // Handle manual entry submission
  const handleManualEntry = () => {
    if (!scannedData.trim()) {
      setError("Pass number is required for manual entry.");
      return;
    }
    markAttendance(scannedData); // Call the markAttendance function with manual pass number
  };

  // Reset messages and input fields
  const resetMessages = () => {
    setMessage("");
    setError("");
    setScannedData(null); // Clear scanned data as well
  };

  // Auto stop scanning if no barcode is scanned within a certain time (e.g., 30 seconds)
  useEffect(() => {
    if (scannedData === null) {
      const timeout = setTimeout(() => {
        setError("Unable to scan a valid barcode. Please try again.");
      }, 30000); // 30 seconds timeout
      setScanTimeout(timeout);
    }
  }, [scannedData]);

  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h4"
      sx={{mt:4}}
       gutterBottom>
        Scan Here
      </Typography>

      <Paper sx={{ padding: 4, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          Scan your barcode or enter pass number manually
        </Typography>

        {/* Barcode Scanner */}
        {!useManualEntry && (
          <BarcodeScannerComponent
            width="100%" // Full width for mobile view
            height="auto" // Let the height adjust automatically
            onScan={handleScan}
            onError={handleError}
            videoOptions={{
              facingMode: "environment", // Use rear camera (environment-facing camera)
            }}
          />
        )}

        {/* Manual Entry Field */}
        {useManualEntry && (
          <TextField
            label="Enter Pass Number"
            variant="outlined"
            value={scannedData}
            onChange={(e) => setScannedData(e.target.value)}
            fullWidth
            sx={{ marginTop: 2 }}
          />
        )}

        {/* Loading spinner while marking attendance */}
        {loading && <CircularProgress sx={{ marginTop: 2 }} />}

        {/* Display success or error message */}
        {message && (
          <Box sx={{ color: "green", marginTop: 2 }}>
            <Typography variant="h6">{message}</Typography>
          </Box>
        )}

        {error && (
          <Box sx={{ color: "red", marginTop: 2 }}>
            <Typography variant="h6">{error}</Typography>
          </Box>
        )}

        {/* Buttons */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          onClick={() => setUseManualEntry(!useManualEntry)} // Toggle between scan and manual entry
        >
          {useManualEntry ? "Scan Barcode" : "Manual Entry"}
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3, marginLeft: 2 }}
          onClick={handleManualEntry} // Submit manual entry
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 3, marginLeft: 2 }}
          onClick={resetMessages} // Reset everything
        >
          Reset
        </Button>
      </Paper>

      {/* Dialog for submitting scanned pass number */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Attendance</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Scanned Pass Number: {scannedData}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Do you want to submit this pass number to mark attendance?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => markAttendance(scannedData)}
            color="primary"
            variant="contained"
            disabled={loading}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BarcodeScanner;
