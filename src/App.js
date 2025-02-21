import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarruselServicios from './components/CarruselServicios';
import ExperienciaServicio from './components/ExperienciaServicios';
import PiePagina from './components/FootPage';
import NavBar from './components/NavBar';
import DataTable from './components/PruebaItems';
import RegItems from './components/RegItems';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router >
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items" element={<DataTable/>}/>
                <Route path="/reg" element={<RegItems/>}/>
            </Routes>
        </Router>
    );
}

export default App;

