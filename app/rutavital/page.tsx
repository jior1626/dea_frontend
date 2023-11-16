"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./rutavital.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexo3Pagina3 = () => {
    router.push("anexo3pagina3");
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

  const [
    uso_datoseventonombrepersonautilizodea,
    setUso_datoseventonombrepersonautilizodea,
  ] = useState("");
  const [uso_nombrelugarevento, setUso_nombrelugarevento] = useState("");
  const [
    uso_personaatendidaeventotipodocumento,
    setUso_personaatendidaeventotipodocumento,
  ] = useState("");
  const [
    uso_personaatendidaeventonumerodocumento,
    setUso_personaatendidaeventonumerodocumento,
  ] = useState("");
  const [uso_personaatendidaeventoedad, setUso_personaatendidaeventoedad] =
    useState("");
  const [uso_personaatendidaeventosexo, setUso_personaatendidaeventosexo] =
    useState("");
  const [
    uso_personaatendidaeventoaseguradorsalud,
    setUso_personaatendidaeventoaseguradorsalud,
  ] = useState("");
  const [uso_datoseventotipodocumento, setUso_datoseventotipodocumento] =
    useState("");
  const [uso_datoseventonumerodocumento, setUso_datoseventonumerodocumento] =
    useState("");

  const [uso_datoseventohorainicioevento, setUso_datoseventohorainicioevento] =
    useState("" + horaActual);
  const [
    uso_datoseventohoraactivacioncadenasupervivencia,
    setUso_datoseventohoraactivacioncadenasupervivencia,
  ] = useState("" + horaActual);
  const [
    uso_datoseventohorautilizaciondea,
    setUso_datoseventohorautilizaciondea,
  ] = useState("" + horaActual);
  const [
    uso_datoseventohoratrasladopersonaatendida,
    setUso_datoseventohoratrasladopersonaatendida,
  ] = useState("" + horaActual);
  const [
    uso_datosmediotransportenombreencargado,
    setUso_datosmediotransportenombreencargado,
  ] = useState("");
  const [
    uso_datosmediotransportemediotransporte,
    setUso_datosmediotransportemediotransporte,
  ] = useState("");
  const [
    uso_datosmediotransporteempresaambulancia,
    setUso_datosmediotransporteempresaambulancia,
  ] = useState("");
  const [
    uso_datosmediotransporteobservaciones,
    setUso_datosmediotransporteobservaciones,
  ] = useState("");
  const [uso_FUso_firma, setUso_firma] = useState("");

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
        <div className="bloque">
          <h1>¿Estás seguro que quieres activar la ruta vital?</h1>
        </div>

        <div className="fila-container">
          <div className="columna">
          <button
          className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
          onClick={navigateToSectionAnexo3Pagina3}
        >
          Si
        </button>
        <br></br>
          </div>
          <div className="columna">
          <button
          className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
          onClick={navigateToSectionOptions}
        >
          No
        </button>
          </div>
        </div>


        <br></br>

        <div className="contenedorCasita">
          <img
            src="https://nivel99.com/desfibriladores/casita.png"
            onClick={navigateToSectionOptions}
          />
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
