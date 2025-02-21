import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cocinaImg from '../assets/Slider/cocina.png';
import banioImg from '../assets/Slider/banio.png';
import interioresImg from '../assets/Slider/interiores.png';

function CarruselServicios() {
    const servicios = [
        { title: 'Reformas de Cocina', img: cocinaImg, desc: 'Diseños modernos y funcionales.' },
        { title: 'Reformas de Baño', img: banioImg, desc: 'Espacios elegantes y cómodos.' },
        { title: 'Reformas de Interiores', img: interioresImg, desc: 'Optimiza cada rincón de tu hogar.' },
    ];

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                }}
            >
                <ArrowForward />
            </IconButton>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                }}
            >
                <ArrowBack />
            </IconButton>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Box sx={{ width: '95%', margin: '0 auto', marginTop: '100px' }}>
            <Slider {...settings}>
                {servicios.map((servicio, index) => (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#eef4ff', color: 'black' }}>
                        <CardMedia
                            component="img"
                            image={servicio.img}
                            alt={servicio.title}
                            sx={{ width: '100%', height: '550px' }}
                        />
                        <CardContent sx={{ height: '75px' }}>
                            <Typography variant="h5">{servicio.title}</Typography>
                            <Typography variant="body2">{servicio.desc}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </Box>
    );
}

export default CarruselServicios;
