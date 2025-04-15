import React from 'react';

import {AppBar, Button, IconButton, Toolbar, Typography, Box, useMediaQuery} from '@mui/material';

import Logo from '../assets/Logo.png';
import {GoogleLogin, useGoogleLogin} from "@react-oauth/google"; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import {Google} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";

function NavBar() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
        onError: (error) => console.log(error)
    });
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#0D1B2A', height: 80 }}>
            <Toolbar sx={{ justifyContent: 'space-between', paddingX: 4 }}>
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        marginX: isMobile ? 0 : 1, // Menos margen lateral en móviles
                    }}
                >
                    <Box
                        component="img"
                        src={Logo}
                        alt="Logo"
                        sx={{
                            height: 65,
                            marginX: isMobile ? 0 : 1,
                            marginY: 4,
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',

                        paddingRight: isMobile ? 1 : 4
                    }}
                >
                    <IconButton sx={{ color: 'white' }}>
                        <PhoneIcon sx={{ marginRight: isMobile ? 0.5 : 1 }} />
                        <Typography
                            variant="body1"
                            sx={{
                                marginRight: isMobile ? 0 : 1,
                                fontSize: isMobile ? '0.8rem' : '1rem' // Ajusta el tamaño del texto
                            }}
                        >
                            34 664 49 73 07
                        </Typography>
                    </IconButton>
                </Box>
                <Button
                    onClick={() => login()}
                    variant="contained"
                    startIcon={ <Google />} // Oculta el ícono en pantallas pequeñas
                    sx={{
                        backgroundColor: "#FF9800", // Color principal
                        color: "#fff",
                        "&:hover": { backgroundColor: "#E64A19" }, // Color al pasar el mouse
                        borderRadius: 10,
                        padding: isMobile ? "8px 10px" : "12px 24px",
                        textTransform: "none",
                        fontSize: isMobile ? "0.80rem" : "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: isMobile ? "80%" : "auto", // Máximo ancho en móvil
                        marginLeft: "auto", // Mueve el botón a la derecha
                        marginRight: 2, // Añade espacio desde el borde derecho
                    }}
                >
                    {isMobile ? "Logearse" : "Iniciar sesión con Google"}
                </Button>

            </Toolbar>
        </AppBar>
    );
}

export default NavBar;