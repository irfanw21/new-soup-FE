import React, { useState, useEffect } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Box, Container, Grid, Button, Typography} from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { Modal, List, ListItem, ListItemText } from '@mui/material';
import HeaderSignIn from "../../components/header/Header-signed-in/navbar-signin"
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [selectedClass, setSelectedClass] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.VITE_URL_API}/api/Cart/GetAll`);
                const data = await response.json();
                setCart(data); // Update cart state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const paymentOptions = [
        { name: 'Gopay', icon: paygopay },
        { name: 'OVO', icon: payovo },
        { name: 'DANA', icon: paydana },
        { name: 'Mandiri', icon: paymandiri },
        { name: 'BCA', icon: paybca },
        { name: 'BNI', icon: paybni }
    ];

    const handleToggle = (id) => {
        const currentIndex = selectedClass.indexOf(id);
        const newChecked = [...selectedClass];
        
        if (currentIndex === -1) {
        newChecked.push(id);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        setSelectedClass(newChecked);
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
          const allClassIds = proClass.map(proClass => proClass.id);
          setSelectedClass(allClassIds);
        } else {
          setSelectedClass([]);
        }
    };

    return (
        <Container>
            <HeaderSignIn/>

            <div>
                <FormGroup sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)"}}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={selectedClass.length === proClass.length}
                        onChange={handleSelectAll}
                        indeterminate={selectedClass.length > 0 && selectedClass.length < proClass.length}
                    />
                    }
                    label="Select All"
                />
                </FormGroup>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column'}} >
                    {cart.map((proClass) => (
                    <Grid item xs={12} sm={6} md={4} key={proClass.id}  >
                        <Card sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)", width: '1140px'}}>
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={selectedClass.includes(proClass.id)}
                                        onChange={() => handleToggle(proClass.id)}
                                        />
                                    }
                                    label={<>
                                        <Box sx={{ display:'flex' , justifyContent: 'space-between'}}>
                                            <div><img src={proClass.img} alt={proClass.name} style={{width: '100%'}} /> </div>
                                            <Box
                                                sx={{
                                                    padding: '10px 100px 10px 24px',
                                                    width: '500px'
                                                }}
                                            >
                                                <div style={{
                                                    fontWeight: 400,
                                                    fontSize: '16px',
                                                    color: '#828282'
                                                }}> {proClass.category}</div>

                                                <div style={{
                                                    fontWeight: 600,
                                                    fontSize: '20px',
                                                    color: '#5B4947'
                                                }}>{proClass.name}</div>

                                                <div style={{
                                                    fontWeight: 400,
                                                    fontSize: '16px',
                                                    color: '#828282'
                                                }}> {proClass.schedule}</div>
                                                
                                                <div style={{
                                                    fontWeight: 600,
                                                    fontSize: '20px',
                                                    color: '#FABC1D'
                                                }}> {proClass.price}</div>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'end'
                                                }}
                                            > <img src={trash} /></Box>
                                        </Box>
                                    </>}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>

            <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '70px',
            paddingLeft: '70px',
            paddingTop: '30px',
            paddingBottom: '30px',
            border: '1px solid #BDBDBD 1px 0px 0px 0px'
            }}> 
                <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                    <div
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '18px'
                        }}
                    > Total Price
                    </div>
                    <div
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize: '24px',
                            color: '#FABC1D',
                            marginLeft: '24px'
                        }}
                    > IDR 11.500.000
                    </div>
                </div>
                <Button 
                    variant="outlined"
                    sx={[{ '&:hover': { 
                        backgroundColor: '#EA9E1F' }, 
                    width: '140px', 
                    borderRadius: '8px', 
                    backgroundColor: '#EA9E1F', 
                    color: '#5B4947', 
                    fontFamily: 'Montserrat, sans-serif'}]}
                    onClick={handleOpen}
                >
                    Pay Now 
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    
                >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    fontFamily: 'Montserrat',
                    borderRadius: '10px'}}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontWeight: 500,
                        fontSize: '20px',
                        
                    }}>
                        Choose Payment Method
                    </Typography>
                    <List>
                        {paymentOptions.map((option, index) => (
                            <ListItem key={index}>
                                <div>
                                    <img src={option.icon}/>
                                </div>
                                <ListItemText  sx={{marginLeft: '16px'}} primary={option.name} />
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    
                        <Button 
                            variant="outlined"
                            onClick={handleClose}
                            sx={[{ '&:hover': { 
                                    backgroundColor: 'white', 
                                    border: '1px solid #5B4947' }, 
                                width: '140px', borderRadius: '8px', 
                                marginRight: '40px', 
                                backgroundColor: 'white', 
                                border: '1px solid #5B4947', 
                                color: '#5B4947', 
                                fontFamily: 'Montserrat, sans-serif' }]}>
                                    Cancel
                            </Button>
                    
                        <Link to="/payment-success">
                        <Button 
                            variant="contained" 
                            sx={[{ '&:hover': { 
                                    backgroundColor: '#EA9E1F' }, 
                                width: '140px', 
                                borderRadius: '8px', 
                                backgroundColor: '#EA9E1F', 
                                color: '#5B4947', 
                                fontFamily: 'Montserrat, sans-serif'}]}>
                                    Pay Now
                        </Button>
                        </Link>
                    </Box>
                </Box>
            </Modal>
            </footer>
        </Container>
    )
}

export default Checkout