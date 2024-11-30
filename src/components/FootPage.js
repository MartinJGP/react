import React from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function FootPage() {
    return (
        <Box sx={{ backgroundColor: '#2553cd', color: 'white', padding: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: 200, marginRight: 4 }}>
                    <Typography variant="h6" sx={{ borderBottom: '2px solid white', paddingBottom: 1 }}>Información</Typography>
                    <Typography sx={{ mt: 2 }}>Sobre Nosotros</Typography>
                    <Typography sx={{ mt: 1 }}>Servicios</Typography>
                    <Typography sx={{ mt: 1 }}>Proyectos</Typography>
                    <Typography sx={{ mt: 1 }}>Blog</Typography>
                </Box>
                <Box sx={{ flex: 1, minWidth: 200, marginRight: 4 }}>
                    <Typography variant="h6" sx={{ borderBottom: '2px solid white', paddingBottom: 1 }}>Contacto</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography>+51 123 456 789</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography>+51 987 654 321</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <EmailIcon sx={{ mr: 1 }} />
                        <Typography>contacto@empresa.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <LocationOnIcon sx={{ mr: 1 }} />
                        <Typography>Av. Principal 123, Ciudad, País</Typography>
                    </Box>
                </Box>
                <Box component="form" sx={{ flex: 1, minWidth: 300 }}>
                    <Typography variant="h6" sx={{ borderBottom: '2px solid white', paddingBottom: 1 }}>Contáctanos</Typography>
                    <TextField
                        label="Nombre"
                        variant="filled"
                        fullWidth
                        sx={{ mb: 2, '& .MuiInputLabel-root': { color: 'white' }, '& .MuiFilledInput-root': { backgroundColor: '#ffffff33' } }}
                    />
                    <TextField
                        label="Correo Electrónico"
                        variant="filled"
                        fullWidth
                        sx={{ mb: 2, '& .MuiInputLabel-root': { color: 'white' }, '& .MuiFilledInput-root': { backgroundColor: '#ffffff33' } }}
                    />
                    <TextField
                        label="Mensaje"
                        variant="filled"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mb: 2, '& .MuiInputLabel-root': { color: 'white' }, '& .MuiFilledInput-root': { backgroundColor: '#ffffff33' } }}
                    />
                    <Button variant="contained" color="primary" fullWidth>Enviar</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default FootPage;