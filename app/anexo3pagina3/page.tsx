"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3pagina3.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";
import ChildModal from "../components/modals";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexo3Finalizo = () => {
    router.push("anexo3finalizo");
  };

  const navigateToSectionActivarRutaVital = () => {
    router.push("rutavital");
  };

  const handleKeyDown2 = (e) => {
    // Crear una expresión regular que coincida con caracteres no permitidos
    const invalidChars = /[0-9]/;

    // Si el carácter es un número, prevenir la entrada
    if (invalidChars.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    // Permitir solo teclas de control y números
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const horaActual = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [uso_datosmediotransportemediotransporte, setuso_datosmediotransportemediotransporte] = useState("");
  const [uso_datosmediotransporteempresaambulancia, setuso_datosmediotransporteempresaambulancia] = useState("");
  const [uso_datosmediotransporteobservaciones, setuso_datosmediotransporteobservaciones] = useState("");
  const [uso_datospersonaresponsable, setuso_datospersonaresponsable] = useState("");
  const [uso_firma, setuso_firma] = useState("");
  
  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (!uso_datosmediotransportemediotransporte.trim())
      newErrors.push("El medio de transporte es obligatorio.");
    if (
      !uso_datosmediotransporteempresaambulancia.trim() ||
      uso_datosmediotransporteempresaambulancia.length < 8
    ) {
      newErrors.push("La empresa debe tener al menos 8 caracteres.");
    }
    if (!uso_datosmediotransporteobservaciones.trim() || uso_datosmediotransporteobservaciones.length < 6 ) {
      newErrors.push("La observación debe contener al menos 6 caracteres.");
    }
    if (uso_datospersonaresponsable.length < 8 ) {
      newErrors.push("El nombre del responsable debe contener al menos 8 caracteres.");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = async () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("uso_datosmediotransportemediotransporte", uso_datosmediotransportemediotransporte);
      localStorage.setItem("uso_datosmediotransporteempresaambulancia", uso_datosmediotransporteempresaambulancia);
      localStorage.setItem("uso_datosmediotransporteobservaciones", uso_datosmediotransporteobservaciones);
      localStorage.setItem("uso_datospersonaresponsable", uso_datospersonaresponsable);
      localStorage.setItem("uso_firma", uso_firma);

      const uso_fechaevento = localStorage.getItem("uso_fechaevento");
      const uso_nombrelugarevento = localStorage.getItem("uso_nombrelugarevento");
      const uso_personaatendidaeventonombre = localStorage.getItem("uso_personaatendidaeventonombre");
      const uso_personaatendidaeventotipodocumento = localStorage.getItem("uso_personaatendidaeventotipodocumento");
      const uso_personaatendidaeventonumerodocumento = localStorage.getItem("uso_personaatendidaeventonumerodocumento");
      const uso_personaatendidaeventoedad = localStorage.getItem("uso_personaatendidaeventoedad");
      const uso_personaatendidaeventosexo = localStorage.getItem("uso_personaatendidaeventosexo");
      const uso_personaatendidaeventoaseguradorsalud = localStorage.getItem("uso_personaatendidaeventoaseguradorsalud");
      const uso_datoseventonombrepersonautilizodea = localStorage.getItem("uso_datoseventonombrepersonautilizodea");
      const uso_datoseventotipodocumento = localStorage.getItem("uso_datoseventotipodocumento");
      const uso_datoseventonumerodocumento = localStorage.getItem("uso_datoseventonumerodocumento");
      const uso_datoseventotelefono = localStorage.getItem("uso_datoseventotelefono");
      const uso_datoseventohorainicioevento = localStorage.getItem("uso_datoseventohorainicioevento");
      const uso_datoseventohoraactivacioncadenasupervivencia = localStorage.getItem("uso_datoseventohoraactivacioncadenasupervivencia");
      const uso_datoseventohorautilizaciondea = localStorage.getItem("uso_datoseventohorautilizaciondea");
      const uso_datoseventohoratrasladopersonaatendida = localStorage.getItem("uso_datoseventohoratrasladopersonaatendida");
      const uso_datosmediotransportenombreencargado = localStorage.getItem("uso_datosmediotransportenombreencargado");

      const data = {
        uso_fechaevento:uso_fechaevento,
        uso_nombrelugarevento:uso_nombrelugarevento,
        uso_personaatendidaeventonombre:uso_personaatendidaeventonombre,
        uso_personaatendidaeventotipodocumento:uso_personaatendidaeventotipodocumento,
        uso_personaatendidaeventonumerodocumento:uso_personaatendidaeventonumerodocumento,
        uso_personaatendidaeventoedad:uso_personaatendidaeventoedad,
        uso_personaatendidaeventosexo:uso_personaatendidaeventosexo,
        uso_personaatendidaeventoaseguradorsalud:uso_personaatendidaeventoaseguradorsalud,
        uso_datoseventonombrepersonautilizodea:uso_datoseventonombrepersonautilizodea,
        uso_datoseventotipodocumento:uso_datoseventotipodocumento,
        uso_datoseventonumerodocumento:uso_datoseventonumerodocumento,
        uso_datoseventotelefono:uso_datoseventotelefono,
        uso_datoseventohorainicioevento:uso_datoseventohorainicioevento,
        uso_datoseventohoraactivacioncadenasupervivencia:uso_datoseventohoraactivacioncadenasupervivencia,
        uso_datoseventohorautilizaciondea:uso_datoseventohorautilizaciondea,
        uso_datoseventohoratrasladopersonaatendida:uso_datoseventohoratrasladopersonaatendida,
        uso_datosmediotransportenombreencargado:uso_datosmediotransportenombreencargado,
        uso_datosmediotransportemediotransporte:uso_datosmediotransportemediotransporte,
        uso_datosmediotransporteempresaambulancia:uso_datosmediotransporteempresaambulancia,
        uso_datosmediotransporteobservaciones:uso_datosmediotransporteobservaciones,
        uso_datospersonaresponsable:uso_datospersonaresponsable,
        uso_firma:uso_firma
      };

      try {
        const jsonBody = JSON.stringify(data);
        const response = await fetch(
          "https://dea-crud.azurewebsites.net/apiUso.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        //alert(JSON.stringify(data))
        if (response.ok) {
          const responseData = await response.json();
          if (responseData.message === "dea creado") {
            // La solicitud se completó con éxito y el mensaje es "dea creado"
            router.push("/anexo3finalizo"); // Asegúrate de que esta ruta es la correcta
          } else {
            // El mensaje no es "dea creado"
            alert("El DEA no se pudo registrar. Por favor, intente de nuevo.");
          }
        } else {
          // Hubo un error en la solicitud
          alert("Error al enviar los datos.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }

      
    } else {
      // Mostrar los mensajes de error si la validación falla
      errores.forEach((error) => alert(error));
    }
  };

  return (
    <main>
      <Header />
      <div className="iconos">
        <ChevronLeft />
        <User />
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloque1">
          <h2>Medio de transporte utilizado para el traslado:</h2>
        </div>

        <div className="bloque">
          <select
            className="inputData"
            onChange={(e) =>
              setuso_datosmediotransportemediotransporte(e.target.value)
            }
          >
            <option value="seleccione">Seleccione uno</option>
            <option value="Ambulancia">Ambulancia</option>
            <option value="Transporte particular">Transporte particular</option>
            <option value="Otro">Otro</option>
          </select>
          {errores.includes("El medio de transporte es obligatorio.") && (
            <p className="text-red-500">El medio de transporte es obligatorio.</p>
          )}
        </div>

        <div className="bloque">
          <input
            type="text"
            id="uso_datosmediotransporteempresaambulancia"
            placeholder="Nombre de la empresa de la ambulancia"
            className="inputData"
            onChange={(e) =>
              setuso_datosmediotransporteempresaambulancia(e.target.value)
            }
          />
          {errores.includes("La empresa debe tener al menos 8 caracteres.") && (
            <p className="text-red-500">La empresa debe tener al menos 8 caracteres.</p>
          )}
        </div>
        <br></br>
        <div className="bloque">
          <strong>Observaciones:</strong>
          <textarea
            id="uso_datosmediotransporteobservaciones"
            placeholder=""
            className="inputData"
            onChange={(e) =>
              setuso_datosmediotransporteobservaciones(e.target.value)
            }
          ></textarea>
          {errores.includes("La observación debe contener al menos 8 caracteres.") && (
            <p className="text-red-500">La observación debe contener al menos 8 caracteres.</p>
          )}
        </div>

        <div className="bloque">
          <input
            type="text"
            id="uso_datospersonaresponsable"
            placeholder="Nombre persona de la institución responsable del DEA utilizado"
            className="inputData"
            onChange={(e) => setuso_datospersonaresponsable(e.target.value)}
          />
          {errores.includes("El nombre del responsable debe contener al menos 8 caracteres.") && (
            <p className="text-red-500">El nombre del responsable debe contener al menos 8 caracteres.</p>
          )}
        </div>
        <div className="bloqueFirma">
          <strong>Firma:</strong>
          <input
            type="text"
            id="uso_firma"
            className="inputData"
            onChange={(e) => setuso_firma(e.target.value)}
          />
        </div>

        <br></br>
        <ChildModal/>
        <br></br>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSection}
          >
            Enviar
          </button>
          <HomeOut />
          <br />
        </div>

        <br></br>
        <br></br>
      </div>
      <br></br>

      <Footer />
    </main>
  );
}
