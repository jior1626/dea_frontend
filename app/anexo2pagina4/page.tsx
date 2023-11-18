"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina4.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, HomeOut, CirclePlus } from "../components/iconos";

export default function Options() {
  const router = useRouter();
  const [dea_documentopersonalcertificado, setdea_documentopersonalcertificado] = useState("");
  const [dea_nombresapellidospersonalcertificado, setdea_nombresapellidospersonalcertificado] = useState("");
  const [dea_entidadcertificadora, setdea_entidadcertificadora] = useState("");
  const [dea_fechacertificacion, setdea_fechacertificacion] = useState("");

  const [errordea_documentopersonalcertificado, setErrordea_documentopersonalcertificado] = useState("");
  const [errordea_nombresapellidospersonalcertificado, setErrordea_nombresapellidospersonalcertificado] = useState("");
  const [errordea_entidadcertificadora, setErrordea_entidadcertificadora] = useState("");
  const [errordea_fechacertificacion, setErrordea_fechacertificacion] = useState("");
 
  const handleKeyDown = (e) => {
    // Permitir solo teclas de control y números
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleKeyDown2 = (e) => {
    // Crear una expresión regular que coincida con caracteres no permitidos
    const invalidChars = /[0-9]/;

    // Si el carácter es un número, prevenir la entrada
    if (invalidChars.test(e.key)) {
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
    localStorage.setItem("dea_documentopersonalcertificado", dea_documentopersonalcertificado);
    localStorage.setItem("dea_nombresapellidospersonalcertificado", dea_nombresapellidospersonalcertificado);
    localStorage.setItem("dea_entidadcertificadora", dea_entidadcertificadora);
    localStorage.setItem("dea_fechacertificacion", dea_fechacertificacion);
    
    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!dea_documentopersonalcertificado || dea_documentopersonalcertificado.length < 8) {
      setErrordea_documentopersonalcertificado(
        "El documento de identidad debe tener al menos 8 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_documentopersonalcertificado("");
    }

    if (!dea_nombresapellidospersonalcertificado || dea_nombresapellidospersonalcertificado.length < 4) {
      setErrordea_nombresapellidospersonalcertificado(
        "Nombres y apellidos debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_nombresapellidospersonalcertificado("");
    }

    if (!dea_entidadcertificadora || dea_entidadcertificadora.length < 4) {
      setErrordea_entidadcertificadora(
        "Entidad certificadora debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_entidadcertificadora("");
    }

    if (!dea_fechacertificacion || dea_fechacertificacion.length < 4) {
      setErrordea_fechacertificacion(
        "La fecha es obligatoria"
      );
      hasError = true;
    } else {
      setErrordea_fechacertificacion("");
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
        <ChevronLeft />
        <User />
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
            onChange={(e) => setdea_documentopersonalcertificado(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_documentopersonalcertificado}</span>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            onKeyDown={handleKeyDown2}
            placeholder="Nombres y apellidos"
            onChange={(e) => setdea_nombresapellidospersonalcertificado(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_nombresapellidospersonalcertificado}</span>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            onKeyDown={handleKeyDown2}
            placeholder="Entidad que certifica la capacitación en DEA"
            onChange={(e) => setdea_entidadcertificadora(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_entidadcertificadora}</span>
        </div>

        <div className="bloque">
          <input
            type="date"
            className="element"
            placeholder="Fecha de certificación / última capacitación"
            onChange={(e) => setdea_fechacertificacion(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_fechacertificacion}</span>
        </div>
        <div>
          <CirclePlus/>
        </div>
        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
          >
            Siguiente
          </button>
          <HomeOut />
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
