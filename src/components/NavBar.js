import React from 'react';

import {AppBar, Button, IconButton, Toolbar, Typography, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../assets/Logo.png';
import {GoogleLogin} from "@react-oauth/google"; // Adjust the path as necessary
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#2553cd' }}>
            <Toolbar>
                <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="img" src={Logo} alt="Logo" sx={{ height: 40, marginRight: 2 }} />
                </Box>
                <Box sx={{ marginLeft: 'auto' }}>
                    <GoogleLogin ux_mode={"popup"} theme={"filled_blue"} shape={"pill"} text={"signin"} type={"standard"} size={"medium"}
                                 onSuccess={(credentialResponse) => { console.log(credentialResponse) }}
                        onError={(error) => { console.log(error) }}
                    />

                </Box>
                <Button color="inherit" component={Link} to="/items">
                    Items
                </Button>
            </Toolbar>
        </AppBar>
    );//sx={{ marginLeft: 'auto' }}
}

export default NavBar;