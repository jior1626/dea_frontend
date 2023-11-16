"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina1.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
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

  // Estados para cada uno de los campos del formulario y para los errores
  const [dea_ciudadmunicipio, setdea_ciudadmunicipio] = useState("");
  const [dea_departamento, setdea_departamento] = useState("");
  const [dea_tipodeclaracion, setdea_tipodeclaracion] = useState("");
  const [dea_tipoinstalacion, setdea_tipoinstalacion] = useState("");

  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (dea_ciudadmunicipio.length < 4)
      newErrors.push("El nombre del municipio es obligatorio.");
    if (dea_departamento.length < 4) {
      newErrors.push("El departamento es obligatorio");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("dea_ciudadmunicipio", dea_ciudadmunicipio);
      localStorage.setItem("dea_departamento", dea_departamento);
      localStorage.setItem("dea_tipodeclaracion", dea_tipodeclaracion);
      localStorage.setItem("dea_tipoinstalacion", dea_tipoinstalacion);

      router.push("/anexo2pagina2"); // Asegúrate de que esta ruta es la correcta
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
      <div className="contenedor">
        <div className="bloque">
          <input
            type="text"
            className="inputForm"
            placeholder="Ciudad o municipio"
            onKeyDown={handleKeyDown2}
            onChange={(e) => setdea_ciudadmunicipio(e.target.value)}
            value={dea_ciudadmunicipio}
          />

          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre del municipio es obligatorio.") && (
            <p className="text-red-500">El nombre completo es obligatorio.</p>
          )}
        </div>

        <div className="bloque">
          <input
            type="text"
            className="inputForm"
            placeholder="Departamento"
            onKeyDown={handleKeyDown}
            onChange={(e) => setdea_departamento(e.target.value)}
            value={dea_departamento}
          />
          {/* Mensaje de error para el documento de identificación, si existe */}
          {errores.includes("El departamento es obligatorio") && (
            <p className="text-red-500">El departamento es obligatorio</p>
          )}
        </div>
        <div className="bloque">
          <br></br>
          <p>Declaración:</p>

          <select
            className="inputForm"
            onChange={(e) => setdea_tipodeclaracion(e.target.value)}
          >
            <option>Selecciona</option>
            <option value="Permanente">Permanente</option>
            <option value="Retirada">Retirada</option>
            <option value="Temporal">Temporal</option>
            <option value="Modificación ubicación">
              Modificación ubicación
            </option>
            <option value="Cambio titular">Cambio titular</option>
          </select>
          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre del sitio es obligatorio.") && (
            <p className="text-red-500">El nombre del sitio es obligatorio.</p>
          )}

          <br></br>
          <p>Tipo de Instalación::</p>

          <select
            className="inputForm"
            onChange={(e) => setdea_tipoinstalacion(e.target.value)}
          >
            <option>Selecciona</option>
            <option value="Obligatoria">Obligatoria</option>
            <option value="Voluntaria">Voluntaria</option>
          </select>
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

      <Footer />
    </main>
  );
}
