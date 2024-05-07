import imageTitle from "../../assets/title-bg.png"
import interludeBg from "../../assets/interlude-bg.png"
import tomyum from "../../assets/tomyum.png"
import chococookies from "../../assets/chococookies.png"
import greenteacheesecake from "../../assets/green-tea-cheesecake.png"
import sotobanjar from "../../assets/soto-banjar.png"
import strawfloat from "../../assets/strawberry-float.png"
import bolognese from "../../assets/spaghetti-bolognese.png"
import catasian from "../../assets/cat-asian.png"
import catwestern from "../../assets/cat-western.png"
import catjunkfood from "../../assets/cat-junkfood.png"
import cathotdrink from "../../assets/cat-hot-drink.png"
import cateastern from "../../assets/cat-eastern.png"
import catdessert from "../../assets/cat-dessert.png"
import catcookies from "../../assets/cat-cookies.png"
import catcolddrink from "../../assets/cat-cold-drink.png"
import { Link } from 'react-router-dom'
import {Box, Container , Grid, Paper} from '@mui/material'
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/600.css';
import '@fontsource/Montserrat/700.css';
import HeaderAuth from "../../components/Header-auth"
import Footer from "../../components/Footer"

const LandingPage = () => {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch courses
        fetch('http://localhost:7012/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));

        // Fetch categories
        fetch('http://localhost:7012/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);
    
    return (
        <Container>
            <HeaderAuth/>

            <Box
                sx={{
                    display: 'flex',
                    height: '274px',
                    justifyContent: 'center',
                    backgroundImage: `url(${imageTitle})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignItems: 'center', 
                    fontFamily: 'Montserrat'
                }}
            >
                <Box
                    sx={{
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <Box 
                        sx={{
                            marginBottom: '27px',
                            fontSize: '32px',
                            fontWeight: 600
                        }}
                    >
                        Be the next great chef
                    </Box>
                    <Box
                        sx={{
                            fontSize: '24px',
                            fontWeight: 400
                        }}
                    >
                        We are able to awaken your cooking skills to become a classy chef and<br/> ready to dive into the professional world
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    justifyContent: 'space-between',
                    gap: '40px',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    alignContent: 'center',
                    justifyItems: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '60px'
                }}
            >
                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        200+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        Various cuisines available in<br/>professional class
                    </div>

                </div>

                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        50+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        A chef who is reliable and has his<br/> own characteristics in cooking
                    </div>

                </div>

                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        30+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        Cooperate with trusted and upscale <br/>restaurants
                    </div>

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
                More professional class
            </div>

            <Grid container spacing={2} fontFamily={'Montserrat'}
            >
                {proClass.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4}>
                        <Paper elevation={0} style={{ padding: 20 }}>
                            <div> <img src={data.img}/> </div>
                            <div style={{
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: '#828282'
                                }}
                            > {data.category} </div>
                            <div style={{
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    width: '320px',
                                    height: '70px',
                                    color: '#5B4947'
                                }}> {data.name} </div>
                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#FABC1D',
                                marginBottom: '24px'
                            }}> {data.price} </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    display: 'flex',
                    height: '233px',
                    backgroundImage: `url(${interludeBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '133.33px',
                    padding: '40px 80px 40px 80px'
                }}
            >
                <Box
                    sx={{
                        color: 'white'
                    }}
                >
                    <Box 
                        sx={{
                            marginBottom: '27px',
                            fontSize: '40px',
                            fontWeight: 600
                        }}
                    >
                        Gets your best benefit
                    </Box>
                    <Box
                        sx={{
                            fontSize: '16px',
                            fontWeight: 500
                        }}
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </Box>
                </Box>
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
                More food type as you can choose
            </div>

            <Grid container spacing={3} fontFamily={'Montserrat'}
            >
                {categoryClass.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={3}>
                        <Link to={'/list-menu-kelas'} style={{ textDecoration: 'none' }}>
                            <Paper elevation={0} style={{ padding: 20 }}>
                                <div 
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                                > 
                                    <img src={data.img} alt={data.name} style={{ marginBottom: '16px' }}/> 
                                    <div style={{
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            color: 'black',
                                            textAlign: 'center'
                                        }}
                                    > {data.name} </div>
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <Footer/>
        </Container>
        
    )
}

export default LandingPage