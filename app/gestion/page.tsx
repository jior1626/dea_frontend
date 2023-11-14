"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./gestion.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Options() {
  const router = useRouter();
  const [rolAsignado, setRolAsignado] = useState("");

  const navigateToSectionGestionUsuarios = () => {
    router.push("gestionusuarios");
  };

  const navigateToSectionGestionEspacios = () => {
    router.push("gestionespacios");
  };

  const navigateToSectionCreacionoperador = () => {
    router.push("creacionoperador");
  };

  const navigateToSectionConsultaInstalacion = () => {
    router.push("consultainstalacion");
  };

  const navigateToSectionConsultaUso = () => {
    router.push("consultauso");
  };

  const navigateToSectionAgenda = () => {
    router.push("agenda");
  };

  const navigateToSectionPlanes = () => {
    router.push("planes");
  };

  useEffect(() => {
    // Suponiendo que el valor almacenado en localStorage es una cadena JSON
    // Obtener el token JWT del localStorage
    const rol = localStorage.getItem("rol");
    if (rol) {
      setRolAsignado(rol);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      {rolAsignado != "Consultor" && (
        <div className="min-h-[700px] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 mt-4 anexo3"
              onClick={navigateToSectionGestionEspacios}
            >
              <p className="text-center text-black">Información de espacios o lugares</p>
            </div>

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 mt-4 anexo3"
              onClick={navigateToSectionGestionUsuarios}
            >
              <p className="text-center text-black">Información de usuarios</p>
            </div>

          </div>
        </div>
      )}

      {rolAsignado === "Consultor" && (
        <div className="min-h-[700px] flex items-center justify-center mt-5">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo2"
              onClick={navigateToSectionConsultaInstalacion}
            >
              <p className="text-center text-black">Consulta de instalación</p>
            </div>

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo3"
              onClick={navigateToSectionConsultaUso}
            >
              <p className="text-center text-black">
                Consulta de uso de los DEA
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-12 shadow-md usuarioperador anexo3">
              <p className="text-center text-black">Reportes</p>
            </div>
            <br></br>

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo2"
              onClick={navigateToSectionAgenda}
            >
              <p className="text-center text-black">Agenda</p>
            </div>
            <br></br>

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo3"
              onClick={navigateToSectionPlanes}
            >
              <p className="text-center text-black">Planes</p>
            </div>
            <br></br>

            <div className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo2">
              <p className="text-center text-black">Ubicación DEA</p>
            </div>
            <br></br>

            <div className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo3">
              <p className="text-center text-black">Información rutal vital</p>
            </div>
            <br></br>

            <div className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo2">
              <p className="text-center text-black">Estado DEA</p>
            </div>
            <br></br>

            <div className="bg-white rounded-lg p-8 border-l-12 shadow-md anexo3">
              <p className="text-center text-black">Visualización de datos</p>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </main>
  );
}
