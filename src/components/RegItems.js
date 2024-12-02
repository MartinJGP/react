import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {Link} from "react-router-dom";

function RegItems() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { name, description, price, category };

        axios.post('https://django-react-nine.vercel.app/items/', newItem)
            .then(response => {
                console.log('Item registered:', response.data);
                // Clear the form
                setName('');
                setDescription('');
                setPrice('');
                setCategory('');
            })
            .catch(error => {
                console.error('Error registering item:', error);
            });
    };

    return (
        <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Register New Item
            </Typography>
            <Button sx={{ backgroundColor: '#4E5ED2' }} color={"inherit"} component={Link} to="/items">
                Listar Items
            </Button>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default RegItems;