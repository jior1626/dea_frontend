"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./planes.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Modal } from "../components/Modal";

export default function Options() {
  const router = useRouter();

  const navigateToSectionActavisita = () => {
    router.push("actavisita");
  };

  const [PLA_NUMEROSERIE, setPLA_NUMEROSERIE] = useState("");
  const [PLA_MODELO, setPLA_MODELO] = useState("");
  const [PLA_FABRICANTE, setPLA_FABRICANTE] = useState("");
  const [PLA_ESTADO, setPLA_ESTADO] = useState("");
  const [PLA_ACCIONES, setPLA_ACCIONES] = useState("");

  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    if (
      !PLA_NUMEROSERIE ||
      !PLA_MODELO ||
      !PLA_FABRICANTE ||
      !PLA_ESTADO ||
      !PLA_ACCIONES
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Construir el objeto de datos a enviar
    const data = {
      data: {
        PLA_NUMEROSERIE: PLA_NUMEROSERIE,
        PLA_MODELO: PLA_MODELO,
        PLA_FABRICANTE: PLA_FABRICANTE,
        PLA_ESTADO: PLA_ESTADO,
        PLA_ACCIONES: PLA_ACCIONES
      },
    };

    //alert(JSON.stringify(data))

    // Realizar la solicitud POST
    try {
      const jsonBody = JSON.stringify(data);
      const response = await fetch(
        "https://nodosalud1.com/api/tbl-plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Agregar el token JWT al encabezado
          },
          body: JSON.stringify(data),
        }
      );
      //alert(JSON.stringify(data))
      if (response.ok) {
        // La solicitud se completó con éxito
        // Puedes redirigir a otra página o realizar otras acciones aquí
        router.push("registroexitosoanexo2"); // Cambia '/otra-pagina' a la URL a la que deseas redirigir
        alert("Plan registrado");
      } else {
        // Hubo un error en la solicitud
        alert("Error al enviar los datos.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      <div className="min-h-[700px] flex items-center justify-center mt-8">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
          <h2 className="text-center text-black">
            <strong>CREAR PLAN</strong>
          </h2>

          <p className="font-bold ley text-black">Numero de serie:</p>
          <input
            type="text"
            name="PLA_NUMEROSERIE"
            placeholder="Numero de serie"
            value={PLA_NUMEROSERIE}
            className="w-full p-3 rounded-full shadow-sm border text-black"
            onChange={(e) => setPLA_NUMEROSERIE(e.target.value)}
          />

          <p className="font-bold ley text-black">Modelo:</p>
          <input
            type="text"
            name="PLA_MODELO"
            placeholder="Modelo"
            value={PLA_MODELO}
            className="w-full p-3 rounded-full shadow-sm border text-black"
            onChange={(e) => setPLA_MODELO(e.target.value)}
          />

          <p className="font-bold ley text-black">Fabricante:</p>
          <input
            type="text"
            name="PLA_FABRICANTE"
            placeholder="Fabricante"
            value={PLA_FABRICANTE}
            className="w-full p-3 rounded-full shadow-sm border text-black"
            onChange={(e) => setPLA_FABRICANTE(e.target.value)}
          />

          <p className="font-bold ley text-black">Estado:</p>
          <input
            type="text"
            name="PLA_ESTADO"
            placeholder="Estado"
            value={PLA_ESTADO}
            className="w-full p-3 rounded-full shadow-sm border text-black"
            onChange={(e) => setPLA_ESTADO(e.target.value)}
          />

          <p className="font-bold ley text-black">Acciones:</p>
          <input
            type="text"
            name="PLA_ACCIONES"
            placeholder="Acciones"
            value={PLA_ACCIONES}
            className="w-full p-3 rounded-full shadow-sm border text-black"
            onChange={(e) => setPLA_ACCIONES(e.target.value)}
          />

          <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
          >
            Crear plan
          </button>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
