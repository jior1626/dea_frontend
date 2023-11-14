"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./actavisita.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';

export default function Options() {
    const router = useRouter();

      const navigateToSectionActavisita = () => {
        router.push("actavisita");
      };

  const [ACT_FECHAHORAVISITA, setACT_FECHAHORAVISITA] = useState("");
  const [ACT_LUGARVISITA, setACT_LUGARVISITA] = useState("");
  const [ACT_OBJETOVISITA, setACT_OBJETOVISITA] = useState("");
  const [ACT_RESPONSABLEVISITA, setACT_RESPONSABLEVISITA] = useState("");
  const [ACT_VISITANTES, setACT_VISITANTES] = useState("");
  const [ACT_RECOMENDACIONES, setACT_RECOMENDACIONES] = useState(false);
  const [ACT_CONCLUSIONES, setACT_CONCLUSIONES] = useState("Semanal");
  const [ACT_OBSERVACIONES, setACT_OBSERVACIONES] = useState("Media");


  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    if (
      !ACT_FECHAHORAVISITA ||
      !ACT_LUGARVISITA ||
      !ACT_OBJETOVISITA ||
      !ACT_RESPONSABLEVISITA ||
      !ACT_VISITANTES ||
      !ACT_RECOMENDACIONES ||
      !ACT_CONCLUSIONES ||
      !ACT_OBSERVACIONES
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Construir el objeto de datos a enviar
    const data = {
      data: {
        ACT_FECHAHORAVISITA:ACT_FECHAHORAVISITA,
        ACT_LUGARVISITA:ACT_LUGARVISITA,
        ACT_OBJETOVISITA:ACT_OBJETOVISITA,
        ACT_RESPONSABLEVISITA:ACT_RESPONSABLEVISITA,
        ACT_VISITANTES:ACT_VISITANTES,
        ACT_RECOMENDACIONES:ACT_RECOMENDACIONES,
        ACT_CONCLUSIONES:ACT_CONCLUSIONES,
        ACT_OBSERVACIONES:ACT_OBSERVACIONES
    }
    };

    //alert(JSON.stringify(data))

    // Realizar la solicitud POST
    try {
      const jsonBody = JSON.stringify(data);
      const response = await fetch(
        "https://nodosalud1.com/api/tbl-actavisitas",
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
        alert("Visita registrada");
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
        <strong>ACTA DE VISITA</strong>
        </h2>

        <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
        >
          Acta de visita
        </button>

        </div>
      </div>
   

      <Footer></Footer>
    </main>
  );
}
