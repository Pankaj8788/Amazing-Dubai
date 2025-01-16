import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import successuserSound from "../Assets/success_user_create.mp3";

const CreateUser = () => {
  const handleSubmit = async (values, resetForm) => {
    try {
      const token = localStorage.getItem("authToken"); // Replace with your actual token
      const response = await axios.post(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/createuser",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        // Play the success sound
        const audio = new Audio(successuserSound);
        audio.play();

        Swal.fire({
          icon: "success",
          title: "User Created Successfully",
          html: `<strong>User Details:</strong><br>
            First Name: ${response.data.user.firstname}<br>
            Last Name: ${response.data.user.lastname}<br>
            Email: ${response.data.user.email}<br>
            Mobile: ${response.data.user.mobileno}<br>
            Target Coins: ${response.data.user.targetCoins}<br>`,
        });
        resetForm(); // Reset the form after success
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "User Creation Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobileno: "",
      email: "",
      // mpin: "",
      role: "USER",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstname) errors.firstname = "First Name is required";
      if (!values.lastname) errors.lastname = "Last Name is required";
      if (!values.mobileno) {
        errors.mobileno = "Mobile Number is required";
      } else if (!/^\d{10}$/.test(values.mobileno)) {
        errors.mobileno = "Invalid Mobile Number (10 digits required)";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
  
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)",
      }}
    >
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{
            p: 4,
            borderRadius: "12px",
            boxShadow: 3,
            background: "white",
            mt:2,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            textAlign="center"
            mb={3}
            color="primary"
            sx={{
              mt: 4,
              fontWeight: "bold",
            }}
          >
            Create User
          </Typography>
          <TextField
            fullWidth
            label="First Name"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Whats'app Mobile Number"
            name="mobileno"
            value={formik.values.mobileno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobileno && Boolean(formik.errors.mobileno)}
            helperText={formik.touched.mobileno && formik.errors.mobileno}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          {/* <TextField
            fullWidth
            label="MPIN"
            name="mpin"
            type="password"
            value={formik.values.mpin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mpin && Boolean(formik.errors.mpin)}
            helperText={formik.touched.mpin && formik.errors.mpin}
            margin="normal"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              background: "linear-gradient(135deg, rgb(255, 234, 43), rgb(242, 255, 65))",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(135deg, rgb(242, 255, 65), rgb(255, 234, 43))",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateUser;
