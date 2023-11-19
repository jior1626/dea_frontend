"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";
import { InstruccionesUso } from "../components/modals";

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

  const [uso_fechaevento, setuso_fechaevento] = useState("");
  const [uso_nombrelugarevento, setuso_nombrelugarevento] = useState("");
  const [uso_personaatendidaeventonombre, setuso_personaatendidaeventonombre] =
    useState("");
  const [
    uso_personaatendidaeventotipodocumento,
    setuso_personaatendidaeventotipodocumento,
  ] = useState("");
  const [
    uso_personaatendidaeventonumerodocumento,
    setuso_personaatendidaeventonumerodocumento,
  ] = useState("");
  const [uso_personaatendidaeventoedad, setuso_personaatendidaeventoedad] =
    useState("");
  const [uso_personaatendidaeventosexo, setuso_personaatendidaeventosexo] =
    useState("");
  const [
    uso_personaatendidaeventoaseguradorsalud,
    setuso_personaatendidaeventoaseguradorsalud,
  ] = useState("");

  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (!uso_fechaevento.trim()) newErrors.push("La fecha es obligatoria.");
    if (uso_nombrelugarevento.length < 8) {
      newErrors.push("El lugar del evento debe tener al menos 8 dígitos.");
    }
    if (uso_personaatendidaeventonombre.length < 8) {
      newErrors.push("Debe contener al menos 8 caracteres.");
    }
    if (!uso_personaatendidaeventotipodocumento.trim()) {
      newErrors.push("El tipo de documento es obligatorio.");
    }
    if (uso_personaatendidaeventonumerodocumento.length < 8) {
      newErrors.push("El documento es obligatorio.");
    }
    if (!uso_personaatendidaeventoedad.trim()) {
      newErrors.push("La edad es obligatoria.");
    }
    if (!uso_personaatendidaeventosexo.trim()) {
      newErrors.push("El sexo es obligatorio.");
    }
    if (uso_personaatendidaeventoaseguradorsalud.length < 4) {
      newErrors.push("La aseguradora debe tener al menos 4 dígitos.");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("uso_fechaevento", uso_fechaevento);
      localStorage.setItem("uso_nombrelugarevento", uso_nombrelugarevento);
      localStorage.setItem(
        "uso_personaatendidaeventonombre",
        uso_personaatendidaeventonombre
      );
      localStorage.setItem(
        "uso_personaatendidaeventotipodocumento",
        uso_personaatendidaeventotipodocumento
      );
      localStorage.setItem(
        "uso_personaatendidaeventonumerodocumento",
        uso_personaatendidaeventonumerodocumento
      );
      localStorage.setItem(
        "uso_personaatendidaeventoedad",
        uso_personaatendidaeventoedad
      );
      localStorage.setItem(
        "uso_personaatendidaeventosexo",
        uso_personaatendidaeventosexo
      );
      localStorage.setItem(
        "uso_personaatendidaeventoaseguradorsalud",
        uso_personaatendidaeventoaseguradorsalud
      );

      router.push("/anexo3pagina2"); // Asegúrate de que esta ruta es la correcta
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
        <div className="columnas">
          <div className="columna-texto">
            <h6 className=" tituloanexo">
              Formulario de reporte uso de Desfibrilador Externo Automático -
              DEA en ambiente extrahospitalario
            </h6>
            <InstruccionesUso />
          </div>
          <div className="columna-imagen">
            <img
              src="https://nivel99.com/desfibriladores/info.png"
              alt="Imagen Descriptiva"
            />
          </div>
        </div>

        <div className="columnFirst">
          <div className="bloque1">
            <input
              type="date"
              id="fecha"
              className="inputForm"
              onChange={(e) => setuso_fechaevento(e.target.value)}
              max={new Date().toISOString().split("T")[0]} // Establecer la fecha máxima como la fecha actual
            />
            {errores.includes("La fecha es obligatoria.") && (
              <p className="text-red-500">La fecha es obligatoria.</p>
            )}
          </div>

          <div className="bloque1">
            <input
              type="text"
              id="lugar"
              placeholder="Nombre del lugar del evento"
              className="inputForm"
              onKeyDown={handleKeyDown2}
              onChange={(e) => setuso_nombrelugarevento(e.target.value)}
            />
            {errores.includes(
              "El lugar del evento debe tener al menos 8 dígitos."
            ) && (
              <p className="text-red-500">
                El lugar del evento debe tener al menos 8 dígitos.
              </p>
            )}
          </div>
        </div>

        <div className="bloque">
          <strong>Datos de la persona atendida en el evento:</strong>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre completo"
            className="inputForm"
            onKeyDown={handleKeyDown2}
            onChange={(e) => setuso_personaatendidaeventonombre(e.target.value)}
          />
          {errores.includes("Debe contener al menos 8 caracteres.") && (
            <p className="text-red-500">Debe contener al menos 8 caracteres.</p>
          )}

          <div className="columnFirst">
            <div className="bloque2">
              <select
                id="numeroidentificacion"
                className="inputForm"
                onChange={(e) =>
                  setuso_personaatendidaeventotipodocumento(e.target.value)
                }
              >
                <option value="Cedula">Tipo de doc. de identificación</option>
                <option value="Cedula">Tarjeta de Identidad</option>
                <option value="Pasaporte">Cedula de Ciudadanía</option>
                <option value="Cedula">Cedula de Extranjería</option>
                <option value="Cedula">Registro Civil</option>
                <option value="Cedula">Pasaporte</option>
                <option value="Cedula">Permiso Especial de Permanencia</option>
                <option value="Cedula">Documento Extranjero</option>
                <option value="Cedula">Sin Documento</option>
              </select>
              {errores.includes("El tipo de documento es obligatorio.") && (
                <p className="text-red-500">
                  El tipo de documento es obligatorio.
                </p>
              )}
            </div>

            <div className="bloque3">
              <input
                type="number"
                id="documentoidentificacion"
                placeholder="Número de doc. de identifición"
                className="inputForm"
                onKeyDown={handleKeyDown}
                onChange={(e) =>
                  setuso_personaatendidaeventonumerodocumento(e.target.value)
                }
              />
              {errores.includes("El documento es obligatorio.") && (
                <p className="text-red-500">El documento es obligatorio.</p>
              )}
            </div>
          </div>

          <input
            type="number"
            id="edad"
            placeholder="Edad"
            className="inputForm"
            onKeyDown={handleKeyDown}
            onChange={(e) => setuso_personaatendidaeventoedad(e.target.value)}
          />
          {errores.includes("La edad es obligatoria.") && (
            <p className="text-red-500">La edad es obligatoria.</p>
          )}

          <div className="columnSecond">
            <p>Sexo</p>
            <select
              className="inputForm"
              onChange={(e) => setuso_personaatendidaeventosexo(e.target.value)}
            >
              <option value="selecciona">Selecciona uno</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Mujer">Intersexual</option>
              <option value="Mujer">Indefinido</option>
            </select>
            {errores.includes("El sexo es obligatorio.") && (
              <p className="text-red-500">El sexo es obligatorio.</p>
            )}
          </div>
          <div className="columnSecond">
            <p>Etnia</p>
            <select
              className="inputForm"
              onChange={(e) => setuso_personaatendidaeventosexo(e.target.value)}
            >
              <option value="selecciona">Selecciona uno</option>
              <option value="Hombre">Afrocolobiano - Afrodescendente</option>
              <option value="Hombre">Palenquero</option>
              <option value="Hombre">Raizal</option>
              <option value="Hombre"> Indígena - Originario</option>
              <option value="Hombre">Rom - Gitanos</option>
              <option value="Mujer">Negro</option>
              <option value="Mujer">Ninguno</option>
            </select>
            {errores.includes("El sexo es obligatorio.") && (
              <p className="text-red-500">El sexo es obligatorio.</p>
            )}
          </div>
          <div className="columnSecond">
            <p>Orientación Sexual</p>
            <select
              className="inputForm"
              onChange={(e) => setuso_personaatendidaeventosexo(e.target.value)}
            >
              <option value="selecciona">Selecciona uno</option>
              <option value="Hombre">Heterosexual</option>
              <option value="Mujer">Lesbiana</option>
              <option value="Mujer">Bisexual</option>
              <option value="Mujer">Gay</option>
              <option value="Mujer">Asexual</option>
              <option value="Mujer">Pansexual</option>
              <option value="Mujer">Homosexual</option>
              <option value="Mujer">Sin Dato</option>
              <option value="Mujer">No Sabe No Responde</option>
            </select>
            {errores.includes("El sexo es obligatorio.") && (
              <p className="text-red-500">El sexo es obligatorio.</p>
            )}
          </div>

          <div className="columnSecond">
            <p>Identidad de género</p>
            <select
              className="inputForm"
              onChange={(e) => setuso_personaatendidaeventosexo(e.target.value)}
            >
              <option value="selecciona">Selecciona uno</option>
              <option value="Hombre">Mujer Trans</option>
              <option value="Mujer">Hombre Trans</option>
              <option value="Mujer">Fluido - No binario</option>
              <option value="Mujer">mujer cis</option>
              <option value="Mujer">Hombre Cis</option>
              <option value="Mujer">Sin Dato</option>
              <option value="Mujer">No Sabe No Responde</option>
              <option value="Mujer">Travesti</option>
              <option value="Mujer">Transexual</option>
              <option value="Mujer">Transformista</option>
            </select>
            {errores.includes("El sexo es obligatorio.") && (
              <p className="text-red-500">El sexo es obligatorio.</p>
            )}
          </div>

          <input
            type="text"
            id="aseguradorsalud"
            placeholder="Asegurador en Salud"
            className="inputForm"
            onKeyDown={handleKeyDown2}
            onChange={(e) =>
              setuso_personaatendidaeventoaseguradorsalud(e.target.value)
            }
          />
          {errores.includes(
            "La aseguradora debe tener al menos 4 dígitos."
          ) && (
            <p className="text-red-500">
              La aseguradora debe tener al menos 4 dígitos.
            </p>
          )}
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSection}
          >
            Siguiente
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
