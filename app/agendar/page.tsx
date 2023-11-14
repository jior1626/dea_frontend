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
