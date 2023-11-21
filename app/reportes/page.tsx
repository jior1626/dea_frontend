"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./reportes.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { User, ChevronLeft, FileDown } from "../components/iconos";

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
        <a href="/options"><ChevronLeft /></a>
        <User />
      </div>
      <br></br>
      <div className="contenedor">
        <div className="contenedorColumn">
          <div className="div-interno">
            Consulta de espacio o lugares registrados
            <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Gestionar información de registros y uso. <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Usuarios activos por entidad <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Establecimientos por DEA registrados <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Informe semanal de uso y activación de la ruta vital <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Generación de informes gráficos específicos <div className="iconoFile"><FileDown/></div>
          </div>
        </div>
        <div className="contenedorColumn">
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Información de visitas realizadas por entidad <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Reporte semanal de instalaciones de DEA realizados <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Información de visitas realizadas por funcionario <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Información de planes de mejoramiento <div className="iconoFile"><FileDown/></div>
          </div>
          <div className="div-interno" /* onClick={navigateToSectionAnexo3} */>
            Seguimiento a planes de mejoramiento <div className="iconoFile"><FileDown/></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
