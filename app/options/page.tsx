"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./options.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { User, ChevronLeft } from "../components/iconos";

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
      <div className="iconos">
        <ChevronLeft />
        <User />
      </div>
      <br></br>
      {rolAsignado === "Operador1" && (
        <div className="contenedor">
          <div className="div-interno" onClick={navigateToSectionAnexo2}>
            Anexo 2. Reporte de instalación del Desfibrilador Externo Automático
            (DEA). Formulario Dinámico.{" "}
          </div>
          <div className="div-interno">
            Anexo 3. Reporte del uso del Desfibrilador Externo Automático (DEA).
            Formulario Dinámico.
          </div>
          <div className="div-interno">Tableros de visualización</div>
        </div>
      )}

      <Footer></Footer>
    </main>
  );
}
