// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { Box, TextField, Button, Typography, Grid, MenuItem, InputAdornment } from "@mui/material";
// import WecanLogo from '../Assets/wecanimg/Wecanlogo.jpeg'
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import Swal from "sweetalert2"; // Import SweetAlert2
// import successUserSound from "../Assets/success_user_create.mp3"; // Import success sound
// import axios from "axios";

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
//     onSubmit: (values, { resetForm }) => {
//       axios
//         .post("https://apiamazingdubai.ipaisa.co.in/registereventuser", {
//           fullName: values.name,
//           email: values.email,
//           mobileNo: values.mobile,
//           occupation: values.occupation,
//         })
//         .then((response) => {
//           // Play success sound
//           const audio = new Audio(successUserSound);
//           audio.play();

//           // Show success message with Swal
//           Swal.fire({
//             title: "Success!",
//             text: response.data.message,
//             icon: "success",
//             confirmButtonColor: "#3085d6",
//             confirmButtonText: "OK",
//           });

//           // Reset form
//           resetForm();
//         })
//         .catch((error) => {
//           console.error("Error submitting form:", error);

//           // Show error message with Swal
//           Swal.fire({
//             title: "Error!",
//             text: "Error submitting registration. Please try again.",
//             icon: "error",
//             confirmButtonColor: "#d33",
//             confirmButtonText: "Close",
//           });
//         });
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
//             component="img"
//             src={WecanLogo}
//             alt="Coin WecanLogo"
//             sx={{
//               height: "100px",
//               width: "150px",
//               marginLeft: "auto",
//             }}
//           />
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
//                 helperText={formik.touched.occupation && formik.errors.occupation}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <BusinessCenterIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               >
//                 <MenuItem value="Student">Student</MenuItem>
//                 <MenuItem value="Business">Business</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   background: "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
//                   color: "#fff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 SUBMIT
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default UserRegister;


//I am creating a registration form for We Can registration which is basically for a woman enterprenaur registration...in there give on down side note-please select Business or Other -when woman is working,enterprenaur,housewife..as well as add related quote and when successfully register in swal remove existing message and message like registration successfully..
//as well as totally changed current design of this ui..make this like a very attractive and eye catching design..also logo should be in rounded with heilight border..on form add like vector background or woman related bg and color combination as well as on swal tie give awesome quote as well on form too..give me full updated and redesign code according to prompt



import React from "react";
import { Box, TextField, Button, Typography, Grid, MenuItem, InputAdornment, Paper } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Swal from "sweetalert2";
import axios from "axios";

const UserRegister = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    occupation: "",
  });
  
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    mobile: "",
    occupation: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.mobile) {
      tempErrors.mobile = "WhatsApp number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "WhatsApp number must be 10 digits";
      isValid = false;
    }
    
    if (!formData.occupation) {
      tempErrors.occupation = "Please select your occupation";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      axios
        .post("https://apiamazingdubai.ipaisa.co.in/registereventuser", {
          fullName: formData.name,
          email: formData.email,
          mobileNo: formData.mobile,
          occupation: formData.occupation,
        })
        .then((response) => {
          // Show success message with inspiring quote
          Swal.fire({
            title: "Registration Successful!",
            html: `
              <div style="padding: 10px;">
                <p style="margin-bottom: 20px;">Your journey as a woman entrepreneur begins here!</p>
                <div style="font-style: italic; color: #9c27b0; padding: 15px; background: #f8f4f9; border-radius: 8px;">
                  "The question isn't who's going to let me; it's who's going to stop me." - Ayn Rand
                </div>
              </div>
            `,
            icon: "success",
            confirmButtonColor: "#9c27b0",
            confirmButtonText: "Begin My Journey",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            mobile: "",
            occupation: "",
          });
        })
        .catch((error) => {
          console.error("Error submitting form:", error);

          // Show error message with Swal
          Swal.fire({
            title: "Oops!",
            text: "We encountered an issue with your registration. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "Try Again",
          });
        });
    }
  };

  // Inspiring quotes for empowering women entrepreneurs
  const quotes = [
    "The most effective way to do it, is to do it. — Amelia Earhart",
    "We need women at all levels, including the top, to change the dynamic. — Sheryl Sandberg",
    "Define success on your own terms, achieve it by your own rules. — Anne Sweeney",
    "A woman with a voice is, by definition, a strong woman. — Melinda Gates" 
  ];
  
  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #fad0c4 100%)",
        padding: { xs: 2, md: 4 },
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: { xs: "95%", sm: "450px", md: "500px" },
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative side pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "15px",
            height: "100%",
            background: "linear-gradient(to bottom, #9c27b0, #e91e63)",
          }}
        />
        
        {/* Header section with logo */}
        <Box
          sx={{
            backgroundImage: "linear-gradient(45deg, #9c27b0 0%, #e91e63 100%)",
            color: "#fff",
            textAlign: "center",
            padding: "30px 20px",
            position: "relative",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            WE CAN
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Women Entrepreneurs Registration
          </Typography>
          
          {/* Logo in circle with glowing border */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #fff",
                boxShadow: "0 0 15px rgba(255,255,255,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
              }}
            >
              <Box
                component="img"
                src="/api/placeholder/120/120"
                alt="We Can Logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Quote section */}
        <Box
          sx={{
            p: 3,
            backgroundColor: "#faf2f7",
            borderLeft: "15px solid transparent",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              color: "#9c27b0",
              fontWeight: "medium",
            }}
          >
            "{randomQuote}"
          </Typography>
        </Box>

        {/* Form section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            padding: 3,
            backgroundColor: "#fff",
            borderLeft: "15px solid transparent",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#9c27b0" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#9c27b0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#9c27b0",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9c27b0",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#9c27b0" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#9c27b0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#9c27b0",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9c27b0",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="WhatsApp Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphoneIcon sx={{ color: "#9c27b0" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#9c27b0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#9c27b0",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9c27b0",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                error={Boolean(errors.occupation)}
                helperText={errors.occupation || "Please select Business or Other if you are working, entrepreneur or housewife"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessCenterIcon sx={{ color: "#9c27b0" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#9c27b0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#9c27b0",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#9c27b0",
                  },
                }}
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "30px",
                  boxShadow: "0 4px 20px rgba(156, 39, 176, 0.4)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 6px 25px rgba(156, 39, 176, 0.6)",
                  },
                }}
              >
                REGISTER NOW
              </Button>
            </Grid>
          </Grid>
        </Box>
        
        {/* Footer section */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            borderLeft: "15px solid transparent",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Join our community of empowered women entrepreneurs today!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserRegister;