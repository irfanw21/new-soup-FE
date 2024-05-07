import React, { useState } from 'react';
import './index.css'
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import HeaderAuth from '../../components/header/header-login/navbar-login';

const EmailReset = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email) {
      setErrors({
        email: 'Email is required',
      });
      return;
    }

    // Perform action on form submission (e.g., send OTP)
    console.log(formData);

    // Clear errors
    setErrors({
      email: '',
    });
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
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="button_login" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Link to="/login" style={{ textDecoration: 'none', marginRight: '20px' }}>
			<Button variant="outlined" sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', backgroundColor: 'white', border: '1px solid #5B4947', color: '#5B4947', fontFamily: 'Montserrat, sans-serif'  }]}>Cancel</Button>
            </Link>
           <Button
            variant="contained"
            sx={{
              '&:hover': { backgroundColor: '#EA9E1F' },
              width: '140px',
              borderRadius: '8px',
              backgroundColor: '#EA9E1F',
              color: '#5B4947'
            }}
          >
            confirm
          </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default EmailReset;
