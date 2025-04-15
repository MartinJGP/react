import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from "./components/Home";
import DesarrolloSoftware from "./components/DesarrolloSoftware";

function App() {
    return (
        <Router basename="/IA">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solicitar" element={<DesarrolloSoftware />} />
            </Routes>
        </Router>
    );
}

export default App;
