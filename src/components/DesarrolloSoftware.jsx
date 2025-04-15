import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    Box,
    useMediaQuery,
    useTheme,
    CardMedia,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import NavBar from "./NavBar";
import FootPage from "./FootPage";

const services = [
    {
        icon: <CodeIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Desarrollo a Medida',
        description: 'Creamos software personalizado para optimizar tus procesos de negocio, aumentar la productividad y reducir costos.',
        image: 'https://images.unsplash.com/photo-1581091870622-1e7e5c66dd89?auto=format&fit=crop&w=800&q=80'
    },
    {
        icon: <DevicesIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Aplicaciones Web y Móviles',
        description: 'Diseñamos interfaces modernas, intuitivas y responsive que mejoran la experiencia del usuario en todos los dispositivos.',
        image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80'
    },
    {
        icon: <IntegrationInstructionsIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Integraciones y APIs',
        description: 'Conectamos tu software con servicios externos y sistemas existentes para lograr una transformación digital real.',
        image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80'
    },
    {
        icon: <AutoFixHighIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Mantenimiento y Soporte',
        description: 'Te acompañamos en todo momento con mantenimiento proactivo y soporte técnico ágil para asegurar el rendimiento óptimo de tus soluciones.',
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?auto=format&fit=crop&w=800&q=80'
    },
    {
        icon: <SpeedIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Rendimiento y Escalabilidad',
        description: 'Nuestras soluciones están optimizadas para rendir a gran escala, soportando tráfico elevado sin perder velocidad.',
        image: 'https://images.unsplash.com/photo-1601132359864-d989140cdbbc?auto=format&fit=crop&w=800&q=80'
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 50, color: '#FF9800' }} />,
        title: 'Seguridad Digital',
        description: 'Protegemos tu información con estándares de ciberseguridad, cifrado y control de accesos avanzados.',
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?auto=format&fit=crop&w=800&q=80'
    }
];
const stats = [
    {
        title: '5+',
        subtitle: 'Proyectos en marcha con',
        highlight: 'impacto real',
        suffix: ''
    },
    {
        title: '100%',
        subtitle: 'Clientes satisfechos con',
        highlight: 'nuestro acompañamiento',
        suffix: ''
    },
    {
        title: '3',
        subtitle: 'Sectores cubiertos: ',
        highlight: 'tecnología, salud y educación',
        suffix: ''
    },
    {
        title: '∞',
        subtitle: 'Comprometidos con la',
        highlight: 'excelencia y la innovación',
        suffix: ''
    }
];

export default function DesarrolloSoftware() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <NavBar/>
        <Box sx={{ backgroundColor: '#0D1B2A', color: '#fff', py: 15 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" gutterBottom fontWeight="bold" color="#FF9800">
                    Soluciones Tecnológicas en Desarrollo de Software
                </Typography>
                <Typography variant="h6" align="center" color="rgba(255,255,255,0.7)" paragraph>
                    Transformamos ideas en soluciones digitales potentes, escalables y seguras. Vive una experiencia diferente con tecnología pensada para ti.
                </Typography>

                <Grid container spacing={6} sx={{ mt: 4 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
                            <Card elevation={10} sx={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#1B263B' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={service.image}
                                    alt={service.title}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Box mb={2}>{service.icon}</Box>
                                    <Typography variant="h6" gutterBottom fontWeight="bold" color="#FF9800">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box textAlign="center" mt={8}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: '#FF9800',
                            color: '#0D1B2A',
                            fontWeight: 'bold',
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            '&:hover': {
                                backgroundColor: '#e68a00',
                            },
                        }}
                        data-aos="zoom-in"
                    >
                        🚀 ¡Solicita tu Solución a Medida!
                    </Button>
                </Box>
            </Container>
            <Box sx={{ backgroundColor: '#0D1B2A', color: 'white', p: 4 }}>
                <Grid container spacing={2}>
                    {stats.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ backgroundColor: '#1B263B', boxShadow: 'none', border: '1px solid #1f2030', height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF9800' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, color:"white" }}>
                                        {item.subtitle}{' '}
                                        <Typography component="span" sx={{ color: '#FF9800' }}>
                                            {item.highlight}
                                        </Typography>
                                        {item.suffix || ''}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    py: 8,
                    px: 2,
                    maxWidth: 800,
                    margin: '0 auto'
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                >
                    Somos
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                        fontWeight: 'bold',
                        mb: 3
                    }}
                >
                    BCNCode
                </Typography>

                <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
                >
                    Impulsamos la transformación digital desde Barcelona, combinando creatividad, tecnología e innovación para construir soluciones que marcan la diferencia.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
                >
                    En BCNCode trabajamos con empresas de todos los sectores, desde startups hasta grandes corporaciones. Nuestro enfoque ágil y colaborativo nos permite desarrollar software a medida, plataformas escalables y experiencias digitales memorables que conectan con las personas y potencian los negocios.
                </Typography>
            </Box>
        </Box>
            <FootPage/>
        </Box>
    );
}

