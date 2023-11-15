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

  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

  useEffect(() => {
    // Obtener los campos de la API al cargar el componente
    fetch('https://dea-crud.azurewebsites.net/apiAgenda.php?fields')
      .then(response => response.json())
      .then(data => {
        // Filtrar para excluir el campo 'id'
        const filteredFields = data.filter(field => field !== 'id');
        setFields(filteredFields);
      })
      .catch(error => {
        // Manejo de errores aquí
        console.error('Error al obtener los campos:', error);
      });
  }, []);


  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");
    // Validar que todos los campos están llenos
    for (const field of fields) {
        if (!formData[field]) {
            alert(`Por favor, completa el campo ${field}`);
            return;
        }
    }

    try {
        const response = await fetch('https://dea-crud.azurewebsites.net/apiAgenda.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Agrega aquí otros headers necesarios, como autorización
                'Authorization': `Bearer ${jwt}` // Ejemplo de cómo incluir el JWT, ajusta según sea necesario
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Verifica si el mensaje de la respuesta es 'Registro creado'
        if (result.message === 'Registro creado') {
            // Redirige a la página 'agenda'
            router.push("agenda");
        } else {
            console.log(result); // O maneja los mensajes de error como sea necesario
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
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

          {/* Generar inputs de forma dinámica */}
          {fields.map(field => (
            <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            className="mt-4 w-full py-2 px-4 rounded-full border-2"
            onChange={handleInputChange}
        />
          ))}


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
