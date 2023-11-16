"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina5.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home, CirclePlus } from "../components/iconos";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag6 = () => {
    router.push("anexo2pagina6");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        <ChevronLeft />
        <User />
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloque1">
          <strong>DECLARA que:</strong>
        </div>

        <div className="bloque">
          <strong>Respecto a el/los DEA:</strong>
        </div>

        <div className="bloque">
          <p>
            Tiene permiso de comercialización del INVIMA que garantiza su
            conformidad con la normativa de equipos de salud, vigente.<br></br>
            Se utilizarán y mantendrán, en todo momento según las
            recomendaciones del fabricante.<br></br>
            Su ubicación y normas de utilización están señalizadas en lugar
            visible.<br></br>
            Se tienen previstos los medios para la comunicación inmediata con la
            línea 123 y otro mecanismo que haga sus veces en el territorio.
            <br></br>
            Se comprometen a reportar al INVIMA o a la secretaría de salud
            departamental o distrital los eventos o incidentes adversos que se
            detecten en el funcionamiento del DEA, así como implementar acciones
            correctivas que se determinen por el fabricante o por las
            autoridades sanitarias.<br></br>
          </p>
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionAnexoPag6}
          >
            Siguiente
          </button>
          <Home />
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
