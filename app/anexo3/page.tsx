"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexo3Pagina2 = () => {
    router.push("anexo3pagina2");
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

  const [uso_fechaevento, setUso_fechaevento] = useState("");
  const [uso_nombrelugarevento, setUso_nombrelugarevento] = useState("");
  const [uso_personaatendidaeventotipodocumento,setUso_personaatendidaeventotipodocumento] = useState("");
  const [uso_personaatendidaeventonumerodocumento,setUso_personaatendidaeventonumerodocumento] = useState("");
  const [uso_personaatendidaeventoedad, setUso_personaatendidaeventoedad] = useState("");
  const [uso_personaatendidaeventosexo, setUso_personaatendidaeventosexo] = useState("");
  const [uso_personaatendidaeventoaseguradorsalud, setUso_personaatendidaeventoaseguradorsalud] = useState("");

  // Estados para cada uno de los campos del formulario y para los errores
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [documentoIdentificacion, setDocumentoIdentificacion] = useState("");
  const [existenciaDesfibriladores, setExistenciaDesfibriladores] =
    useState("1");
  const [nombreSitio, setNombreSitio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (!nombreCompleto.trim())
      newErrors.push("El nombre completo es obligatorio.");
    if (
      !documentoIdentificacion.trim() ||
      documentoIdentificacion.length !== 8
    ) {
      newErrors.push("El documento de identificación debe tener 10 dígitos.");
    }
    if (!existenciaDesfibriladores.trim()) {
      newErrors.push("Debe indicar la cantidad de desfibriladores.");
    }
    if (!nombreSitio.trim()) {
      newErrors.push("El nombre del sitio es obligatorio.");
    }
    if (!direccion.trim()) {
      newErrors.push("La dirección es obligatoria.");
    }
    if (!codigoPostal.trim() || !/^\d{5}$/.test(codigoPostal)) {
      newErrors.push("El código postal debe tener 5 dígitos.");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("REG_NOMBRECOMPLETO", nombreCompleto);
      localStorage.setItem("REG_DOCIDENTIFICACION", documentoIdentificacion);
      localStorage.setItem("REG_CANTIDAD", existenciaDesfibriladores);
      localStorage.setItem("REG_NOMBREUBICACION", nombreSitio);
      localStorage.setItem("REG_DIRECCIONUBICACION", direccion);
      localStorage.setItem("REG_CODIGOPOSTAL", codigoPostal);

      router.push("/anexo2pagina2"); // Asegúrate de que esta ruta es la correcta
    } else {
      // Mostrar los mensajes de error si la validación falla
      errores.forEach((error) => alert(error));
    }
  };

  return (
    <main>
      <Header />
<br></br>
      <div className="contenedor">
        <div className="columnas">
          <div className="columna-texto">
            <h2>Formulario de reporte uso de Desfibrilador Externo Automático - DEA en ambiente extrahospitalario</h2>
          </div>
          <div className="columna-imagen">
            <img
              src="https://nivel99.com/desfibriladores/info.png"
              alt="Imagen Descriptiva"
            />
          </div>
        </div>

        <div className="bloque">
        <input
            type="date"
            id="fecha"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_fechaevento(e.target.value)}
            max={new Date().toISOString().split("T")[0]} // Establecer la fecha máxima como la fecha actual
          />

          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre completo es obligatorio.") && (
            <p className="text-red-500">El nombre completo es obligatorio.</p>
          )}
        </div>

        <div className="bloque">
        <input
            type="text"
            id="lugar"
            placeholder="Nombre del lugar del evento"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_nombrelugarevento(e.target.value)}
          />
        </div>

        <div className="bloque" >
          <strong>Datos de la persona atendida en el evento:</strong>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre completo"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_personaatendidaeventonombre(e.target.value)}
          />
           
            <br /><br />
            <select
            id="numeroidentificacion"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) =>
              setUso_personaatendidaeventotipodocumento(e.target.value)
            }
          >
            <option value="Cedula">Cedula</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
            <br /><br />
            <input
            type="text"
            id="documentoidentificacion"
            placeholder="Número de doc. de identifición"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) =>
              setUso_personaatendidaeventonumerodocumento(e.target.value)
            }
          />
          <br></br>
          <br></br>
          <input
            type="number"
            id="edad"
            placeholder="Edad"
            className="inputData mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_personaatendidaeventoedad(e.target.value)}
          />

          <br></br>
          <br></br>
          <select 
          className="inputData mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_personaatendidaeventosexo(e.target.value)
          }
          >
           <option value="Hombre">Hombre</option>
           <option value="Mujer">Mujer</option>
          </select>

          <br></br>
          <br></br>

          <input
          type="text"
          id="edad"
          placeholder="Asegurador en Salud"
          className="inputData mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_personaatendidaeventoaseguradorsalud(e.target.value)
          }
        />


        </div>

        <button
              className="btnNext btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
              onClick={navigateToSectionAnexo3Pagina2}
            >
              Siguiente
            </button>

            <br></br>

            <div className="contenedorCasita">
              <img src="https://nivel99.com/desfibriladores/casita.png" onClick={navigateToSectionOptions} /><br/>
            </div>

            <br></br><br></br>

      </div>
      <br></br>

      <Footer />
    </main>
  );
}
