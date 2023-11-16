"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina6.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home, CirclePlus } from "../components/iconos";

export default function Options() {
  const router = useRouter();

  const [dea_firma, setdea_firma] = useState("");
  const [dea_ciudadpersonal, setdea_ciudadpersonal] = useState("");
  const [dea_fechapersonal, setdea_fechapersonal] = useState("");

  const [errordea_firma, setErrordea_firma] = useState("");
  const [errordea_ciudadpersonal, setErrordea_ciudadpersonal] = useState("");
  const [errordea_fechapersonal, setErrordea_fechapersonal] = useState("");

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag7 = () => {
    router.push("anexo2pagina7");
  };

  const handleSubmit = async () => {
    const dea_nombrecompleto = localStorage.getItem("dea_nombrecompleto");
    const dea_cantidad = localStorage.getItem("dea_cantidad");
    const dea_docidentificacion = localStorage.getItem("dea_docidentificacion");
    const dea_codigopostal = localStorage.getItem("dea_codigopostal");
    const dea_nombreubicacion = localStorage.getItem("dea_nombreubicacion");
    const dea_direccionubicacion = localStorage.getItem(
      "dea_direccionubicacion"
    );
    const dea_ciudadmunicipio = localStorage.getItem("dea_ciudadmunicipio");
    const dea_departamento = localStorage.getItem("dea_departamento");
    const dea_tipodeclaracion = localStorage.getItem("dea_tipodeclaracion");
    const dea_tipoinstalacion = localStorage.getItem("dea_tipoinstalacion");
    const dea_tipoespacio = localStorage.getItem("dea_tipoespacio");
    const dea_otros = localStorage.getItem("dea_otros");
    const dea_fecha = localStorage.getItem("dea_fecha");
    const dea_numserie = localStorage.getItem("dea_numserie");
    const dea_modelo = localStorage.getItem("dea_modelo");
    const dea_marca = localStorage.getItem("dea_marca");
    const dea_importadordistribuidor = localStorage.getItem(
      "dea_importadordistribuidor"
    );
    const dea_desclugarubicacion = localStorage.getItem(
      "dea_desclugarubicacion"
    );
    const dea_gps = localStorage.getItem("dea_gps");
    const dea_documentopersonalcertificado = localStorage.getItem(
      "dea_documentopersonalcertificado"
    );
    const dea_nombresapellidospersonalcertificado = localStorage.getItem(
      "dea_nombresapellidospersonalcertificado"
    );
    const dea_entidadcertificadora = localStorage.getItem(
      "dea_entidadcertificadora"
    );
    const dea_fechacertificacion = localStorage.getItem(
      "dea_fechacertificacion"
    );

    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!dea_firma) {
      setErrordea_firma("La firma es obligatoria");
      hasError = true;
    } else {
      setErrordea_firma("");
    }

    if (!dea_ciudadpersonal) {
      setErrordea_ciudadpersonal("La ciudad es obligatoria");
      hasError = true;
    } else {
      setErrordea_ciudadpersonal("");
    }

    if (!dea_fechapersonal) {
      setErrordea_fechapersonal("La ciudad es obligatoria");
      hasError = true;
    } else {
      setErrordea_fechapersonal("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    const data = {
      dea_nombrecompleto:dea_nombrecompleto,
      dea_docidentificacion:dea_docidentificacion,
      dea_cantidad:dea_cantidad,
      dea_nombreubicacion:dea_nombreubicacion,
      dea_direccionubicacion:dea_direccionubicacion,
      dea_codigopostal:dea_codigopostal,
      dea_ciudadmunicipio:dea_ciudadmunicipio,
      dea_departamento:dea_departamento,
      dea_tipoinstalacion:dea_tipoinstalacion,
      dea_tipodeclaracion:dea_tipodeclaracion,
      dea_tipoespacio:dea_tipoespacio,
      dea_numserie:dea_numserie,
      dea_modelo:dea_modelo,
      dea_marca:dea_marca,
      dea_importadordistribuidor:dea_importadordistribuidor,
      dea_desclugarubicacion:dea_desclugarubicacion,
      dea_gps:dea_gps,
      dea_otros:dea_otros,
      dea_fecha:dea_fecha,
      dea_documentopersonalcertificado:dea_documentopersonalcertificado,
      dea_nombresapellidospersonalcertificado:dea_nombresapellidospersonalcertificado,
      dea_entidadcertificadora:dea_entidadcertificadora,
      dea_fechacertificacion:dea_fechacertificacion,
      dea_firma:dea_firma,
      dea_ciudadpersonal:dea_ciudadpersonal,
      dea_fechapersonal:dea_fechapersonal,
    };

    // Realizar la solicitud POST
    try {
      const jsonBody = JSON.stringify(data);
      const response = await fetch(
        "https://dea-crud.azurewebsites.net/api.php",
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
          router.push("anexo2pagina7");
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

    //router.push("anexo2pagina7");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        <ChevronLeft />
        <User />
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloquePersonal">
          <strong>Respecto al personal:</strong>
        </div>

        <div className="bloque">
          <p>
            El personal encargado del manejo del DEA dispone de entrenamiento y
            actualización de los conocimientos eigidos.<br></br>
            <br></br>
            Durante el horario de actividad se cuenta con un número plural de
            personas entrenadas para su uso.<br></br>
          </p>
        </div>

        <div className="bloque">
          <strong>FIRMAS</strong>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            placeholder="Firma"
            onChange={(e) => setdea_firma(e.target.value)}
          />
          <span className="text-red-500">{errordea_firma}</span>
        </div>

        <div className="bloque">
          <label>Ciudad o municipio:</label>
          <input
            type="text"
            className="element"
            placeholder=""
            onChange={(e) => setdea_ciudadpersonal(e.target.value)}
          />
          <span className="text-red-500">{errordea_ciudadpersonal}</span>
        </div>

        <div className="bloque">
          <label>Fecha:</label>
          <input
            type="date"
            className="element"
            placeholder=""
            onChange={(e) => setdea_fechapersonal(e.target.value)}
          />
          <span className="text-red-500">{errordea_fechapersonal}</span>
        </div>

        <div className="bloque">
          <label>Cargar imagen:</label>
          <p>Solo se permite formatos png, jpg, jpeg Tamaño maximo 2MB</p>
          <input type="file" className="element" placeholder="" />
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={handleSubmit}
          >
            Guardar
          </button>
          <Home />
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
