"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina4.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { User, ChevronLeft, Home, CirclePlus } from "../components/iconos";

export default function Options() {
  const router = useRouter();
  const [REG_DOCUMENTOPERSONALCERTIFICADO, setREG_DOCUMENTOPERSONALCERTIFICADO] = useState("");
  const [REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO, setREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO] = useState("");
  const [REG_ENTIDADCERTIFICADORA, setREG_ENTIDADCERTIFICADORA] = useState("");
  const [REG_FECHACERTIFICACION, setREG_FECHACERTIFICACION] = useState("");

  const [errorREG_DOCUMENTOPERSONALCERTIFICADO, setErrorREG_DOCUMENTOPERSONALCERTIFICADO] = useState("");
  const [errorREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO, setErrorREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO] = useState("");
  const [errorREG_ENTIDADCERTIFICADORA, setErrorREG_ENTIDADCERTIFICADORA] = useState("");
  const [errorREG_FECHACERTIFICACION, setErrorREG_FECHACERTIFICACION] = useState("");
 
  const handleKeyDown = (e) => {
    // Permitir solo teclas de control y números
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag5 = () => {
    router.push("anexo2pagina5");
  };

  const handleSubmit = async () => {
    localStorage.setItem("REG_DOCUMENTOPERSONALCERTIFICADO", REG_DOCUMENTOPERSONALCERTIFICADO);
    localStorage.setItem("REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO", REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO);
    localStorage.setItem("REG_ENTIDADCERTIFICADORA", REG_ENTIDADCERTIFICADORA);
    localStorage.setItem("REG_FECHACERTIFICACION", REG_FECHACERTIFICACION);
    
    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!REG_DOCUMENTOPERSONALCERTIFICADO || REG_DOCUMENTOPERSONALCERTIFICADO.length < 8) {
      setErrorREG_DOCUMENTOPERSONALCERTIFICADO(
        "El documento de identidad debe tener al menos 8 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_DOCUMENTOPERSONALCERTIFICADO("");
    }

    if (!REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO || REG_NOMBRESAPELLIDOSPERSONALCERTIFICADO.length < 4) {
      setErrorREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO(
        "Nombres y apellidos debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO("");
    }

    if (!REG_ENTIDADCERTIFICADORA || REG_ENTIDADCERTIFICADORA.length < 4) {
      setErrorREG_ENTIDADCERTIFICADORA(
        "Entidad certificadora debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_ENTIDADCERTIFICADORA("");
    }

    if (!REG_FECHACERTIFICACION || REG_FECHACERTIFICACION.length < 4) {
      setErrorREG_FECHACERTIFICACION(
        "La fecha es obligatoria"
      );
      hasError = true;
    } else {
      setErrorREG_FECHACERTIFICACION("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    router.push("anexo2pagina5");
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
        <div className="bloquetextCertificado">
          <strong>PERSONAL CERTIFICADO EN EL USO DEL DEA</strong>
        </div>

        <div className="bloque1">
          <p>
            Personal entrenado y certificado para la utilización de estos
            desfibriladores es el que consta en la siguiente relación:
          </p>
        </div>

        <div className="bloque">
          <input
            type="number"
            className="element"
            placeholder="Documento de identidad"
            onKeyDown={handleKeyDown}
            onChange={(e) => setREG_DOCUMENTOPERSONALCERTIFICADO(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_DOCUMENTOPERSONALCERTIFICADO}</span>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            placeholder="Nombres y apellidos"
            onChange={(e) => setREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_NOMBRESAPELLIDOSPERSONALCERTIFICADO}</span>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            placeholder="Entidad que certifica la capacitación en DEA"
            onChange={(e) => setREG_ENTIDADCERTIFICADORA(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_ENTIDADCERTIFICADORA}</span>
        </div>

        <div className="bloque">
          <input
            type="date"
            className="element"
            placeholder="Fecha de certificación / última capacitación"
            onChange={(e) => setREG_FECHACERTIFICACION(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_FECHACERTIFICACION}</span>
        </div>
        <div>
          {/* <CirclePlus/> */}
        </div>
        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
          >
            Siguiente
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
