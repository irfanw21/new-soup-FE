import React, { useState } from 'react';
import './index.css'
import { Box, TextField, Button, Typography} from '@mui/material';
import HeaderAuth from '../../components/header/header-login/navbar-login';
import useCheckLogin from '../../hooks/localstorage.jsx'
import useLogout from "../../hooks/locallogout.jsx"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const EmailReset = () => {
  const { isLoggedIn } = useCheckLogin();
  const api = import.meta.env.VITE_URL_API;
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const [data, setData] = useState({
    email: "",
  });

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/login");
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setData({
      ...data,
      [name]: value,
    });
  
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!value.trim()) {
        setError({
          ...error,
          email: "Email tidak boleh kosong",
        });
      } else if (!emailRegex.test(value)) {
        setError({
          ...error,
          email: "Format email tidak valid",
        });
      } else {
        setError(prevState => ({
          ...prevState,
          email: "", // Clear the error message for a valid email
        }));
      }
    }
  };
  
  const [error, setError] = useState({
    email: "",
  });
  
  const handleReset = () => {
    setError({
      email: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    if (!data.email) {
      setError({
        ...error,
        email: 'Email is required',
      });
      return;
    }
  
    // Perform action on form submission (e.g., send OTP)
    console.log(data);
  
    // Clear errors
    setError({
      email: '',
    });
  };

  const handleClick = async () => {
    handleReset();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email.trim()) {
      setError({
        email: "Email tidak boleh kosong",
      });
    } else if (!emailRegex.test(data.email)) {
      setError({
        email: "Format email tidak valid",
      });
    } else {
      try {
        const response = await axios.post(
          `${api}/api/User/ForgetPassword`,
          {
            email: data.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      
        // Handle response data here (e.g., show success message)
        console.log(response.data);
        alert("An Email to reset your password has been sent!");
      } catch (error) {
        // Handle errors here (e.g., show error message)
        console.error(error);
        alert("Email sent failed. Please try again.");
      }
    }
  };

  return (
    <>
<HeaderAuth/>
      <Box
        className="login-container"
        sx={{
          padding: '20px',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>Reset Password</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>Send OTP code to your email address</Typography>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <TextField
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              inputProps={{ type: "email" }}
              onChange={handleInput}
              error={!!error.email}
              helperText={error.email}
              fullWidth
            />
          </div>
          <div className="button_login" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Link to="/login" style={{ textDecoration: 'none', marginRight: '20px' }}>
			        <Button variant="outlined" 
              sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, 
              width: '140px', 
              borderRadius: '8px', 
              backgroundColor: 'white', 
              border: '1px solid #5B4947', 
              color: '#5B4947', 
              fontFamily: 'Montserrat, sans-serif'  }]}>Cancel</Button>
            </Link>
           <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              '&:hover': { backgroundColor: '#EA9E1F' },
              width: '140px',
              borderRadius: '8px',
              backgroundColor: '#EA9E1F',
              color: '#5B4947'
            }}
          >
            Confirm
          </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default EmailReset;
