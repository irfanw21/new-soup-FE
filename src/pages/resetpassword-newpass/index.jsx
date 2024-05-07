import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/header/header-login/navbar-login";
import { Box, TextField, Container, Button } from "@mui/material";
import styled from "styled-components";
import "./style.css"; // Import the separated CSS file

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const NewPass = () => {
  useEffect(() => {
    // Your API request logic within useEffect
    const resetPassword = async () => {
      try {
        const response = await fetch("https://localhost:7012/api/User/ResetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "irfantester123@gmail.com",
            newPassword: "123",
            confirmPassword: "123",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to reset password");
        }

        const responseData = await response.json();
        // Handle response data here
        console.log(responseData);
      } catch (error) {
        // Handle error
        console.error("Error resetting password:", error);
      }
    };

    // Call the resetPassword function when component mounts
    resetPassword();
  }, []);

  useEffect(() => {
    const classesToRemove = [
      'MuiButtonBase-root',
      'MuiButton-root',
      'MuiButton-contained',
      'MuiButton-containedPrimary',
      'MuiButton-sizeMedium',
      'MuiButton-containedSizeMedium',
      'MuiButton-colorPrimary',
      'css-sghohy-MuiButtonBase-root-MuiButton-root',
      'MuiButton-outlined',
      'MuiButton-outlinedPrimary',
      'MuiButton-outlinedSizeMedium',
      'MuiButton-colorPrimary',
      'css-1rwt2y5-MuiButtonBase-root-MuiButton-root'
    ];

    const cancelButton = document.querySelector('.cancel-button');
    const submitButton = document.querySelector('.submit-button');

    if (cancelButton) {
      classesToRemove.forEach(className => {
        cancelButton.classList.remove(className);
      });
    }

    if (submitButton) {
      classesToRemove.forEach(className => {
        submitButton.classList.remove(className);
      });
    }
  }, []);

  const [data, setData] = useState({
    email: "", // New email state
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "", // New email error state
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleReset = () => {
    setError({
      email: "", // Reset email error state
      password: "",
      confirmPassword: "",
    });
  };

  const handleClick = () => {
    handleReset();
    switch (true) {
      case !data.email: // Check if email is empty
        setError({
          ...error,
          email: "This field cannot be empty", // Set email error message
        });
        break;
      case !data.password && !data.confirmPassword:
        setError({
          ...error,
          password: "This field cannot be empty",
          confirmPassword: "This field cannot be empty",
        });
        break;
      case !data.password:
        setError({
          ...error,
          password: "This Field Cannot Be Empty",
        });
        break;
      case !data.confirmPassword:
        setError({
          ...error,
          confirmPassword: "This Field Cannot Be Empty",
        });
        break;
      default:
        setError({
          email: "", // Set email error to empty if no error
          password: "", // Set password error to empty if no error
          confirmPassword: "", // Set confirm password error to empty if no error
        });
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className="register">
          <Box
            display={"flex"}
            justifyContent={"center"}
            marginTop={"60px"}
            fontFamily={"Montserrat, sans-serif"}
          >
            <Box display={"flex"} flexDirection={"column"} width={"50%"}>
              <div className="title">Create Password</div>
              <TextField
                name="email" // Email TextField
                error={Boolean(error.email)} // Convert error string to boolean
                onChange={handleInput}
                variant="outlined"
                label="Email"
                helperText={error.email}
                sx={{
                  marginBottom: "24px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              />
              <TextField
                name="password"
                error={Boolean(error.password)} // Convert error string to boolean
                onChange={handleInput}
                variant="outlined"
                label="New Password"
                helperText={error.password}
                sx={{
                  marginBottom: "24px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              />
              <TextField
                name="confirmPassword"
                error={Boolean(error.confirmPassword)} // Convert error string to boolean
                onChange={handleInput}
                variant="outlined"
                label="Confirm New Password"
                helperText={error.confirmPassword}
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              />
              <Box
                marginTop={"40px"}
                display={"flex"}
                justifyContent={"end"}
                gap={"24px"}
              >
                <Button className="cancel-button" variant="outlined">
                  Cancel
                </Button>
                <Button
                  className="submit-button"
                  variant="contained"
                  onClick={handleClick}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default NewPass;
