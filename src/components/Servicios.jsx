import {Box, Typography, Grid, Container, Card, CardContent} from "@mui/material";
import {
    BarChart,
    Campaign, CheckCircle, Computer,
    People,
    Search,
    ShoppingCart,
    Smartphone,
    Star,
    Store,
    TrendingUp
} from "@mui/icons-material";

const Servicios = () => {
    const services = [
        { icon: <TrendingUp fontSize="large" />, title: "¿Qué estrategia recomendaría para mi negocio?" },
        { icon: <Search fontSize="large" />, title: "¿Qué resultados de marketing obtuvo para otras empresas como la mía?" },
        { icon: <CheckCircle fontSize="large" />, title: "¿Qué garantías ofrecen como agencia de Marketing digital?" },
        { icon: <BarChart fontSize="large" />, title: "¿Proporcionan acceso a análisis e informes de marketing digital para poder seguir la efectividad?" },
        { icon: <People fontSize="large" />, title: "¿Quién manejaría mi cuenta? ¿Qué experiencia tienen? ¿Cómo puedo contactarlos?" },
    ];
    return (
        <Box sx={{ bgcolor: "#0D1B2A", color: "white", py: 6, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Innovación y compromiso para llevar tu negocio al éxito digital
            </Typography>

            {/* Línea roja decorativa */}
            <Box sx={{ width: "60px", height: "3px", bgcolor: "#FF3D00", mx: "auto", mb: 2 }} />

            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}>
                En nuestra agencia, creemos en el poder del marketing para transformar negocios. Nos destacamos por nuestra creatividad, análisis estratégico y pasión por la excelencia.
            </Typography>

            <Grid container spacing={3} justifyContent="center" sx={{ mb: 4,py:7 }}>
                {[
                    { icon: <TrendingUp fontSize="large" />, text: "+10 marcas impulsadas" },
                    { icon: <People fontSize="large" />, text: "+5,000 seguidores orgánicos" },
                    { icon: <BarChart fontSize="large" />, text: "ROI promedio del 300%" },
                    { icon: <Star fontSize="large" />, text: "99% de clientes satisfechos" },
                ].map((item, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {item.icon}
                            <Typography variant="h6" mt={1}>{item.text}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ bgcolor: "white", color: "black", py: 8, textAlign: "center" }} justifyContent="center">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Servicios de Marketing Digital y Publicidad Online
                </Typography>

                <Box sx={{ width: "60px", height: "3px", bgcolor: "#FF3D00", mx: "auto", mb: 2 }} />

                <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}>
                    Nuestra agencia de marketing digital brinda servicios integrados que permiten ayudarte a alcanzar tus objetivos de comunicación, marketing online y publicidad digital.
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ mb: 4,py:7 }}>
                    {[
                        { icon: <Computer fontSize="large" sx={{ color: "#3F51B5" }} />, title: "Diseño de Páginas Web", description: "Especialistas en el diseño de páginas web enfocada en convertir tus visitantes en clientes." },
                        { icon: <Search fontSize="large" sx={{ color: "#E91E63" }} />, title: "SEO Posicionamiento Web", description: "Incrementamos el tráfico y alcance de tu marca mejorando su posicionamiento en buscadores." },
                        { icon: <Smartphone fontSize="large" sx={{ color: "#00BCD4" }} />, title: "Social Media Marketing", description: "Acercamos tu marca a tus clientes empleando estrategias inmersivas en redes sociales." },
                        { icon: <Store fontSize="large" sx={{ color: "#4CAF50" }} />, title: "Diseño de tiendas online", description: "Construimos tu ecommerce con un diseño atractivo y optimizado para mejorar la experiencia de usuario." },
                        { icon: <ShoppingCart fontSize="large" sx={{ color: "#FF4081" }} />, title: "Ecommerce", description: "Mejoramos el rendimiento de tu ecommerce a través de diferentes acciones y herramientas de marketing digital." },
                        { icon: <Campaign fontSize="large" sx={{ color: "#FF9800" }} />, title: "Publicidad Online", description: "Ofrecemos soluciones de publicidad online efectivas con el fin de mejorar sus costes de inversión." },
                    ].map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                {service.icon}
                                <Typography variant="h6" mt={1} fontWeight="bold">{service.title}</Typography>
                                <Typography variant="body2" sx={{ maxWidth: "250px" }}>{service.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ bgcolor: "white", color: "black", py: 8, textAlign: "center" }} justifyContent="center">
                <Typography variant="h4" fontWeight="bold" gutterBottom >
                    ¿Cómo elegir una agencia digital?
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}>
                    Si tu empresa está en búsqueda de un proveedor de servicios de Marketing digital, te sugerimos que tomes en
                    consideración estas preguntas. La elección de las empresas de marketing digital correctas te permitirá tomar
                    una mejor decisión.
                </Typography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ p: 3, textAlign: "center", height: "100%" }}>
                                <CardContent>
                                    {service.icon}
                                    <Typography variant="h6" mt={2}>
                                        {service.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Servicios;
