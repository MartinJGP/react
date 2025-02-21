import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import DataTable from './components/PruebaItems';
import RegItems from './components/RegItems';

import './App.css';
import CarruselServicios from "./components/CarruselServicios";
import FootPage from "./components/FootPage";


function App() {
    return (
        <Router >
            <NavBar/>
            <CarruselServicios/>
            <FootPage/>
            <Routes>
                <Route path="/" component={RegItems} />
                <Route path="/items" element={<DataTable/>}/>
                <Route path="/reg" element={<RegItems/>}/>
            </Routes>
        </Router>
    );
}

export default App;

