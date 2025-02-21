import CarruselServicios from "./CarruselServicios";
import ExperienciaServicio from "./ExperienciaServicios";
import PiePagina from "./FootPage";
import React from "react";

function Home() {
    return (
        <div>
            <CarruselServicios /><ExperienciaServicio /><PiePagina />
        </div>
    );
}
export default Home;