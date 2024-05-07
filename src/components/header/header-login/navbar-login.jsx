import React, { useEffect } from 'react'; // Importing useEffect
import { Link } from 'react-router-dom'
import logo from '../../../assets/navbar-logo.png'
import { Box, Button } from '@mui/material'
import './index.css'

const Navbar = () => {
    useEffect(() => {
        document.querySelector('.registernavbar-button').classList.remove('MuiButtonBase-root', 'MuiButton-root', 'MuiButton-contained', 'MuiButton-containedPrimary', 'MuiButton-sizeMedium', 'MuiButton-containedSizeMedium', 'MuiButton-colorPrimary', 'css-sghohy-MuiButtonBase-root-MuiButton-root');
        document.querySelector('.loginnavbar-button').classList.remove('MuiButtonBase-root', 'MuiButton-root', 'MuiButton-outlined', 'MuiButton-outlinedPrimary', 'MuiButton-sizeMedium', 'MuiButton-outlinedSizeMedium', 'MuiButton-colorPrimary', 'css-1rwt2y5-MuiButtonBase-root-MuiButton-root');
    }, []);

    return (
      <header>
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <Box>
                <Link to="/login">
                    <Button 
                        className="loginnavbar-button"
                        variant="outlined">
                        Login
                    </Button>
                </Link>
                {' '} {/* Add space here */}
                <Link to="/register">
                    <Button 
                        className="registernavbar-button"
                        variant="contained">
                        Register
                    </Button>
                </Link>
            </Box>
        </div>
      </header>
    );
}

export default Navbar;
