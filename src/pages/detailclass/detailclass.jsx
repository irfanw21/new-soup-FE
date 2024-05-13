import { Box, Button, Container, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSignIn from '../../components/header/Header-signed-in/navbar-signin';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailClass = () => {
    const api = import.meta.env.VITE_URL_API
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [courses, setCourses] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        // Fetch course details based on the id from the URL
        fetch(`${api}/api/Course/GetById/?id=${id}`)
            .then(response => response.json())
            .then(data => {
                setCourse(data);
                console.log('Course details:', data);
            })
            .catch(error => console.error('Error fetching course details:', error));
    }, [id]);

    useEffect(() => {
        // Fetch courses
        fetch(`${api}/api/Course/GetAll`)
            .then(response => response.json())
            .then(data => {setCourses(data);
            console.log('Courses:', data);
    })
            .catch(error => console.error('Error fetching courses:', error));
        }, []);
        
    const addToCart = async () => {
        try {
            const response = await axios.post('/api/cart', cartItem);
            if (response.status === 200) {
            setIsAdded(true);
            console.log('Item added to cart successfully!');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    if (!course) {
        return <div>Loading...</div>;
    }

    const filteredCourses = courses.filter(c => c.id !== course.id);

    return (
        <Container>
            <HeaderSignIn />
            <Box>
                <div className="flex" style={{ alignItems: 'flex-start' }}>
                    <div>
                        <img src={course.img} alt={course.course_Name} style={{ marginRight: '50px' }} />
                    </div>
                    <div>
                        <div style={{ fontSize: '40px' }}>
                            {course.course_Name} <br />{course.course_price} <br />
                        </div>
                        <select id="tanggal" name="tanggal" style={{ marginTop: '40px', padding: '10px, 20px' }}>
                            <option value="1">rabu, 27 juli 2022</option>
                            <option value="2">selasa, 6 juni 2023</option>
                            <option value="3">jumat, 10 oktober 2023</option>
                        </select>
                        <div style={{ marginTop: '30px' }}>
                            <Button
                                variant="outlined"
                                sx={[{
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        border: '1px solid #5B4947'
                                    },
                                    borderRadius: '8px',
                                    marginRight: '40px',
                                    backgroundColor: 'white',
                                    border: '1px solid #5B4947',
                                    color: '#5B4947',
                                    width: '233.5px',
                                    fontFamily: 'Montserrat, sans-serif'
                                }]}
                                onClick={addToCart}
                                {...isAdded && <p>Item added to cart!</p>}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => { /* Handle Buy Now */ }}
                                sx={[{
                                    '&:hover': {
                                        backgroundColor: '#EA9E1F'
                                    },
                                    width: '140px',
                                    borderRadius: '8px',
                                    backgroundColor: '#EA9E1F',
                                    color: '#5B4947',
                                    fontFamily: 'Montserrat, sans-serif'
                                }]}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>

            <Box
                sx={{
                    display: 'column',
                    padding: '46px 70px 46px 70px',
                    alignContent: 'center',
                    fontFamily: 'Montserrat'
                }}
            >
                <div
                    style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '16px'
                    }}
                >
                    Description
                </div>

                <div
                    style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        textAlign: 'justify',
                        color: '#333333'
                    }}
                >
                    {course.description}
                </div>
            </Box>

            <div style={{
                marginTop: '56px',
                marginBottom: '80px',
                color: '#5B4947',
                fontSize: '32px',
                fontWeight: 600,
                fontFamily: 'Montserrat',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                Another menu in this class
            </div>

            {/* Course list grid */}
            <Grid container spacing={2} fontFamily={'Montserrat'}>
                {courses.map((course, index) => (
                  <Grid item key={`${index}`} xs={12} sm={6} md={4}>
                    <Link to={`/detail-kelas/${course.id}`} style={{ textDecoration: 'none' }}>
                        <Paper elevation={0} style={{ padding: 0 }}>
                            <div> <img src={course.img}/> </div>
                            <div style={{
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: '#828282'
                                }}
                            > {course.description} </div>
                            <div style={{
                                    fontWeight: 600,
                                    width: '320px',
                                    height: '70px',
                                    fontSize: '20px',
                                    color: '#5B4947'
                                }}> {course.course_Name} </div>
                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#FABC1D',
                                marginBottom: '24px'
                            }}>{course.course_price}  </div>
                        </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <Footer />
        </Container>
    )
}

export default DetailClass;
