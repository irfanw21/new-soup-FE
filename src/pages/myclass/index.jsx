import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Box } from '@mui/material';
import HeaderSignIn from "../../components/header/Header-signed-in/navbar-signin";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import axios from 'axios';
import useUserStore from "../../store/useUserStore";
import { format } from 'date-fns';

const MyClass = () => {
    const [myClasses, setMyClasses] = useState([]);
    const { userData, fetchUserData } = useUserStore();
    const api = import.meta.env.VITE_URL_API;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMyClasses = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                  await fetchUserData(token, navigate);
                }
                if (userData && userData.id) { // Check userData before fetching data
                    const response = await axios.get(`${api}/api/MyClass/GetByUserId?userId=${userData.id}`);
                setMyClasses(response.data);
            }
            } catch (error) {
                console.error("Error fetching invoice data:", error);
            }
        };

        fetchMyClasses();
    }, []);

    return (
        <Container>
            <HeaderSignIn />
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
                {myClasses.map((myClass) => (
                    <Grid item xs={12} sm={6} md={4} key={myClass.myClassId}>
                        <Card sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)", width: '1140px'}}>
                            <CardContent>
                                <Box sx={{ display:'flex' , justifyContent: 'space-between'}}>
                                    {/* Render your MyClass data here */}
                                    <div><img src={myClass.img} alt={myClass.courseName} style={{width: '100%'}} /> </div>
                                    <Box
                                        sx={{
                                            padding: '10px 100px 10px 24px',
                                            width: '500px'
                                        }}
                                    >
                                        <div style={{ fontWeight: 400, fontSize: '16px', color: '#828282' }}> {myClass.categoryName}</div>
                                        <div style={{ fontWeight: 600, fontSize: '20px', color: '#5B4947' }}>{myClass.courseName}</div>
                                        <div style={{ fontWeight: 400, fontSize: '16px', color: '#828282' }}> {myClass.scheduleDate}</div>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </Container>
    );
};

export default MyClass;