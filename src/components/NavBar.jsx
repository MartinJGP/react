import React from 'react';

import {AppBar, Button, IconButton, Toolbar, Typography, Box, useMediaQuery} from '@mui/material';

import Logo from '../assets/Logo.png';
import {GoogleLogin, useGoogleLogin} from "@react-oauth/google"; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import {Google} from "@mui/icons-material";

function NavBar() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
        onError: (error) => console.log(error)
    });
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#0D1B2A', height: 80 }}>
            <Toolbar sx={{ justifyContent: 'space-between', paddingX: 4 }}>
                <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Box component="img" src={Logo} alt="Logo" sx={{ height: 65, marginX: 5 ,marginY:4 }} />
                </Box>
                <Button
                    onClick={() => login()}
                    variant="contained"
                    startIcon={!isMobile && <Google />} // Oculta el ícono en pantallas pequeñas
                    fullWidth={isMobile} // Hace que ocupe todo el ancho en móviles
                    sx={{
                        backgroundColor: "#FF5722", // Color principal
                        color: "#fff",
                        "&:hover": { backgroundColor: "#E64A19" }, // Color al pasar el mouse
                        borderRadius: 20,
                        padding: isMobile ? "10px 16px" : "12px 24px",
                        textTransform: "none",
                        fontSize: isMobile ? "0.85rem" : "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: isMobile ? "90%" : "auto", // Máximo ancho en móvil
                        margin: "0 auto", // Centrado en móviles
                    }}
                >
                    {isMobile ? "Google" : "Iniciar sesión con Google"}
                </Button>

            </Toolbar>
        </AppBar>
    );
}

export default NavBar;