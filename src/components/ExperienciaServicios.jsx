import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import user1 from '../assets/Comentarios/user1.png';
import user2 from '../assets/Comentarios/user2.png';
import user3 from '../assets/Comentarios/user3.png';

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

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                La Experiencia de nuestros usuarios
            </Typography>
            <Grid container spacing={4}>
                {experiences.map((experience, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default UserExperienceCard;