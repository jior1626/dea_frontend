"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina6.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { User, ChevronLeft, Home, CirclePlus } from "../components/iconos";

export default function Options() {
  const router = useRouter();

  const [REG_FIRMA, setREG_FIRMA] = useState("");
  const [REG_CIUDADPERSONAL, setREG_CIUDADPERSONAL] = useState("");
  const [REG_FECHAPERSONAL, setREG_FECHAPERSONAL] = useState("");

  const [errorREG_FIRMA, setErrorREG_FIRMA] = useState("");
  const [errorREG_CIUDADPERSONAL, setErrorREG_CIUDADPERSONAL] = useState("");
  const [errorREG_FECHAPERSONAL, setErrorREG_FECHAPERSONAL] = useState("");

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag7 = () => {
    router.push("anexo2pagina7");
  };

  const handleSubmit = async () => {

    const REG_CODIGOPOSTAL = localStorage.getItem("REG_CODIGOPOSTAL");
    const REG_MODELO = localStorage.getItem("REG_MODELO");
    const REG_NUMSERIE = localStorage.getItem("REG_NUMSERIE");
    const REG_OTRO = localStorage.getItem("REG_OTRO");
    const REG_IMPORTADORDISTRIBUIDOR = localStorage.getItem("REG_IMPORTADORDISTRIBUIDOR");
    const REG_DOCIDENTIFICACION = localStorage.getItem("REG_DOCIDENTIFICACION");
    const REG_DESCLUGARUBICACION = localStorage.getItem("REG_DESCLUGARUBICACION");
    const REG_TIPOESPACIO = localStorage.getItem("REG_TIPOESPACIO");
    const REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO = localStorage.getItem("REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO");
    const REG_ENTIDADCERTIFICADORA = localStorage.getItem("REG_ENTIDADCERTIFICADORA");
    const REG_CANTIDAD = localStorage.getItem("REG_CANTIDAD");
    const REG_DIRECCIONUBICACION = localStorage.getItem("REG_DIRECCIONUBICACION");
    const REG_DOCUMENTOPERSONALCERTIFICADO = localStorage.getItem("REG_DOCUMENTOPERSONALCERTIFICADO");
    const REG_FECHACERTIFICACION = localStorage.getItem("REG_FECHACERTIFICACION");
    const REG_MARCA = localStorage.getItem("REG_MARCA");
    const REG_NOMBREUBICACION = localStorage.getItem("REG_NOMBREUBICACION");
    const REG_DeaFecha = localStorage.getItem("REG_DeaFecha");
    const REG_GPS = localStorage.getItem("REG_GPS");
    const REG_NOMBRECOMPLETO = localStorage.getItem("REG_NOMBRECOMPLETO");
    
    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!REG_FIRMA || REG_FIRMA.length < 8) {
      setErrorREG_FIRMA(
        "La firma es obligatoria"
      );
      hasError = true;
    } else {
      setErrorREG_FIRMA("");
    }

    if (!REG_CIUDADPERSONAL || REG_CIUDADPERSONAL.length < 8) {
      setErrorREG_CIUDADPERSONAL(
        "La ciudad es obligatoria"
      );
      hasError = true;
    } else {
      setErrorREG_CIUDADPERSONAL("");
    }

    if (!REG_FECHAPERSONAL || REG_FECHAPERSONAL.length < 8) {
      setErrorREG_FECHAPERSONAL(
        "La ciudad es obligatoria"
      );
      hasError = true;
    } else {
      setErrorREG_FECHAPERSONAL("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    const data = {
      dea_nombrecompleto: REG_NOMBRECOMPLETO,
      dea_docidentificacion: REG_DOCIDENTIFICACION,
      dea_cantidad: REG_CANTIDAD,
      dea_nombreubicacion: REG_NOMBREUBICACION,
      dea_direccionubicacion: REG_DIRECCIONUBICACION,
      dea_codigopostal: REG_CODIGOPOSTAL,
      dea_ciudadmunicipio: "falta",
      dea_departamento: "falta",
      dea_tipoinstalacion: "falta",
      dea_tipodeclaracion: "declaracion",
      dea_tipoespacio: REG_CODIGOPOSTAL,
      dea_numserie: REG_NOMBREUBICACION,
      dea_modelo: REG_NOMBRECOMPLETO,
      dea_marca: REG_DOCIDENTIFICACION,
      dea_importadordistribuidor: REG_CANTIDAD,
      dea_desclugarubicacion: userLocation,
      dea_gps: userLocation,
      dea_otros: userLocation,
      dea_fecha: userLocation,
      dea_documentopersonalcertificado: userLocation,
      dea_nombresapellidospersonalcertificado: userLocation,
      dea_entidadcertificadora: userLocation,
      dea_fechacertificacion: userLocation,
      dea_firma: userLocation,
      dea_ciudadpersonal: userLocation,
      dea_fechapersonal: userLocation,
    };

    //router.push("anexo2pagina7");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        {/* <ChevronLeft />
        <User /> */}
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloquePersonal">
          <strong>Respecto al personal:</strong>
        </div>

        <div className="bloque">
          <p>
            El personal encargado del manejo del DEA dispone de entrenamiento y
            actualización de los conocimientos eigidos.<br></br>
            <br></br>
            Durante el horario de actividad se cuenta con un número plural de
            personas entrenadas para su uso.<br></br>
          </p>
        </div>

        <div className="bloque">
          <strong>FIRMAS</strong>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            placeholder="Firma"
            onChange={(e) => setREG_FIRMA(e.target.value)}
          />
          <span className="text-red-500">{errorREG_FIRMA}</span>
        </div>

        <div className="bloque">
          <label>Ciudad o municipio:</label>
          <input
            type="text"
            className="element"
            placeholder=""
            onChange={(e) => setREG_CIUDADPERSONAL(e.target.value)}
          />
          <span className="text-red-500">{errorREG_CIUDADPERSONAL}</span>
        </div>

        <div className="bloque">
          <label>Fecha:</label>
          <input
            type="date"
            className="element"
            placeholder=""
            onChange={(e) => setREG_FECHAPERSONAL(e.target.value)}
          />
          <span className="text-red-500">{errorREG_FECHAPERSONAL}</span>
        </div>

        <div className="bloque">
          <label>Cargar imagen:</label>
          <p>Solo se permite formatos png, jpg, jpeg Tamaño maximo 2MB</p>
          <input
            type="file"
            className="element"
            placeholder=""
          />
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
          >
            Guardar
          </button>
          {/* <Home /> */}
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
