// import React from "react";
// import { useFormik } from "formik";
// import { Box, TextField, Button, Typography, Grid, Checkbox,MenuItem ,InputAdornment,} from "@mui/material";
// import CoinLogo from "../Assets/home_web/coin_img.png";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// const UserRegister = () => {
//   const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//       errors.name = "Name is required";
//     }

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!values.mobile) {
//       errors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(values.mobile)) {
//       errors.mobile = "Mobile number must be 10 digits";
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       occupation: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       console.log("Form values", values);
//       alert("Form submitted successfully!");
//     },
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#0b0e2b",
//         padding: 2,
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "400px" },
//           background: "#fff",
//           borderRadius: "10px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
        

//         <Box
//   sx={{
//     background: "linear-gradient(90deg,rgb(8, 192, 238) 0%,rgb(220, 252, 37) 100%)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px 10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   }}
// >
//   <Box>
//     <Typography variant="h6" fontWeight="bold">
//       REGISTRATION
//     </Typography>
//     <Typography variant="body2">Enter your personal data</Typography>
//   </Box>
//   <Box
//   sx={{
//     position: "relative",
//     display: "inline-block",
//     marginRight: "10px",
//     "&::before": {
//       content: '""',
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       width: "200px",
//       height: "200px",
//       background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(230, 21, 21, 0) 70%)",
//       zIndex: -1,
//       borderRadius: "50%",
//     },
//   }}
// >
//   <Box
//     component="img"
//     src={CoinLogo}
//     alt="Coin Logo"
//     sx={{
//       height: "100px",
//       width: "150px",
//       position: "relative",
//       zIndex: 1,
//     }}
//   />
// </Box>

// </Box>


//         <Box
//           component="form"
//           onSubmit={formik.handleSubmit}
//           sx={{
//             padding: 3,
//           }}
//         >
//           <Grid container spacing={2}>
//           <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Mobile Number"
//                 name="mobile"
//                 value={formik.values.mobile}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.mobile && Boolean(formik.errors.mobile)}
//                 helperText={formik.touched.mobile && formik.errors.mobile}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PhoneIphoneIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 select
//                 label="Occupation"
//                 name="occupation"
//                 value={formik.values.occupation}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.occupation && Boolean(formik.errors.occupation)}
//                 helperText={formik.touched.occupation && formik.errors.occupation}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <BusinessCenterIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               >
//                 <MenuItem value="Student">Student</MenuItem>
//                 <MenuItem value="Business Man">Business Man</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
//               <Checkbox />
//               <Typography variant="body2">
//                 I agree to the <Typography component="span" sx={{ color: "#2575fc", cursor: "pointer" }}>terms and conditions</Typography>
//               </Typography>
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   background: "#6a11cb",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   "&:hover": { background: "#2575fc" },
//                 }}
//               >
//                 SUBMIT
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box
//   sx={{
//     background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px 10px",
//     marginTop: "10px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//   }}
// >
//   <Typography variant="body1" fontWeight="bold" sx={{ letterSpacing: "0.5px" }}>
//     Thank You!
//   </Typography>
// </Box>

//       </Box>
//     </Box>
//   );
// };

// export default UserRegister;


// import React, { useState } from "react"; 
// import { useFormik } from "formik";
// import { Box, TextField, Button, Typography, Grid, Checkbox, MenuItem, InputAdornment } from "@mui/material";
// import CoinLogo from "../Assets/home_web/coin_img.png";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import axios from 'axios';

// const UserRegister = () => {
//   const [message, setMessage] = useState(""); // State to store the success message

//   const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//       errors.name = "Name is required";
//     }

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!values.mobile) {
//       errors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(values.mobile)) {
//       errors.mobile = "Mobile number must be 10 digits";
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       occupation: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       // Make the API call when the form is submitted
//       axios.post("https://apiamazingdubai.ipaisa.co.in/registereventuser", {
//         fullName: values.name,
//         email: values.email,
//         mobileNo: values.mobile,
//         occupation: values.occupation
//       })
//       .then((response) => {
//         // On successful submission, set the success message
//         setMessage(response.data.message);
//       })
//       .catch((error) => {
//         // Handle error if any
//         console.error("Error submitting form:", error);
//         setMessage("Error submitting registration. Please try again.");
//       });
//     },
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#0b0e2b",
//         padding: 2,
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "400px" },
//           background: "#fff",
//           borderRadius: "10px",
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <Box
//           sx={{
//             background: "linear-gradient(90deg,rgb(94, 6, 86) 0%,rgb(92, 21, 3) 100%)",
//             color: "#fff",
//             textAlign: "center",
//             padding: "20px 10px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Box>
//             <Typography variant="h6" fontWeight="bold">
//               REGISTRATION
//             </Typography>
//             <Typography variant="body2">Enter your personal data</Typography>
//           </Box>
//           <Box
//             sx={{
//               position: "relative",
//               display: "inline-block",
//               marginRight: "10px",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "200px",
//                 height: "200px",
//                 background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(230, 21, 21, 0) 70%)",
//                 zIndex: -1,
//                 borderRadius: "50%",
//               },
//             }}
//           >
//             <Box
//               component="img"
//               src={CoinLogo}
//               alt="Coin Logo"
//               sx={{
//                 height: "100px",
//                 width: "150px",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             />
//           </Box>
//         </Box>

//         <Box
//           component="form"
//           onSubmit={formik.handleSubmit}
//           sx={{
//             padding: 3,
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="WhatsApp Number"
//                 name="mobile"
//                 value={formik.values.mobile}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.mobile && Boolean(formik.errors.mobile)}
//                 helperText={formik.touched.mobile && formik.errors.mobile}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PhoneIphoneIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 select
//                 label="Occupation"
//                 name="occupation"
//                 value={formik.values.occupation}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.occupation && Boolean(formik.errors.occupation)}
//                 helperText={formik.touched.occupation && formik.errors.occupation}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <BusinessCenterIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   required: true,
//                 }}
//               >
//                 <MenuItem value="Student">Student</MenuItem>
//                 <MenuItem value="Business">Business</MenuItem>
//               </TextField>
//             </Grid>

//             {/* <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
//               <Checkbox />
//               <Typography variant="body2">
//                 I agree to the <Typography component="span" sx={{ color: "#2575fc", cursor: "pointer" }}>terms and conditions</Typography>
//               </Typography>
//             </Grid> */}

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//       background: "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)", // Gradient background
//       color: "#fff",
//       fontWeight: "bold",
//       fontSize: "16px",
//       padding: "12px 24px", // Increased padding for a larger button
//       borderRadius: "50px", // Rounded corners
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Slight shadow for 3D effect
//       transition: "all 0.3s ease-in-out", // Smooth transition for hover effects

//       // Hover state for interactive effect
//       "&:hover": {
//         background: "linear-gradient(45deg, #2575fc 30%, #6a11cb 90%)", // Reverse gradient on hover
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Deeper shadow on hover
//         transform: "scale(1.05)", // Slight zoom effect on hover
//       },

//       // Active state for when the button is clicked
//       "&:active": {
//         transform: "scale(0.98)", // Slight shrink effect when clicked
//       },
//     }}
//               >
//                 SUBMIT
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>

//         {message && (
//           <Box
//             sx={{
//               background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
//               color: "#fff",
//               textAlign: "center",
//               padding: "20px 10px",
//               marginTop: "10px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <Typography variant="body1" fontWeight="bold" sx={{ letterSpacing: "0.5px" }}>
//               {message}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default UserRegister;


import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, TextField, Button, Typography, Grid, MenuItem, InputAdornment } from "@mui/material";
import CoinLogo from "../Assets/home_web/coin_img.png";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Swal from "sweetalert2"; // Import SweetAlert2
import successUserSound from "../Assets/success_user_create.mp3"; // Import success sound
import axios from "axios";

const UserRegister = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      occupation: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axios
        .post("https://apiamazingdubai.ipaisa.co.in/registereventuser", {
          fullName: values.name,
          email: values.email,
          mobileNo: values.mobile,
          occupation: values.occupation,
        })
        .then((response) => {
          // Play success sound
          const audio = new Audio(successUserSound);
          audio.play();

          // Show success message with Swal
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });

          // Reset form
          resetForm();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);

          // Show error message with Swal
          Swal.fire({
            title: "Error!",
            text: "Error submitting registration. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "Close",
          });
        });
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0b0e2b",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "400px" },
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg,rgb(94, 6, 86) 0%,rgb(92, 21, 3) 100%)",
            color: "#fff",
            textAlign: "center",
            padding: "20px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              REGISTRATION
            </Typography>
            <Typography variant="body2">Enter your personal data</Typography>
          </Box>
          <Box
            component="img"
            src={CoinLogo}
            alt="Coin Logo"
            sx={{
              height: "100px",
              width: "150px",
              marginLeft: "auto",
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            padding: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="WhatsApp Number"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Occupation"
                name="occupation"
                value={formik.values.occupation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.occupation && formik.errors.occupation}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessCenterIcon />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default UserRegister;
