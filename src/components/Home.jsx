import NavBar from "./NavBar";
import CarruselServicios from "./CarruselServicios";
import Servicios from "./Servicios";
import FootPage from "./FootPage";
import React from "react";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <CarruselServicios/>
            <Servicios/>
            <FootPage/>
        </div>
    );
}

export default Home;