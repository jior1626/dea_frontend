"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EyeSlash, Eye} from "../components/iconos";
import {InstruccionesInstalacion} from "../components/modals";

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
    if (nombreCompleto.length < 6)
      newErrors.push("El nombre completo es obligatorio.");
    if (
      documentoIdentificacion.length < 8
    ) {
      newErrors.push("El documento de identificación debe tener  dígitos.");
    }
    if (existenciaDesfibriladores.length < 1) {
      newErrors.push("Debe indicar la cantidad de desfibriladores.");
    }
    if (nombreSitio.length < 4) {
      newErrors.push("El nombre del sitio es obligatorio.");
    }
    if (direccion.length < 5) {
      newErrors.push("La dirección es obligatoria.");
    }
    if (codigoPostal.length < 4 || !/^\d{5}$/.test(codigoPostal)) {
      newErrors.push("El código postal debe tener 5 dígitos.");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("dea_nombrecompleto", nombreCompleto);
      localStorage.setItem("dea_docidentificacion", documentoIdentificacion);
      localStorage.setItem("dea_cantidad", existenciaDesfibriladores);
      localStorage.setItem("dea_nombreubicacion", nombreSitio);
      localStorage.setItem("dea_direccionubicacion", direccion);
      localStorage.setItem("dea_codigopostal", codigoPostal);

      router.push("/anexo2pagina1"); // Asegúrate de que esta ruta es la correcta
    } else {
      // Mostrar los mensajes de error si la validación falla
      errores.forEach((error) => alert(error));
    }
  };

  return (
    <main>
      <Header />
      <div className="iconos">
        <a href="options"><ChevronLeft /></a>
        <User />
      </div>
      <div className="contenedor">
        <div className="containerTituloAnexo">
          <h6 className=" tituloanexo">
            REGISTRO DE INSTALACIÓN DESFIBRILADORES EXTERNOS (DEA)
            <p className="ley">(Ley 1831 del 12 de mayo de 2017)</p>
          </h6>
          <a>
            <InstruccionesInstalacion />
          </a>
        </div>
        <div className="bloque">
          <strong>Representante legal:</strong>
          <input
            type="text"
            className="inputForm"
            placeholder="Nombre"
            onKeyDown={handleKeyDown2}
            onChange={(e) => setNombreCompleto(e.target.value)}
            value={nombreCompleto}
          />

          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre completo es obligatorio.") && (
            <p className="text-red-500">El nombre completo es obligatorio.</p>
          )}
        </div>

        <div className="bloque">
          <input
            type="number"
            className="inputForm"
            placeholder="Documento de identificación"
            onKeyDown={handleKeyDown}
            onChange={(e) => setDocumentoIdentificacion(e.target.value)}
            value={documentoIdentificacion}
          />
          {/* Mensaje de error para el documento de identificación, si existe */}
          {errores.includes(
            "El documento de identificación debe tener  dígitos."
          ) && (
            <p className="text-red-500">
              El documento de identificación debe tener  dígitos.
            </p>
          )}
        </div>

        <div className="bloque">
          
          <div>
          <p>
            Comunica la existencia de  <input type="text" placeholder="#" inputmode="numeric" pattern="[0-9]*" className="numberDesfribiladores" name="numero_desfibriladores" /> desfibrilador/es externo/s ubicados en:
          </p>
          </div>
        
          <input
            type="text"
            className="inputForm"
            placeholder="Nombre del espacio/lugar"
            onKeyDown={handleKeyDown2}
            onChange={(e) => setNombreSitio(e.target.value)}
            value={nombreSitio}
          />
          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre del sitio es obligatorio.") && (
            <p className="text-red-500">El nombre del sitio es obligatorio.</p>
          )}

          <input
            type="text"
            className="inputForm"
            placeholder="Dirección"
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
          />
          {/* Mensaje de error para la dirección, si existe */}
          {errores.includes("La dirección es obligatoria.") && (
            <p className="text-red-500">La dirección es obligatoria.</p>
          )}

          <input
            type="number"
            className="inputForm"
            placeholder="Código Postal"
            onChange={(e) => setCodigoPostal(e.target.value)}
            value={codigoPostal}
          />
          {/* Mensaje de error para el código postal, si existe */}
          {errores.includes("El código postal debe tener 5 dígitos.") && (
            <p className="text-red-500">
              El código postal debe tener 5 dígitos.
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

      <Footer />
    </main>
  );
}
