"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./options.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {User} from "../components/iconos"

export default function Options() {
  const router = useRouter();
  const [rolAsignado, setRolAsignado] = useState("");

  const navigateToSectionAnexo2 = () => {
    router.push("anexo2");
  };

  const navigateToSectionAnexo3 = () => {
    router.push("anexo3");
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

  const navigateToSectionGestion = () => {
    router.push("gestion");
  };

  const navigateToSectionTableros = () => {
    router.push("tableros");
  };

  const navigateToSectionReportes = () => {
    router.push("reportes");
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
    <main className="flex-containerOptions">
      <Header></Header>
      <User/>
      {rolAsignado != "Consultor" && (
        <div className="containerOptions">
          <div className="white-containerOptions">
            {rolAsignado === "Operador1" && (
              <div
                className="bg-white rounded-lg  border-l-12 shadow-md mb-4 anexo2 hijo"
                onClick={navigateToSectionAnexo2}
              >
                <p className="text-center text-black">
                  Reporte de instalación del DEA
                </p>
              </div>
            )}
            {rolAsignado === "Operador1" && (
              <div
                className="bg-white rounded-lg  border-l-12 shadow-md mb-4 anexo3 hijo"
                onClick={navigateToSectionAnexo3}
              >
                <p className="text-center text-black">
                  Reporte del uso del DEA
                </p>
              </div>
            )}

            {rolAsignado === "Administrador" && (
              <div>
                <div
                  className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo2 hijo"
                  onClick={navigateToSectionAnexo2}
                >
                  <p className="text-center text-black">
                    Registro de espacios o lugares de instalación
                  </p>
                </div>
                <div
                  className="bg-white rounded-lg p-8 border-l-12 shadow-md usuarioperador"
                  onClick={navigateToSectionCreacionoperador}
                >
                  <p className="text-center text-black">Registro de Usuarios</p>
                </div>
              </div>
            )}

            <div
              className="bg-white rounded-lg  border-l-12 shadow-md anexo3 hijo"
              onClick={navigateToSectionGestion}
            >
              <p className="text-center text-black">Gestión de información</p>
            </div>

            <div
              className="bg-white rounded-lg  border-l-12 shadow-md anexo3 hijo"
              onClick={navigateToSectionReportes}
            >
              <p className="text-center text-black">Consulta de reportes</p>
            </div>

            <div
              className="bg-white rounded-lg  border-l-12 shadow-md  anexo3 hijo"
              onClick={navigateToSectionTableros}
            >
              <p className="text-center text-black">Tableros informativos</p>
            </div>

            {/* <button className="mt-4 w-full bg-custom-red text-white py-3 rounded-full shadow-lg">
            Ruta vital
          </button> */}
          </div>
        </div>
      )}

      {rolAsignado === "Consultor" && (
        <div className="containerOptions">
          <div className="white-containerOptions">
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
