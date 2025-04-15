import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";

const slides = [
    {
        id: 1,
        title: "Agencia Digital especialista en Marketing",
        subtitle: "Elegidos mejor página BcnClean a nivel global",
        buttonText: "Solicita tu Solución Tecnológica",
        imageUrl: "https://th.bing.com/th/id/OIP.BlSqd7mwj2c4Po_ja1z-EQHaE8?rs=1&pid=ImgDetMain",
    },
    {
        id: 2,
        title: "Soluciones con Inteligencia Artificial",
        subtitle: "Impulsamos tu negocio con tecnología avanzada",
        buttonText: "Más Información",
        imageUrl: "https://th.bing.com/th/id/OIP.9OCv4zgkI3q7-X2gTc_nSQHaE7?rs=1&pid=ImgDetMain",
    },
];

const CarruselServicios = () => {
    return (
        <Box sx={{ width: "100vw", height: "100vh", position: "relative" }}>
            <Swiper
                navigation={false}
                autoplay={{ delay: 5000 }}
                loop
                modules={[Navigation, Autoplay]}
                style={{ width: "100%", height: "100%" }}


            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}  >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100vh",
                                backgroundImage: `url(${slide.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                textAlign: "center",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(0, 0, 0, 0.5)", // Oscurece la imagen para mayor legibilidad
                                },
                            }}
                        >
                            <Box sx={{ zIndex: 2, maxWidth: "600px", px: 2 }}>
                                <Typography variant="h4" fontWeight="bold">
                                    {slide.title}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                    {slide.subtitle}
                                </Typography>
                                <Button
                                    component={Link}
                                    to="/solicitar"
                                    variant="contained"
                                    sx={{ mt: 3, bgcolor: "#FF9800", color: "white" }}
                                >
                                    {slide.buttonText}
                                </Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
export default CarruselServicios;
