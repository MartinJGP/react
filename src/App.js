import React from 'react';
import CarruselServicios from './components/CarruselServicios';
import ExperienciaServicio from './components/ExperienciaServicios';
import PiePagina from './components/FootPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
        <div>
            <NavBar/>
            <CarruselServicios />
            <ExperienciaServicio />
            <PiePagina />
        </div>
    );
}

export default App;

