"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./gestionespacios.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Modal } from "../components/Modal";

export default function Options() {
  const router = useRouter();
  const [rolAsignado, setRolAsignado] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [registros, setRegistros] = useState([]);

  const [detalleRegistro, setDetalleRegistro] = useState(null);

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

  useEffect(() => {
    // Suponiendo que el valor almacenado en localStorage es una cadena JSON
    const user = localStorage.getItem("user");
    const jwt = localStorage.getItem("jwt");
    if (user) {
      const userData = JSON.parse(user);
      setRolAsignado(userData.RolAsignado);
    }

    // Llamar a la API para obtener los datos
    fetch("https://dea-crud.azurewebsites.net/api.php", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRegistros(data);
      })
      .catch((error) => {
        // Manejo de errores
        console.error("Error fetching data: ", error);
      });
  }, []);

  const abrirModal = (detalle) => {
    setDetalleRegistro(detalle);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      {rolAsignado != "Consultor" && (
        <div className="min-h-[700px] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
            {registros.map((registro) => (
              <div
                key={registro.id}
                className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4"
              >
                <p className="text-center text-black">
                  {registro.dea_nombreubicacion}
                </p>
                <button
                  onClick={() => abrirModal(registro)}
                  className="text-center text-black font-bold underline"
                >
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      )}


{modalVisible && detalleRegistro && (
  <Modal
    titulo={`Detalles de ${detalleRegistro.dea_nombrecompleto}`}
    contenido={
      <div>
        <p>Número de serie: {detalleRegistro.dea_nombrecompleto}</p>
        <p>Nombre completo: {detalleRegistro.dea_docidentificacion}</p>
        <p>Documento de identificación: {detalleRegistro.REG_DOCIDENTIFICACION}</p>
        <p>Cantidad: {detalleRegistro.REG_CANTIDAD}</p>
        <p>Ubicación: {detalleRegistro.REG_NOMBREUBICACION}</p>
        <p>Dirección Ubicación: {detalleRegistro.REG_DIRECCIONUBICACION}</p>
        <p>Codigo Postal: {detalleRegistro.REG_CODIGOPOSTAL}</p>
        <p>Ciudad: {detalleRegistro.REG_CIUDADMUNICIPIO}</p>
        <p>Tipo instalación: {detalleRegistro.REG_TIPOINSTALACION}</p>
        <p>Tipo declaración: {detalleRegistro.REG_TIPODECLARACION}</p>
        <p>Tipo espacio: {detalleRegistro.REG_TIPOESPACIO}</p>
        <p>Modelo: {detalleRegistro.REG_MODELO}</p>
        <p>Marca: {detalleRegistro.REG_MARCA}</p>
        <p>Importador distribuidor: {detalleRegistro.REG_IMPORTADORDISTRIBUIDOR}</p>
        <p>GPS: {detalleRegistro.REG_GPS}</p>
        <p>Fecha de registro: {detalleRegistro.createdAt}</p>
      </div>
    }
    cerrarModal={cerrarModal}
  />
)}

      <Footer></Footer>
    </main>
  );
}
