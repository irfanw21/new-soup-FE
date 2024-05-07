import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/navbar-logo.png'
import keranjang from '../../../assets/navbar/keranjang.png'
import user from '../../../assets/navbar/user.png'
import logout from '../../../assets/navbar/logout.png'
import { Box, Button } from '@mui/material'
import './index.css'

const HeaderSignIn = () => {
    const handleLogout = () => {
        // Remove token from localStorage or perform any logout actions
        localStorage.removeItem('token');
        // Redirect to the login page or perform any navigation
        window.location.href = '/login'; // Directly changing the window location for simplicity
      };
    return (
    <header>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            paddingRight: '50px',
            paddingLeft: '50px'
        }}>
            <div style={{marginRight: '10px'}}>
                <img src={logo} alt="Logo" />
            </div>
            <Box 
                sx={{
                    display: 'flex', justifyContent: 'space-between'
                }}
            >
                <Button 
                   variant="text"
                   sx={{
                        '&:hover': { backgroundColor: 'white', opacity: 0.7 },
                        padding: 0, // Remove padding if you want the image to fit better
                        height: 'auto', // Adjust height as needed, or remove for auto height
                        marginRight: '10px', // Corrected from '10' to '10px'
                        backgroundColor: 'white',
                        color: '#5B4947',
                        border: 'none',
                        overflow: 'hidden' // Ensure the image does not overflow the button boundaries
                   }}
                 >
                   <img src={keranjang} alt="Keranjang" style={{ display: 'block' }} />
                </Button>
                <Button
                    variant="text"
                    sx={[{ '&:hover': { backgroundColor: 'white'}, 
                    marginRight: '10px', 
                    backgroundColor: 'white', 
                    color: '#5B4947', 
                    border: 'none', 
                    fontFamily: 'Montserrat, sans-serif' }]}>
                        My Class
                </Button>
                
                <Button
                    variant="text"
                    sx={[{ '&:hover': { backgroundColor: 'white'}, width: '140px', marginRight: '10', backgroundColor: 'white', color: '#5B4947', border: 'none', fontFamily: 'Montserrat, sans-serif' }]}>
                    Invoice
                </Button>

                <div style={{ border: '1px solid black', height: '25px', width: '0px', marginLeft: '10px', marginRight: '40px', marginTop: '10px', marginBottom: '10px'}}></div>

                <Button 
                variant="text"
                   sx={{
                     '&:hover': { backgroundColor: 'white', opacity: 0.7 },
                     padding: 0, // Remove padding if you want the image to fit better
                     height: 'auto', // Adjust height as needed, or remove for auto height
                     marginRight: '10px', // Corrected from '10' to '10px'
                     backgroundColor: 'white',
                     color: '#5B4947',
                     border: 'none',
                     overflow: 'hidden' // Ensure the image does not overflow the button boundaries
                   }}>
                        <img src={user} alt="User" style={{display: 'block' }}/>
                </Button>
                <Button variant="text"
                   sx={{
                     '&:hover': { backgroundColor: 'white', opacity: 0.7 },
                     padding: 0, // Remove padding if you want the image to fit better
                     height: 'auto', // Adjust height as needed, or remove for auto height
                     marginRight: '10px', // Corrected from '10' to '10px'
                     backgroundColor: 'white',
                     color: '#5B4947',
                     border: 'none',
                     overflow: 'hidden' // Ensure the image does not overflow the button boundaries
                   }}>
                    <img src={logout} alt="Logout" onClick={handleLogout} style={{ display: 'block' }} />
                </Button>
            </Box>
        </div>
    </header>
    )
}

export default HeaderSignIn