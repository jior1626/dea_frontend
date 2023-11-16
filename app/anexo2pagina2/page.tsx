"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina2.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { User, ChevronLeft, Home } from "../components/iconos";

export default function Options() {
  const router = useRouter();
  
  const [REG_TIPOESPACIO, setREG_TIPOESPACIO] = useState("");
  const [REG_OTRO, setREG_OTRO] = useState("");
  const [REG_DeaFecha, setREG_DeaFecha] = useState("");
  const [REG_NUMSERIE, setREG_NUMSERIE] = useState("");
  const [REG_MODELO, setREG_MODELO] = useState("");
  const [REG_MARCA, setREG_MARCA] = useState("");
  const [REG_IMPORTADORDISTRIBUIDOR, setREG_IMPORTADORDISTRIBUIDOR] = useState("");

  const [errorREG_TIPOESPACIO, setErrorREG_TIPOESPACIO] = useState("");
  const [errorREG_OTRO, setErrorREG_OTRO] = useState("");
  const [errorREG_DeaFecha, setErrorREG_DeaFecha] = useState("");
  const [errorREG_NUMSERIE, setErrorREG_NUMSERIE] = useState("");
  const [errorREG_MODELO, setErrorREG_MODELO] = useState("");
  const [errorREG_MARCA, setErrorREG_MARCA] = useState("");
  const [errorREG_IMPORTADORDISTRIBUIDOR, setErrorREG_IMPORTADORDISTRIBUIDOR] = useState("");
  

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const handleKeyDown = (e) => {
    // Permitir solo teclas de control y números
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };


  const handleSubmit = async () => {

      localStorage.setItem("REG_TIPOESPACIO", REG_TIPOESPACIO);
      localStorage.setItem("REG_OTRO", REG_OTRO);
      localStorage.setItem("REG_DeaFecha", REG_DeaFecha);
      localStorage.setItem("REG_NUMSERIE", REG_NUMSERIE);
      localStorage.setItem("REG_MODELO", REG_MODELO);
      localStorage.setItem("REG_MARCA", REG_MARCA);
      localStorage.setItem("REG_IMPORTADORDISTRIBUIDOR", REG_IMPORTADORDISTRIBUIDOR);

    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!REG_TIPOESPACIO || REG_TIPOESPACIO.length < 4) {
      setErrorREG_TIPOESPACIO(
        "El tipo de espacio debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_TIPOESPACIO("");
    }

    if (!REG_OTRO || REG_OTRO.length < 4) {
      setErrorREG_OTRO(
        "El campo otro debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_OTRO("");
    }

    if (!REG_DeaFecha) {
      setErrorREG_DeaFecha(
        "La fecha es obligatoria"
      );
      hasError = true;
    } else {
      setErrorREG_DeaFecha("");
    }

    if (!REG_NUMSERIE || REG_NUMSERIE.length < 4) {
      setErrorREG_NUMSERIE(
        "El campo numero de serie debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_NUMSERIE("");
    }

    if (!REG_MODELO || REG_MODELO.length < 4) {
      setErrorREG_MODELO(
        "El campo modelo debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_MODELO("");
    }

    if (!REG_MARCA || REG_MARCA.length < 4) {
      setErrorREG_MARCA(
        "El campo marca debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_MARCA("");
    }

    if (!REG_IMPORTADORDISTRIBUIDOR || REG_IMPORTADORDISTRIBUIDOR.length < 4) {
      setErrorREG_IMPORTADORDISTRIBUIDOR(
        "El campo importador debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_IMPORTADORDISTRIBUIDOR("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    router.push("anexo2pagina3");

  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        {/* <ChevronLeft />
        <User /> */}
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloquetext">
          <strong>Tipo de espacio o lugar de alta afluencia de público</strong>
        </div>

        <div className="bloque">
          <textarea
            placeholder="De conformidad con el presente acto administrativo, indique el tipo de espacio o lugar de alta afluencia de personas."
            className="element"
            rows="5" // Ajusta este número según tus necesidades
            onChange={(e) => setREG_TIPOESPACIO(e.target.value)}
          ></textarea>
          <br></br>
          <span className="text-red-500">{errorREG_TIPOESPACIO}</span>

          <input
            type="text"
            className="element"
            placeholder="Otros"
            onChange={(e) => setREG_OTRO(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_OTRO}</span>
        </div>
        <br></br>

        <div className="bloque">
          <h2 className="titulo-desfibrilador-ext">DESFIBRILADORES EXTERNOS</h2>
          <p>El/los desfibrilador(es) externo(s) para su uso a fecha</p>
        </div>

        
        <div className="bloque" >
        <input
            type="date"
            id="fecha"
            onChange={(e) => setREG_DeaFecha(e.target.value)}
            className="inputData mt-1 p-2 w-full border rounded text-black"
            max={new Date().toISOString().split("T")[0]} // Establecer la fecha máxima como la fecha actual
          />
          <span className="text-red-500">{errorREG_DeaFecha}</span>
        </div>

        <br></br>
        <div className="bloque">
          <div className="grid-container">
            <div className="grid-item">
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={(e) => setREG_NUMSERIE(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="No. de serie"
              />
              <span className="text-red-500">{errorREG_NUMSERIE}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setREG_MODELO(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Modelo"
              />
              <span className="text-red-500">{errorREG_MODELO}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setREG_MARCA(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Marca"
              />
              <span className="text-red-500">{errorREG_MARCA}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setREG_IMPORTADORDISTRIBUIDOR(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Importador "
              />
              <span className="text-red-500">{errorREG_IMPORTADORDISTRIBUIDOR}</span>
            </div>
          </div>
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
