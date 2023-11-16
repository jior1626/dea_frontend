"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina2.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home } from "../components/iconos";

export default function Options() {
  const router = useRouter();
  
  const [dea_tipoespacio, setdea_tipoespacio] = useState("");
  const [dea_otros, setdea_otros] = useState("");
  const [dea_fecha, setdea_fecha] = useState("");
  const [dea_numserie, setdea_numserie] = useState("");
  const [dea_modelo, setdea_modelo] = useState("");
  const [dea_marca, setdea_marca] = useState("");
  const [dea_importadordistribuidor, setdea_importadordistribuidor] = useState("");

  const [errordea_tipoespacio, setErrordea_tipoespacio] = useState("");
  const [errordea_otros, setErrordea_otros] = useState("");
  const [errordea_fecha, setErrordea_fecha] = useState("");
  const [errordea_numserie, setErrordea_numserie] = useState("");
  const [errordea_modelo, setErrordea_modelo] = useState("");
  const [errordea_marca, setErrordea_marca] = useState("");
  const [errordea_importadordistribuidor, setErrordea_importadordistribuidor] = useState("");
  

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

      localStorage.setItem("dea_tipoespacio", dea_tipoespacio);
      localStorage.setItem("dea_otros", dea_otros);
      localStorage.setItem("dea_fecha", dea_fecha);
      localStorage.setItem("dea_numserie", dea_numserie);
      localStorage.setItem("dea_modelo", dea_modelo);
      localStorage.setItem("dea_marca", dea_marca);
      localStorage.setItem("dea_importadordistribuidor", dea_importadordistribuidor);

    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!dea_tipoespacio || dea_tipoespacio.length < 4) {
      setErrordea_tipoespacio(
        "El tipo de espacio debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_tipoespacio("");
    }

    if (!dea_otros || dea_otros.length < 4) {
      setErrordea_otros(
        "El campo otro debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_otros("");
    }

    if (!dea_fecha) {
      setErrordea_fecha(
        "La fecha es obligatoria"
      );
      hasError = true;
    } else {
      setErrordea_fecha("");
    }

    if (!dea_numserie || dea_numserie.length < 4) {
      setErrordea_numserie(
        "El campo numero de serie debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_numserie("");
    }

    if (!dea_modelo || dea_modelo.length < 4) {
      setErrordea_modelo(
        "El campo modelo debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_modelo("");
    }

    if (!dea_marca || dea_marca.length < 4) {
      setErrordea_marca(
        "El campo marca debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_marca("");
    }

    if (!dea_importadordistribuidor || dea_importadordistribuidor.length < 4) {
      setErrordea_importadordistribuidor(
        "El campo importador debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_importadordistribuidor("");
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
        <ChevronLeft />
        <User />
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
            onChange={(e) => setdea_tipoespacio(e.target.value)}
          ></textarea>
          <br></br>
          <span className="text-red-500">{errordea_tipoespacio}</span>

          <input
            type="text"
            className="element"
            placeholder="Otros"
            onChange={(e) => setdea_otros(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_otros}</span>
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
            onChange={(e) => setdea_fecha(e.target.value)}
            className="inputData mt-1 p-2 w-full border rounded text-black"
            max={new Date().toISOString().split("T")[0]} // Establecer la fecha máxima como la fecha actual
          />
          <span className="text-red-500">{errordea_fecha}</span>
        </div>

        <br></br>
        <div className="bloque">
          <div className="grid-container">
            <div className="grid-item">
              <input
                type="number"
                onKeyDown={handleKeyDown}
                onChange={(e) => setdea_numserie(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="No. de serie"
              />
              <span className="text-red-500">{errordea_numserie}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setdea_modelo(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Modelo"
              />
              <span className="text-red-500">{errordea_modelo}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setdea_marca(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Marca"
              />
              <span className="text-red-500">{errordea_marca}</span>
            </div>
            <div className="grid-item">
              <input
                type="text"
                onChange={(e) => setdea_importadordistribuidor(e.target.value)}
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Importador "
              />
              <span className="text-red-500">{errordea_importadordistribuidor}</span>
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
          <Home />
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
