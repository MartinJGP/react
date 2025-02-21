import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Slider from 'react-slick';
import user1 from '../assets/Comentarios/user1.png';
import user2 from '../assets/Comentarios/user2.png';
import user3 from '../assets/Comentarios/user3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function UserExperienceCard() {
    const experiences = [
        {
            name: 'Juan Pérez',
            img: user1,
            comment: 'La experiencia fue increíble, el equipo fue muy profesional y los resultados superaron mis expectativas.'
        },
        {
            name: 'María López',
            img: user2,
            comment: 'Estoy muy contenta con la reforma de mi cocina, ahora es mucho más funcional y moderna.'
        },
        {
            name: 'Carlos García',
            img: user3,
            comment: 'El servicio fue excelente, muy atentos a los detalles y cumplieron con los plazos establecidos.'
        },
        {
            name: 'Ana Torres',
            img: user2,
            comment: 'El equipo fue muy profesional y el resultado final fue exactamente lo que esperaba.'
        },
        {
            name: 'Luis Fernández',
            img: user1,
            comment: 'Muy satisfecho con la reforma, el equipo fue muy atento y profesional.'
        },
        {
            name: 'Sofía Martínez',
            img: user2,
            comment: 'El servicio fue excelente, cumplieron con todos los plazos y el resultado fue increíble.'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                La Experiencia de nuestros usuarios
            </Typography>
            <Slider {...settings}>
                {experiences.map((experience, index) => (
                    <Box key={index} sx={{ padding: 2 }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#eef4ff', padding: 2 }}>
                            <CardMedia
                                component="img"
                                image={experience.img}
                                alt={experience.name}
                                sx={{ width: 120, height: 120, borderRadius: '50%' }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">{experience.name}</Typography>
                                <Typography variant="body1" color="text.secondary">{experience.comment}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default UserExperienceCard;