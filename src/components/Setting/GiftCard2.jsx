// import React, { useRef, useState, useEffect } from "react";
// import { Box, Typography, TextField, Button, Menu, MenuItem } from "@mui/material";
// import JsBarcode from "jsbarcode";
// import html2pdf from "html2pdf.js";
// import html2canvas from "html2canvas";
// import Ribanimg from "../Assets/GiftCard/riban.png";
// import Eraxlogoimg from "../Assets/GiftCard/EraxLogo.png";
// import Coineranameimg from "../Assets/GiftCard/CoinEraname.png";
// import CoinLogo from "../Assets/home_web/logo.png";
// import GiftCardname from '../Assets/GiftCard/GiftCard_nameimg.png';
// import jsPDF from "jspdf";

// const GiftCard2 = () => {
//   const [amount, setAmount] = useState("");
//   const [cardData, setCardData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const cardRef = useRef(null);
//   const barcodeRef = useRef(null);

//   // Standard credit card dimensions (in mm)
//   const CARD_WIDTH = 85.6;
//   const CARD_HEIGHT = 53.98;

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const generateBarcode = (value) => {
//     try {
//       if (barcodeRef.current && value) {
//         while (barcodeRef.current.firstChild) {
//           barcodeRef.current.removeChild(barcodeRef.current.firstChild);
//         }
//         const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         barcodeRef.current.appendChild(svgElement);
//         JsBarcode(svgElement, value, {
//           format: "CODE128",
//           lineColor: "black",
//           width: 1.2,
//           height: 40,
//           displayValue: true,
//           background: "white",
//           fontSize: 10,
//           margin: 4
//         });
//       }
//     } catch (err) {
//       console.error("Error generating barcode:", err);
//     }
//   };

//   useEffect(() => {
//     if (cardData && cardData.barcode) {
//       generateBarcode(cardData.barcode);
//     }
//   }, [cardData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     const token = localStorage.getItem("authToken");

//     try {
//       const response = await fetch(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/creategiftcard",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ amount: Number(amount) }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         setCardData(data.giftCard);
//       } else {
//         setError(data.message || "Failed to create gift card");
//       }
//     } catch (error) {
//       setError("Network error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

// //   const handlePDFDownload = async () => {
// //     const element = cardRef.current;
// //     const opt = {
// //       margin: 1,
// //       filename: `gift-card-${cardData?.barcode}.pdf`,
// //       image: { type: 'jpeg', quality: 1 },
// //       html2canvas: { 
// //         scale: 4,
// //         useCORS: true,
// //         logging: true,
// //         letterRendering: true
// //       },
    
// //         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    
// //     };
// //     await html2pdf().set(opt).from(element).save();
// //     handleClose();
// //   };

// const handlePDFDownload = async () => {
//     const element = cardRef.current; // Front side of the card
//     // const atmCardWidth = 85.6; // Standard ATM card width in mm
//     // const atmCardHeight = 53.98; // Standard ATM card height in mm
//     const atmCardWidth = `${CARD_WIDTH}`; // Standard ATM card width in mm
//     const atmCardHeight = `${CARD_HEIGHT}`; // Standard ATM card height in mm
  
//     // Initialize jsPDF with exact ATM card size
//     const pdf = new jsPDF({
//       orientation: "landscape", // Landscape for card orientation
//       unit: "mm",
//       format: [atmCardWidth, atmCardHeight], // Set to ATM card size
//     });
  
//     // Render front side
//     const canvas = await html2canvas(element, {
//       scale: 2, // Improves rendering quality
//       useCORS: true, // Allows cross-origin images
//       backgroundColor: null, // Ensure background transparency
//     });
  
//     const imgData = canvas.toDataURL("image/jpeg", 1.0); // Convert front side to image
//     pdf.addImage(imgData, "JPEG", 0, 0, atmCardWidth, atmCardHeight);
  
//     // Add a blank black backside
//     pdf.addPage([atmCardWidth, atmCardHeight], "landscape");
//     pdf.setFillColor(0, 0, 0); // Black color
//     pdf.rect(0, 0, atmCardWidth, atmCardHeight, "F"); // Fill entire page with black
  
//     // Save the PDF
//     pdf.save(`gift-card-${cardData?.barcode}.pdf`);
//     handleClose();
//   };

//   const handleImageDownload = async (format) => {
//     const element = cardRef.current;
//     const canvas = await html2canvas(element, {
//       scale: 4,
//       useCORS: true,
//       logging: true,
//       letterRendering: true
//     });
    
//     const image = canvas.toDataURL(`image/${format}`);
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = `gift-card-${cardData?.barcode}.${format}`;
//     link.click();
//     handleClose();
//   };

//   return (
//     <Box sx={{ 
//       padding: { xs: 2, sm: 4, }, 
//       maxWidth: "100%",
//       margin: "0 auto",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center"
//     }}>
//       <Box 
//         component="form" 
//         onSubmit={handleSubmit} 
//         sx={{ 
//           width: "100%",
//           maxWidth: 400,
//           mb: 4 ,
//           marginTop:'60px'
//         }}
//       >
//         <TextField
//           fullWidth
//           label="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           type="number"
//           required
//           sx={{ 
//             mb: 2, 
//             marginTop: '30px',
//             '& .MuiOutlinedInput-root': {
//               borderRadius: 2
//             }
//           }}
//           disabled={loading}
//         />
//         <Button
//           variant="contained"
//           type="submit"
//           sx={{
//             width: { xs: '100%', sm: 'auto' },
//             minWidth: 150,
//             height: 40,
//             borderRadius: 2,
//             background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
//             color: '#000',
//             fontWeight: 'bold',
//             '&:hover': {
//               background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
//             }
//           }}
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Generate Gift Card"}
//         </Button>
//         {error && (
//           <Typography color="error" sx={{ mb: 2, mt: 1 }}>
//             {error}
//           </Typography>
//         )}
//       </Box>

//       {cardData && (
//         <Box sx={{ 
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 4
//         }}>
//           <Box
//             ref={cardRef}
//             sx={{
//               position: "relative",
//               width: { xs: 320, sm: 400, md: 450 },
//               height: { xs: 200, sm: 250, md: 280 },
//               borderRadius: 3,
//               background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(28, 29, 34) 90%)",
//               boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
//               padding: 4,
//               overflow: "hidden",
//               aspectRatio: `${CARD_WIDTH}/${CARD_HEIGHT}`,
//               '@media print': {
//                 width: `${CARD_WIDTH}mm`,
//                 height: `${CARD_HEIGHT}mm`,
//               }
//             }}
//           >
//             <Box
//               component="img"
//               src={Ribanimg}
//               alt="Ribbon"
//               sx={{
//                 position: "absolute",
//                 top: -8,
//                 right: "-25%",
//                 width: "65%",
//                 height: 400,
//               }}
//             />
//             <Box
//               component="img"
//               src={CoinLogo}
//               alt="Coineranameimg"
//               sx={{
//                 position: "absolute",
//                 bottom: "50%",
//                 left: "35%",
//                 width: "30%",
//                 height: "45%",
//                 objectFit: "contain",
                
//               }}
//             />
//             {/* <Box
//               component="img"
//               src={GiftCardname}
//               alt="GiftCardname"
//               sx={{
//                 position: "absolute",
//                 bottom: "28%",
//                 left: "21%",
//                 width: "60%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             /> */}
//             <Typography
//   sx={{
//     position: "absolute",
//     bottom: "36%",
//     left: "34%",
//     fontSize: "1.9rem", // Adjust font size as needed
//     fontWeight: "bold",
//     color: "#FFD700", // Golden color
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow for depth
//     WebkitTextStroke: "0.9px white",
//   }}
// >
//   GIFT CARD
// </Typography>
//             <Box
//               ref={barcodeRef}
//               sx={{
//                 position: "absolute",
//                 bottom: "5%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "70%",
//                 height: "auto",
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'white',
//                 padding: '4px',
//                 borderRadius: '4px',
//               }}
//             />

//             <Box sx={{ 
//               display: 'flex', 
//               justifyContent: 'space-between',
//               position: 'absolute',
//               top: "60%",
//               width: "80%",
//               left: "10%"
//             }}>
//               <Typography sx={{
//                 fontSize: { xs: '1rem', sm: '1.2rem' },
//                 fontWeight: 'bold',
//                 color: '#FFD700',
//               }}>
//                 ₹{cardData.amount}
//               </Typography>
//               <Typography sx={{
//                 fontSize: { xs: '1rem', sm: '1.2rem' },
//                 fontWeight: 'bold',
//                 color: '#FFD700',
//               }}>
//                 ERA{cardData.coinvalue}
//               </Typography>
//             </Box>

//             <Box
//               component="img"
//               src={Eraxlogoimg}
//               alt="Erax Logo"
//               sx={{
//                 position: "absolute",
//                 bottom: "27%",
//                 left: "-31%",
//                 width: "88%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Box>

//           <Button
//             variant="contained"
//             onClick={handleClick}
//             sx={{
//               mt: 4,
//               minWidth: 120,
//               height: 36,
//               borderRadius: 2,
//               background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
//               color: '#000',
//               fontWeight: 'bold',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
//               }
//             }}
//           >
//             Download
//           </Button>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handlePDFDownload}>Download as PDF</MenuItem>
//             <MenuItem onClick={() => handleImageDownload('png')}>Download as PNG</MenuItem>
//             <MenuItem onClick={() => handleImageDownload('jpeg')}>Download as JPG</MenuItem>
//           </Menu>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default GiftCard2;

// import React, { useRef, useState, useEffect } from "react";
// import { Box, Typography, TextField, Button, Menu, MenuItem } from "@mui/material";
// import JsBarcode from "jsbarcode";
// import html2canvas from "html2canvas";
// import Ribanimg from "../Assets/GiftCard/riban.png";
// import Eraxlogoimg from "../Assets/GiftCard/EraxLogo.png";
// import Coineranameimg from "../Assets/GiftCard/CoinEraname.png";
// import CoinLogo from "../Assets/home_web/logo.png";
// import GiftCardname from '../Assets/GiftCard/GiftCard_nameimg.png';
// import jsPDF from "jspdf";

// const GiftCard2 = () => {
//   const [amount, setAmount] = useState("");
//   const [cardData, setCardData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const cardRef = useRef(null);
//   const cardBackRef = useRef(null);
//   const barcodeRef = useRef(null);

//   // Standard credit card dimensions (in mm)
//   const CARD_WIDTH = 85.6;
//   const CARD_HEIGHT = 53.98;

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const generateBarcode = (value) => {
//     try {
//       if (barcodeRef.current && value) {
//         while (barcodeRef.current.firstChild) {
//           barcodeRef.current.removeChild(barcodeRef.current.firstChild);
//         }
//         const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         barcodeRef.current.appendChild(svgElement);
//         JsBarcode(svgElement, value, {
//           format: "CODE128",
//           lineColor: "black",
//           width: 1.2,
//           height: 40,
//           displayValue: true,
//           background: "white",
//           fontSize: 10,
//           margin: 4
//         });
//       }
//     } catch (err) {
//       console.error("Error generating barcode:", err);
//     }
//   };

//   useEffect(() => {
//     if (cardData && cardData.barcode) {
//       generateBarcode(cardData.barcode);
//     }
//   }, [cardData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     const token = localStorage.getItem("authToken");

//     try {
//       const response = await fetch(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/creategiftcard",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ amount: Number(amount) }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         setCardData(data.giftCard);
//       } else {
//         setError(data.message || "Failed to create gift card");
//       }
//     } catch (error) {
//       setError("Network error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePDFDownload = async () => {
//     const frontElement = cardRef.current;
//     const backElement = document.createElement('div');
    
//     // Create backside design
//     backElement.style.width = `${CARD_WIDTH}mm`;
//     backElement.style.height = `${CARD_HEIGHT}mm`;
//     backElement.style.position = 'relative';
//     backElement.style.backgroundColor = 'rgb(28, 29, 34)';
//     backElement.innerHTML = `
//       <div style="
//         position: absolute;
//         top: 4%;
//         right: 6%;
//         color: #FFD700;
//         font-size: 12px;
//         font-family: Arial, sans-serif;
//       ">www.coinera.ai</div>
//       <img src="${CoinLogo}" style="
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 30%;
//         height: auto;
//         opacity: 0.8;
//       "/>
//       <div style="
//         position: absolute;
//         bottom: 8%;
//         left: 50%;
//         transform: translateX(-50%);
//         color: #FFD700;
//         font-family: 'Dancing Script', poppins;
//         font-size: 16px;
//         width: 80%;
//         text-align: center;
//       ">Crypto for Everyone, Everywhere!</div>
//     `;

//     document.body.appendChild(backElement);

//     // Initialize jsPDF
//     const pdf = new jsPDF({
//       orientation: "landscape",
//       unit: "mm",
//       format: [CARD_WIDTH, CARD_HEIGHT],
//     });

//     // Render front side
//     const frontCanvas = await html2canvas(frontElement, {
//       scale: 4,
//       useCORS: true,
//       backgroundColor: null,
//     });
//     const frontImgData = frontCanvas.toDataURL("image/jpeg", 1.0);
//     pdf.addImage(frontImgData, "JPEG", 0, 0, CARD_WIDTH, CARD_HEIGHT);

//     // Add new page for backside
//     pdf.addPage([CARD_WIDTH, CARD_HEIGHT], "landscape");

//     // Render back side
//     const backCanvas = await html2canvas(backElement, {
//       scale: 4,
//       useCORS: true,
//       backgroundColor: null,
//     });
    
//     document.body.removeChild(backElement);
    
//     const backImgData = backCanvas.toDataURL("image/jpeg", 1.0);
//     pdf.addImage(backImgData, "JPEG", 0, 0, CARD_WIDTH, CARD_HEIGHT);

//     // Save the PDF
//     pdf.save(`gift-card-${cardData?.barcode}.pdf`);
//     handleClose();
//   };

//   const handleImageDownload = async (format) => {
//     const element = cardRef.current;
//     const canvas = await html2canvas(element, {
//       scale: 4,
//       useCORS: true,
//       logging: true,
//       letterRendering: true
//     });
    
//     const image = canvas.toDataURL(`image/${format}`);
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = `gift-card-${cardData?.barcode}.${format}`;
//     link.click();
//     handleClose();
//   };

//   return (
//     <Box sx={{ 
//       padding: { xs: 2, sm: 4, }, 
//       maxWidth: "100%",
//       margin: "0 auto",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center"
//     }}>
//       <Box 
//         component="form" 
//         onSubmit={handleSubmit} 
//         sx={{ 
//           width: "100%",
//           maxWidth: 400,
//           mb: 4,
//           marginTop: '60px'
//         }}
//       >
//         <TextField
//           fullWidth
//           label="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           type="number"
//           required
//           sx={{ 
//             mb: 2, 
//             marginTop: '30px',
//             '& .MuiOutlinedInput-root': {
//               borderRadius: 2
//             }
//           }}
//           disabled={loading}
//         />
//         <Button
//           variant="contained"
//           type="submit"
//           sx={{
//             width: { xs: '100%', sm: 'auto' },
//             minWidth: 150,
//             height: 40,
//             borderRadius: 2,
//             background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
//             color: '#000',
//             fontWeight: 'bold',
//             '&:hover': {
//               background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
//             }
//           }}
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Generate Gift Card"}
//         </Button>
//         {error && (
//           <Typography color="error" sx={{ mb: 2, mt: 1 }}>
//             {error}
//           </Typography>
//         )}
//       </Box>

//       {cardData && (
//         <Box sx={{ 
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 4
//         }}>
//           <Box
//             ref={cardRef}
//             sx={{
//               position: "relative",
//               width: { xs: 320, sm: 400, md: 450 },
//               height: { xs: 200, sm: 250, md: 280 },
//               borderRadius: 3,
//               background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(28, 29, 34) 90%)",
//               boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
//               padding: 4,
//               overflow: "hidden",
//               aspectRatio: `${CARD_WIDTH}/${CARD_HEIGHT}`,
//               '@media print': {
//                 width: `${CARD_WIDTH}mm`,
//                 height: `${CARD_HEIGHT}mm`,
//               }
//             }}
//           >
//             <Box
//               component="img"
//               src={Ribanimg}
//               alt="Ribbon"
//               sx={{
//                 position: "absolute",
//                 top: -8,
//                 right: "-25%",
//                 width: "65%",
//                 height: 400,
//               }}
//             />
//             <Box
//               component="img"
//               src={CoinLogo}
//               alt="Coineranameimg"
//               sx={{
//                 position: "absolute",
//                 bottom: "50%",
//                 left: "35%",
//                 width: "30%",
//                 height: "45%",
//                 objectFit: "contain",
//               }}
//             />
//             <Typography
//               sx={{
//                 position: "absolute",
//                 bottom: "36%",
//                 left: "34%",
//                 fontSize: "1.9rem",
//                 fontWeight: "bold",
//                 color: "#FFD700",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//                 WebkitTextStroke: "0.9px white",
//               }}
//             >
//               GIFT CARD
//             </Typography>
//             <Box
//               ref={barcodeRef}
//               sx={{
//                 position: "absolute",
//                 bottom: "5%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "70%",
//                 height: "auto",
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'white',
//                 padding: '4px',
//                 borderRadius: '4px',
//               }}
//             />

//             <Box sx={{ 
//               display: 'flex', 
//               justifyContent: 'space-between',
//               position: 'absolute',
//               top: "60%",
//               width: "80%",
//               left: "10%"
//             }}>
//               <Typography sx={{
//                 fontSize: { xs: '1rem', sm: '1.2rem' },
//                 fontWeight: 'bold',
//                 color: '#FFD700',
//               }}>
//                 ₹{cardData.amount}
//               </Typography>
//               <Typography sx={{
//                 fontSize: { xs: '1rem', sm: '1.2rem' },
//                 fontWeight: 'bold',
//                 color: '#FFD700',
//               }}>
//                 ERA{cardData.coinvalue}
//               </Typography>
//             </Box>

//             <Box
//               component="img"
//               src={Eraxlogoimg}
//               alt="Erax Logo"
//               sx={{
//                 position: "absolute",
//                 bottom: "27%",
//                 left: "-31%",
//                 width: "88%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Box>

//           <Button
//             variant="contained"
//             onClick={handleClick}
//             sx={{
//               mt: 4,
//               minWidth: 120,
//               height: 36,
//               borderRadius: 2,
//               background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
//               color: '#000',
//               fontWeight: 'bold',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
//               }
//             }}
//           >
//             Download
//           </Button>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handlePDFDownload}>Download as PDF</MenuItem>
//             <MenuItem onClick={() => handleImageDownload('png')}>Download as PNG</MenuItem>
//             <MenuItem onClick={() => handleImageDownload('jpeg')}>Download as JPG</MenuItem>
//           </Menu>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default GiftCard2;

import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Menu, MenuItem } from "@mui/material";
import JsBarcode from "jsbarcode";
import html2canvas from "html2canvas";
import Ribanimg from "../Assets/GiftCard/riban.png";
import Eraxlogoimg from "../Assets/GiftCard/EraxLogo.png";
import Coineranameimg from "../Assets/GiftCard/CoinEraname.png";
import CoinLogo from "../Assets/home_web/logo.png";
import GiftCardname from '../Assets/GiftCard/GiftCard_nameimg.png';
import jsPDF from "jspdf";

const GiftCardGC = () => {
  const [barcode, setBarcode] = useState("");
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const cardRef = useRef(null);
  const cardBackRef = useRef(null);
  const barcodeRef = useRef(null);

  // Standard credit card dimensions (in mm)
  const CARD_WIDTH = 85.6;
  const CARD_HEIGHT = 53.98;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generateBarcode = (value) => {
    try {
      if (barcodeRef.current && value) {
        while (barcodeRef.current.firstChild) {
          barcodeRef.current.removeChild(barcodeRef.current.firstChild);
        }
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        barcodeRef.current.appendChild(svgElement);
        JsBarcode(svgElement, value, {
          format: "CODE128",
          lineColor: "black",
          width: 1.2,
          height: 40,
          displayValue: true,
          background: "white",
          fontSize: 10,
          margin: 4
        });
      }
    } catch (err) {
      console.error("Error generating barcode:", err);
    }
  };

  useEffect(() => {
    if (cardData && cardData.barcode) {
      generateBarcode(cardData.barcode);
    }
  }, [cardData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/getgiftcardbybarcode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ barcode }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setCardData(data.giftCard);
      } else {
        setError(data.message || "Failed to fetch gift card");
      }
    } catch (error) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handlePDFDownload = async () => {
    const frontElement = cardRef.current;
    const backElement = document.createElement('div');
    
    // Create backside design
    backElement.style.width = `${CARD_WIDTH}mm`;
    backElement.style.height = `${CARD_HEIGHT}mm`;
    backElement.style.position = 'relative';
    backElement.style.backgroundColor = 'rgb(28, 29, 34)';
    backElement.innerHTML = `
      <div style="
        position: absolute;
        top: 4%;
        right: 6%;
        color: #FFD700;
        font-size: 12px;
        font-family: Arial, sans-serif;
      ">www.coinera.ai</div>
      <img src="${CoinLogo}" style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        height: auto;
        opacity: 0.8;
      "/>
      <div style="
        position: absolute;
        bottom: 8%;
        left: 50%;
        transform: translateX(-50%);
        color: #FFD700;
        font-family: 'Dancing Script', poppins;
        font-size: 16px;
        width: 80%;
        text-align: center;
      ">Crypto for Everyone, Everywhere!</div>
    `;

    document.body.appendChild(backElement);

    // Initialize jsPDF
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [CARD_WIDTH, CARD_HEIGHT],
    });

    // Render front side
    const frontCanvas = await html2canvas(frontElement, {
      scale: 4,
      useCORS: true,
      backgroundColor: null,
    });
    const frontImgData = frontCanvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(frontImgData, "JPEG", 0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Add new page for backside
    pdf.addPage([CARD_WIDTH, CARD_HEIGHT], "landscape");

    // Render back side
    const backCanvas = await html2canvas(backElement, {
      scale: 4,
      useCORS: true,
      backgroundColor: null,
    });
    
    document.body.removeChild(backElement);
    
    const backImgData = backCanvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(backImgData, "JPEG", 0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Save the PDF
    pdf.save(`gift-card-${cardData?.barcode}.pdf`);
    handleClose();
  };

  const handleImageDownload = async (format) => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      logging: true,
      letterRendering: true
    });
    
    const image = canvas.toDataURL(`image/${format}`);
    const link = document.createElement('a');
    link.href = image;
    link.download = `gift-card-${cardData?.barcode}.${format}`;
    link.click();
    handleClose();
  };

  return (
    <Box sx={{ 
      padding: { xs: 2, sm: 4 }, 
      maxWidth: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          width: "100%",
          maxWidth: 400,
          mb: 4,
          marginTop: '60px'
        }}
      >
        <TextField
          fullWidth
          label="Enter Barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          required
          sx={{ 
            mb: 2, 
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
          disabled={loading}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            minWidth: 150,
            height: 40,
            borderRadius: 2,
            background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
            color: '#000',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
            }
          }}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Gift Card"}
        </Button>
        {error && (
          <Typography color="error" sx={{ mb: 2, mt: 1 }}>
            {error}
          </Typography>
        )}
      </Box>

      {cardData && (
        <Box sx={{ 
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4
        }}>
          <Box
            ref={cardRef}
            sx={{
              position: "relative",
              width: { xs: 320, sm: 400, md: 450 },
              height: { xs: 200, sm: 250, md: 280 },
              borderRadius: 3,
              background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(28, 29, 34) 90%)",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
              padding: 4,
              overflow: "hidden",
              aspectRatio: `${CARD_WIDTH}/${CARD_HEIGHT}`,
              '@media print': {
                width: `${CARD_WIDTH}mm`,
                height: `${CARD_HEIGHT}mm`,
              }
            }}
          >
            <Box
              component="img"
              src={Ribanimg}
              alt="Ribbon"
              sx={{
                position: "absolute",
                top: -8,
                right: "-25%",
                width: "65%",
                height: 400,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "89%",
                left: "28%",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#e9b64e",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                WebkitTextStroke: "0.12px white",
                fontFamily:'cursive',
              }}
            >
            </Typography>
            <Box
              component="img"
              src={CoinLogo}
              alt="Coineranameimg"
              sx={{
                position: "absolute",
                bottom: "50%",
                left: "37%",
                width: "25%",
                height: "38%",
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "36%",
                left: "32%",
                fontSize: "1.9rem",
                fontWeight: "bold",
                color: "#FFD700",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                WebkitTextStroke: "0.9px white",
              }}
            >
              GIFT CARD
            </Typography>
            <Box
              ref={barcodeRef}
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70%",
                height: "auto",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '4px',
                borderRadius: '4px',
              }}
            />

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              position: 'absolute',
              top: "60%",
              width: "80%",
              left: "10%"
            }}>
              <Typography sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
                color: '#FFD700',
              }}>
                ₹{cardData.amount}
              </Typography>
              <Typography sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
                color: '#FFD700',
              }}>
                ERA{cardData.coinvalue}
              </Typography>
            </Box>

            <Box
              component="img"
              src={Eraxlogoimg}
              alt="Erax Logo"
              sx={{
                position: "absolute",
                bottom: "27%",
                left: "-31%",
                width: "88%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              mt: 4,
              minWidth: 120,
              height: 36,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
              }
            }}
          >
            Download
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handlePDFDownload}>Download as PDF</MenuItem>
            <MenuItem onClick={() => handleImageDownload('png')}>Download as PNG</MenuItem>
            <MenuItem onClick={() => handleImageDownload('jpeg')}>Download as JPG</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default GiftCardGC;