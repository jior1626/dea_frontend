"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./agendar.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';

export default function Options() {
    const router = useRouter();

      const navigateToSectionActavisita = () => {
        router.push("actavisita");
      };

  const [AGE_TITULO, setAGE_TITULO] = useState("");
  const [AGE_DESCRIPCION, setAGE_DESCRIPCION] = useState("");
  const [AGE_FECHA_INICIO, setAGE_FECHA_INICIO] = useState("");
  const [AGE_FECHA_FIN, setAGE_FECHA_FIN] = useState("");
  const [AGE_UBICACION, setAGE_UBICACION] = useState("");
  const [AGE_TODODIA, setAGE_TODODIA] = useState(false);
  const [AGE_RECURRENTE, setAGE_RECURRENTE] = useState(false);
  const [AGE_FRECUENCIA, setAGE_FRECUENCIA] = useState("Semanal");
  const [AGE_PRIORIDAD, setAGE_PRIORIDAD] = useState("Media");
  const [AGE_PARTICIPANTES, setAGE_PARTICIPANTES] = useState("");


  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    if (
      !AGE_TITULO ||
      !AGE_DESCRIPCION ||
      !AGE_FECHA_INICIO ||
      !AGE_FECHA_FIN ||
      !AGE_UBICACION ||
      !AGE_TODODIA ||
      !AGE_RECURRENTE ||
      !AGE_FRECUENCIA ||
      !AGE_PRIORIDAD ||
      !AGE_PARTICIPANTES
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Construir el objeto de datos a enviar
    const data = {
      data: {
        AGE_TITULO:AGE_TITULO,
        AGE_DESCRIPCION:AGE_DESCRIPCION,
        AGE_FECHA_INICIO:AGE_FECHA_INICIO,
        AGE_FECHA_FIN:AGE_FECHA_FIN,
        AGE_UBICACION:AGE_UBICACION,
        AGE_TODODIA:AGE_TODODIA,
        AGE_RECURRENTE:AGE_RECURRENTE,
        AGE_FRECUENCIA:AGE_FRECUENCIA,
        AGE_PRIORIDAD:AGE_PRIORIDAD,
        AGE_PARTICIPANTES:AGE_PARTICIPANTES
    }
    };

    //alert(JSON.stringify(data))

    // Realizar la solicitud POST
    try {
      const jsonBody = JSON.stringify(data);
      const response = await fetch(
        "https://nodosalud1.com/api/tbl-agendas",
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
        alert("Agenda registrada");
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
        <strong>AGENDAR</strong>
        </h2>

        <p className="font-bold ley text-black">Título de la agenda:</p>
        <input
        type="text"
        name="AGE_TITULO"
        placeholder="Título de la agenda"
        value={AGE_TITULO}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_TITULO(e.target.value)}
      />

<p className="font-bold ley text-black">Descripción de la agenda:</p>
      <input
        type="text"
        name="AGE_DESCRIPCION"
        placeholder="Descripción de la agenda"
        value={AGE_DESCRIPCION}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_DESCRIPCION(e.target.value)}
      />

<p className="font-bold ley text-black">Fecha de inicio:</p>
      <input
        type="date"
        name="AGE_FECHA_INICIO"
        placeholder="Fecha de inicio"
        value={AGE_FECHA_INICIO}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_FECHA_INICIO(e.target.value)}
      />

<p className="font-bold ley text-black">Fecha de finalización:</p>
      <input
        type="date"
        name="AGE_FECHA_FIN"
        placeholder="Fecha de finalización"
        value={AGE_FECHA_FIN}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_FECHA_FIN(e.target.value)}
      />

<p className="font-bold ley text-black">Ubicación:</p>
      <input
        type="text"
        name="AGE_UBICACION"
        placeholder="Ubicación"
        value={AGE_UBICACION}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_UBICACION(e.target.value)}
      />

<div className="flex items-center justify-between flex-wrap">
  <div className="text-black ley font-bold">Todo el día:</div>
  <input
    type="checkbox"
    name="AGE_TODODIA"
    placeholder="Todo el día"
    className="w-200px p-3 rounded-full shadow-sm border text-black"
    checked={AGE_TODODIA}
    onChange={(e) => setAGE_TODODIA(e.target.value)}
  />
</div>

<div className="flex items-center justify-between flex-wrap">
  <div className="text-black ley font-bold">Recurrente:</div>
  <input
    type="checkbox"
    name="AGE_RECURRENTE"
    placeholder="Recurrente"
    className="w-200px p-3 rounded-full shadow-sm border text-black"
    checked={AGE_RECURRENTE}
    onChange={(e) => setAGE_RECURRENTE(e.target.value)}
  />
</div>

<p className="font-bold ley text-black">Frecuencia:</p>
      <select
        name="AGE_FRECUENCIA"
        value={AGE_FRECUENCIA}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_FRECUENCIA(e.target.value)}
      >
        <option value="Diaria">Diaria</option>
        <option value="Semanal">Semanal</option>
        <option value="Mensual">Mensual</option>
        <option value="Anual">Anual</option>
      </select>

      <p className="font-bold ley text-black">Prioridad:</p>
      <select
        name="AGE_PRIORIDAD"
        value={AGE_PRIORIDAD}
        className="w-full p-3 rounded-full shadow-sm border text-black"
        onChange={(e) => setAGE_PRIORIDAD(e.target.value)}
      >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>

      <p className="font-bold ley text-black">Participantes:</p>
      <input
        type="text"
        name="AGE_PARTICIPANTES"
        className="w-full p-3 rounded-full shadow-sm border text-black"
        placeholder="Participantes"
        value={AGE_PARTICIPANTES}
        onChange={(e) => setAGE_PARTICIPANTES(e.target.value)}
      />

        <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
        >
          Agendar
        </button>

        </div>
      </div>
   

      <Footer></Footer>
    </main>
  );
}
