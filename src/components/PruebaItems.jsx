import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Button
} from '@mui/material';
import axios from 'axios';
import {Link} from "react-router-dom";

function DataTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://djangopruebaitems-807a172cd6c4.herokuapp.com/items/') // Reemplaza con la URL de tu API
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error datos:', error);
            });
    }, []);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Data Table
            </Typography>
            <Button sx={{ backgroundColor: '#4E5ED2' }} color={"inherit"} component={Link} to="/reg">
                Registrar nuevo Item
            </Button>
            <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DataTable;