import React from 'react'
import logotelp from "../../assets/logo-telp.png"
import logomail from "../../assets/logo-mail.png"
import logotele from "../../assets/logo-telegram.png"
import logoyt from "../../assets/logo-youtube.png"
import logoinsta from "../../assets/logo-insta.png"
import { Box, Button } from '@mui/material'

const Footer = () => {

    const productCategories = [
        'Electric',
        'LCGC',
        'Offroad',
        'SUV',
        'Hatchback',
        'MPV',
        'Sedan',
        'Truck'
      ];

    return (
        <footer>
        <div
            style={{
                display: 'flex',
                background: '#5B4947',
                backgroundPosition: 'center',
                alignItems: 'center', 
                fontFamily: 'Montserrat',
                marginTop: '147px'
            }}
        >
            <Box
                sx={{
                    justifyContent: 'space-around',
                    gap: '80px',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    fontFamily: 'Montserrat',
                    paddingTop: '24px',
                    paddingLeft: '95px',
                    paddingRight: '95px',
                    paddingBottom: '24px'
                }}
            >
                <div
                    style={{
                        alignContent: 'center',
                        width: '350px'

                    }}    
                >
                    <div
                        style={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#FABC1D',
                            marginBottom: '8px'
                        }}
                    >About Us</div>

                    <div
                        style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            textAlign: 'justify',
                            color: 'white'
                        }}
                    >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </div>
                </div>

                <div
                    style={{
                        alignContent: 'center'
                    }}    
                >
                    <div
                        style={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#FABC1D',
                            marginBottom: '8px'
                        }}
                    >Product</div>

                    <div
                        style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'white'
                        }}
                    >
                        <ul style={{ listStyleType: 'disc'}}>
                            {productCategories.slice(0, Math.ceil(productCategories.length / 2)).map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                            </ul>
                            <ul style={{ listStyleType: 'disc'}}>
                            {productCategories.slice(Math.ceil(productCategories.length / 2)).map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>                     
                    </div>
                </div>

                <div
                    style={{
                        alignContent: 'center'
                    }}    
                >
                    <div
                        style={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#FABC1D',
                            marginBottom: '8px'
                        }}
                    >Address</div>

                    <div
                        style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            textAlign: 'justify',
                            color: 'white'
                        }}
                    >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                    </div>

                    <div
                        style={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#FABC1D',
                            marginTop: '16px',
                            marginBottom: '8px'
                        }}
                    >Contact Us</div>

                    <Box
                        sx={{
                            display: "flex",
                            gap: '16px',
                            marginTop: '8px'
                        }}
                    >
                        <div><img src={logotelp}/></div>
                        <div><img src={logoinsta}/></div>
                        <div><img src={logoyt}/></div>
                        <div><img src={logotele}/></div>
                        <div><img src={logomail}/></div>
                        
                    </Box>

                </div>
            </Box>
        </div>
        </footer>
    )
}

export default Footer