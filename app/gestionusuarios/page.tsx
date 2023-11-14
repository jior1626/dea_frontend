"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./gestionusuarios.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
            >
              <p className="text-center text-black">FULANITO xxx</p>
            </div>

            <div
              className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 mt-4 anexo3"
            >
              <p className="text-center text-black">FULANITO 2</p>
            </div>

          </div>
        </div>
      )}

      <Footer></Footer>
    </main>
  );
}
