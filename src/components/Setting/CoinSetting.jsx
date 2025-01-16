// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   TextField,
//   Button,
//   Grid,
//   Card,
//   CardContent,
// } from "@mui/material";
// import axios from "axios";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const CoinRateComponent = () => {
//   const [coinRate, setCoinRate] = useState(null);
//   const [coinRateHistory, setCoinRateHistory] = useState([]); // State for coin rate history
//   const [newRate, setNewRate] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false); // Assuming you check user role here
//   const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     // Fetch the current coin rate on component mount
//     axios
//       .get("https://apiamazingdubai.ipaisa.co.in/api/public/getcoinrate", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setCoinRate(response.data.rate); // Assuming response.data.rate contains the rate
//       })
//       .catch((error) => {
//         console.error("Error fetching coin rate:", error);
//       });

//     // Fetch coin rate history
//     axios
//       .get("https://apiamazingdubai.ipaisa.co.in/api/public/coinratehistory", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setCoinRateHistory(response.data); // Set the fetched history
//       })
//       .catch((error) => {
//         console.error("Error fetching coin rate history:", error);
//       });

//     // Check user role (example - assuming your app has role-based logic)
//     const userRole = localStorage.getItem("userRole"); // assuming role is stored in localStorage
//     if (userRole === "ADMIN") {
//       setIsAdmin(true);
//     }
//   }, [token]);

//   const handleRateChange = (event) => {
//     setNewRate(event.target.value);
//   };

//   const handleUpdateCoinRate = () => {
//     if (!isAdmin) {
//       Swal.fire({
//         icon: "error",
//         title: "Unauthorized",
//         text: "Only admin can update the coin rate.",
//       });
//       return;
//     }

//     // Make PUT request to update coin rate
//     axios
//       .put(
//         "https://apiamazingdubai.ipaisa.co.in/api/admin/updatecoinrate",
//         { rate: newRate },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         Swal.fire({
//           icon: "success",
//           title: "Coin Rate Updated Successfully",
//           text: `New Rate: ${response.data.newCoinRate.rate} INR`,
//         });
//         setCoinRate(response.data.newCoinRate.rate); // Update the displayed coin rate
//         setNewRate(""); // Clear input field
//       })
//       .catch((error) => {
//         console.error("Error updating coin rate:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Failed to Update Coin Rate",
//           text: "There was an error updating the coin rate. Please try again later.",
//         });
//       });
//   };

//   return (
//     <Box
//       sx={{
//         padding: "2rem",
//         background: "linear-gradient(135deg, #00c6ff, #0072ff)",
//         mt: 9,
//       }}
//     >
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={6}>
//             <Card sx={{ boxShadow: 6, borderRadius: 3, padding: 2 }}>
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ color: "#ffffff", fontWeight: 600 }}
//                 >
//                   Current Coin Rate
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: "bold", color: "#3f51b5" }}
//                 >
//                   {coinRate ? `${coinRate} INR` : "Loading..."} /coin
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {isAdmin && (
//             <Grid item xs={12} sm={6} md={6}>
//               <Card sx={{ boxShadow: 6, borderRadius: 3, padding: 2 }}>
//                 <CardContent>
//                   <Typography
//                     variant="h5"
//                     gutterBottom
//                     sx={{ color: "#ffffff", fontWeight: 600 }}
//                   >
//                     Update Coin Rate
//                   </Typography>
//                   <TextField
//                     label="New Coin Rate"
//                     variant="outlined"
//                     fullWidth
//                     value={newRate}
//                     onChange={handleRateChange}
//                     type="number"
//                     sx={{
//                       marginBottom: "1rem",
//                       borderRadius: "8px",
//                       backgroundColor: "#ffffff",
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={handleUpdateCoinRate}
//                     disabled={!newRate}
//                     sx={{
//                       padding: "0.75rem",
//                       fontWeight: "bold",
//                       borderRadius: "8px",
//                       "&:hover": {
//                         backgroundColor: "#0056b3",
//                       },
//                     }}
//                   >
//                     Update Rate
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           )}

//           <Grid item xs={12}>
//             <Card
//               sx={{
//                 boxShadow: 6,
//                 borderRadius: 3,
//                 padding: 2,
//                 background: "linear-gradient(135deg, #4caf50, #81c784)",
//                 color: "#ffffff",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{
//                     color: "#ffffff",
//                     fontWeight: 700,
//                     fontFamily: "Poppins, sans-serif",
//                     textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//                   }}
//                 >
//                   Coin Rate History
//                 </Typography>
//                 {coinRateHistory.length > 0 ? (
//                   <Box>
//                     {coinRateHistory.map((history) => (
//                       <Typography
//                         key={history.id}
//                         sx={{
//                           color: "#f1f1f1",
//                           fontWeight: 500,
//                           fontFamily: "Poppins, sans-serif",
//                           backgroundColor: "rgba(0, 0, 0, 0.2)",
//                           borderRadius: 1,
//                           padding: "0.5rem",
//                           marginBottom: "0.5rem",
//                         }}
//                       >
//                         {`Rate: ${history.rate} INR | Effective Date: ${new Date(
//                           history.effectiveDate
//                         ).toLocaleString()}`}
//                       </Typography>
//                     ))}
//                   </Box>
//                 ) : (
//                   <Typography
//                     sx={{
//                       color: "#ffeb3b",
//                       fontWeight: 600,
//                       fontFamily: "Poppins, sans-serif",
//                     }}
//                   >
//                     No history available.
//                   </Typography>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CoinRateComponent;


import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const CoinRateComponent = () => {
  const [coinRate, setCoinRate] = useState(null);
  const [coinRateHistory, setCoinRateHistory] = useState([]);
  const [newRate, setNewRate] = useState("");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    // Fetch the current coin rate
    axios
      .get("https://apiamazingdubai.ipaisa.co.in/api/public/getcoinrate", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCoinRate(response.data.rate);
      })
      .catch((error) => {
        console.error("Error fetching coin rate:", error);
      });

    // Fetch coin rate history
    axios
      .get("https://apiamazingdubai.ipaisa.co.in/api/public/coinratehistory", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCoinRateHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coin rate history:", error);
      });
  }, [token]);

  const handleRateChange = (event) => {
    setNewRate(event.target.value);
  };

  const handleUpdateCoinRate = () => {
    // Make PUT request to update coin rate
    axios
      .put(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/updatecoinrate",
        { rate: newRate },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Coin Rate Updated Successfully",
          text: `New Rate: ${response.data.newCoinRate.rate} INR`,
        });
        setCoinRate(response.data.newCoinRate.rate);
        setNewRate("");
      })
      .catch((error) => {
        console.error("Error updating coin rate:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Update Coin Rate",
          text: "There was an error updating the coin rate. Please try again later.",
        });
      });
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        mt: 9,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
          <Card
  sx={{
    boxShadow: 6,
    borderRadius: 3,
    padding: 2,
    background: "linear-gradient(135deg,rgb(44, 45, 49) 30%,rgb(10, 41, 221) 90%)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }}
>
  <CardContent>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontWeight: 600, mb: 1 }}
    >
      Current Coin Rate
    </Typography>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#ffeb3b",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      {coinRate ? `${coinRate} INR` : "Loading..."} /coin
    </Typography>
  </CardContent>
</Card>

          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ boxShadow: 6, borderRadius: 3, padding: 2,
                background: "linear-gradient(135deg,rgb(44, 45, 49) 30%,rgb(10, 41, 221) 90%)",
 
            
            }}>
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ color: "#ffffff", fontWeight: 600 }}
                >
                  Update Coin Rate
                </Typography>
                <TextField
                  label="New Coin Rate"
                  variant="outlined"
                  fullWidth
                  value={newRate}
                  onChange={handleRateChange}
                  type="number"
                  sx={{
                    marginBottom: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                  }}
                />
                <Button
  variant="contained"
  color="primary"
  fullWidth
  onClick={handleUpdateCoinRate}
  disabled={!newRate}
  sx={{
    padding: "0.75rem",
    fontWeight: "bold",
    borderRadius: "8px",
    color: "#ffffff", // Text remains white
    backgroundColor: "#3f51b5", // Ensure button has a defined background color
    "&:hover": {
      backgroundColor: "#ffffff", // Button background changes to white
      color: "#3f51b5", // Text color changes to primary blue on hover
    },
    "&:disabled": {
      backgroundColor: "#e0e0e0", // Light gray background for disabled state
      color: "#9e9e9e", // Gray text for disabled state
    },
  }}
>
  Update Rate
</Button>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                boxShadow: 6,
                borderRadius: 3,
                padding: 2,
                background: "linear-gradient(135deg,rgb(44, 45, 49) 30%,rgb(10, 41, 221) 90%)",
                color: "#ffffff",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Coin Rate History
                </Typography>
                {coinRateHistory.length > 0 ? (
                  <Box>
                    {coinRateHistory.map((history) => (
                      <Typography
                        key={history.id}
                        sx={{
                          color: "#f1f1f1",
                          fontWeight: 500,
                          fontFamily: "Poppins, sans-serif",
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                          borderRadius: 1,
                          padding: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {`Rate: ${history.rate} INR | Effective Date: ${new Date(
                          history.effectiveDate
                        ).toLocaleString()}`}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      color: "#ffeb3b",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    No history available.
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoinRateComponent;
