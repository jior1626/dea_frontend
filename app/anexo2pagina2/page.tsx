"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina2.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home } from "../components/iconos";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export default function Options() {
  const router = useRouter();
  const [REG_CIUDADMUNICIPIO, setREG_CIUDADMUNICIPIO] = useState("Medellín");
  const [REG_DEPARTAMENTO, setREG_DEPARTAMENTO] = useState("Antioquia");
  const [REG_TIPOINSTALACION, setREG_TIPOINSTALACION] = useState("");
  const [REG_TIPODECLARACION, setREG_TIPODECLARACION] = useState("");
  const [REG_TIPOESPACIO, setREG_TIPOESPACIO] = useState("");
  const [REG_OTRO, setREG_OTRO] = useState("");
  const [REG_NUMSERIE, setREG_NUMSERIE] = useState("");
  const [REG_MODELO, setREG_MODELO] = useState("");
  const [REG_MARCA, setREG_MARCA] = useState("");
  const [REG_IMPORTADORDISTRIBUIDOR, setREG_IMPORTADORDISTRIBUIDOR] =
    useState("");
  const [REG_DESCLUGARUBICACION, setREG_DESCLUGARUBICACION] = useState("");
  const [mes, setMes] = useState("");
  const [dia, setDia] = useState("");
  const [ano, setAno] = useState("");

  const [errorREG_CIUDADMUNICIPIO, setErrorREG_CIUDADMUNICIPIO] = useState("");
  const [errorREG_DEPARTAMENTO, setErrorREG_DEPARTAMENTO] = useState("");
  const [errorREG_TIPOINSTALACION, setErrorREG_TIPOINSTALACION] = useState("");
  const [errorREG_TIPODECLARACION, setErrorREG_TIPODECLARACION] = useState("");
  const [errorREG_TIPOESPACIO, setErrorREG_TIPOESPACIO] = useState("");
  const [errorREG_OTRO, setErrorREG_OTRO] = useState("");
  const [errorREG_NUMSERIE, setErrorREG_NUMSERIE] = useState("");
  const [errorREG_MODELO, setErrorREG_MODELO] = useState("");
  const [errorREG_MARCA, setErrorREG_MARCA] = useState("");
  const [errorREG_IMPORTADORDISTRIBUIDOR, setErrorREG_IMPORTADORDISTRIBUIDOR] =
    useState("");
  const [errorREG_DESCLUGARUBICACION, setErrorREG_DESCLUGARUBICACION] =
    useState("");
  const [fields, setFields] = useState([]);
  const [fields2, setFields2] = useState([]);

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag3 = () => {
    router.push("anexo2pagina3");
  };

  const [userLocation, setUserLocation] = useState(null);

  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    // Obtener los campos de la API al cargar el componente
    fetch("https://dea-crud.azurewebsites.net/apiTipoInstalacion.php")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar para excluir el campo 'id'
        const filteredFields = data.filter((field) => field !== "id");
        setFields(filteredFields);
        //console.log(JSON.stringify(data));
      })
      .catch((error) => {
        // Manejo de errores aquí
        console.error("Error al obtener los campos:", error);
      });
  }, []);
  useEffect(() => {
    // Obtener los campos de la API al cargar el componente
    fetch("https://dea-crud.azurewebsites.net/apiTipoDeclaracion.php")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar para excluir el campo 'id'
        const filteredFields2 = data.filter((field) => field !== "id");
        setFields2(filteredFields2);
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        // Manejo de errores aquí
        console.error("Error al obtener los campos:", error);
      });
  }, []);
  useEffect(() => {
    const getUserLocation = async () => {
      if ("geolocation" in navigator) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true, // Solicita una ubicación de alta precisión
              timeout: 5000, // Tiempo máximo en milisegundos para obtener la ubicación
              maximumAge: 0, // Define la edad máxima aceptable de una lectura de posición en caché
            });
          });

          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setUserLocation(`${latitude},${longitude}`);
          setMapCenter({ lat: latitude, lng: longitude });
        } catch (error) {
          console.error("Error al obtener las coordenadas GPS:", error);
        }
      } else {
        console.log(
          "La geolocalización no está disponible en este dispositivo."
        );
      }
    };

    // Forzar la actualización del estado mapCenter
    setMapCenter((prev) => ({ ...prev }));
    getUserLocation();
  }, []);

  const handleSubmit = async () => {
    const REG_DIRECCIONUBICACION = localStorage.getItem(
      "REG_DIRECCIONUBICACION"
    );
    const REG_CODIGOPOSTAL = localStorage.getItem("REG_CODIGOPOSTAL");
    const REG_NOMBREUBICACION = localStorage.getItem("REG_NOMBREUBICACION");
    const REG_NOMBRECOMPLETO = localStorage.getItem("REG_NOMBRECOMPLETO");
    const REG_DOCIDENTIFICACION = localStorage.getItem("REG_DOCIDENTIFICACION");
    const REG_CANTIDAD = localStorage.getItem("REG_CANTIDAD");
    const jwt = localStorage.getItem("jwt");

    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!REG_CIUDADMUNICIPIO || REG_CIUDADMUNICIPIO.length < 4) {
      setErrorREG_CIUDADMUNICIPIO(
        "El municipio debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_CIUDADMUNICIPIO("");
    }

    if (!REG_DEPARTAMENTO || REG_DEPARTAMENTO.length < 4) {
      setErrorREG_DEPARTAMENTO(
        "El departamento debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_DEPARTAMENTO("");
    }

    if (!REG_TIPOINSTALACION || REG_TIPOINSTALACION.length < 4) {
      setErrorREG_TIPOINSTALACION(
        "El tipo de instalación debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_TIPOINSTALACION("");
    }

    if (!REG_TIPODECLARACION || REG_TIPODECLARACION.length < 4) {
      setErrorREG_TIPODECLARACION(
        "El tipo de declaración debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_TIPODECLARACION("");
    }

    if (!REG_TIPOESPACIO || REG_TIPOESPACIO.length < 4) {
      setErrorREG_TIPOESPACIO(
        "El tipo de espacio debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_TIPOESPACIO("");
    }

    if (!REG_NUMSERIE || REG_NUMSERIE.length < 4) {
      setErrorREG_NUMSERIE(
        "El numero de serie debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_NUMSERIE("");
    }

    if (!REG_MODELO || REG_MODELO.length < 4) {
      setErrorREG_MODELO("El modelo debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_MODELO("");
    }

    if (!REG_MARCA || REG_MARCA.length < 4) {
      setErrorREG_MARCA("El marca debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_MARCA("");
    }

    if (!REG_IMPORTADORDISTRIBUIDOR || REG_IMPORTADORDISTRIBUIDOR.length < 4) {
      setErrorREG_IMPORTADORDISTRIBUIDOR(
        "El distribuidor debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_IMPORTADORDISTRIBUIDOR("");
    }

    if (!REG_DESCLUGARUBICACION || REG_DESCLUGARUBICACION.length < 4) {
      setErrorREG_DESCLUGARUBICACION(
        "La ubicación debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrorREG_DESCLUGARUBICACION("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    // Validar que todos los campos estén llenos
    if (
      !REG_CIUDADMUNICIPIO ||
      !REG_DEPARTAMENTO ||
      !REG_TIPOINSTALACION ||
      !REG_TIPODECLARACION ||
      !REG_TIPOESPACIO ||
      !REG_NUMSERIE ||
      !REG_MODELO ||
      !REG_MARCA ||
      !REG_IMPORTADORDISTRIBUIDOR ||
      !REG_DESCLUGARUBICACION ||
      !userLocation
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Construir el objeto de datos a enviar
    const data = {
      dea_ciudadmunicipio: REG_CIUDADMUNICIPIO,
      dea_departamento: REG_DEPARTAMENTO,
      dea_tipoinstalacion: REG_TIPOINSTALACION,
      dea_tipodeclaracion: REG_TIPODECLARACION,
      dea_tipoespacio: REG_TIPOESPACIO,
      dea_numserie: REG_NUMSERIE,
      dea_modelo: REG_MODELO,
      dea_marca: REG_MARCA,
      dea_importadordistribuidor: REG_IMPORTADORDISTRIBUIDOR,
      dea_desclugarubicacion: REG_DESCLUGARUBICACION,
      dea_codigopostal: REG_CODIGOPOSTAL,
      dea_nombreubicacion: REG_NOMBREUBICACION,
      dea_nombrecompleto: REG_NOMBRECOMPLETO,
      dea_docidentificacion: REG_DOCIDENTIFICACION,
      dea_cantidad: REG_CANTIDAD,
      dea_gps: userLocation,
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
          router.push("registroexitosoanexo2"); // Cambia a la URL a la que deseas redirigir
          alert("DEA Registrado");
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
        <div className="bloquetext">
          <strong>Tipo de espacio o lugar de alta afluencia de público</strong>
        </div>

        <div className="bloque">
          <textarea
            placeholder="De conformidad con el presente acto administrativo, indique el tipo de espacio o lugar de alta afluencia de personas."
            className="element"
            rows="5" // Ajusta este número según tus necesidades
            onChange={(e) => setREG_TIPOESPACIO(e.target.value)}
          ></textarea>
          <br></br>
          <span className="text-red-500">{errorREG_TIPOESPACIO}</span>

          <input
            type="text"
            className="element"
            placeholder="Otros"
            onChange={(e) => setREG_OTRO(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_TIPOESPACIO}</span>
        </div>
        <br></br>

        <div className="bloque">
          <h2 className="titulo-desfibrilador-ext">DESFIBRILADORES EXTERNOS</h2>
          <p>El/los desfibrilador(es) externo(s) para su uso a fecha</p>
        </div>

        <div className="bloque">
          <div className="fecha-container">
            <div className="fecha-columna">
              <select
                className="fecha-select"
                onChange={(e) => setDia(e.target.value)}
              >
                {/* Opciones para el día */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
            </div>

            <div className="fecha-columna">
              <select
                className="fecha-select"
                onChange={(e) => setMes(e.target.value)}
              >
                {/* Opciones para el mes */}
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                {/* ... y así sucesivamente */}
              </select>
            </div>

            <div className="fecha-columna">
              <select
                className="fecha-select"
                onChange={(e) => setAno(e.target.value)}
              >
                {/* Opciones para el año */}
                <option value="2023">2023</option>
                {/* ... y así sucesivamente */}
              </select>
            </div>
          </div>
          <p>son los que se refieren en la siguiente relación:</p>
        </div>
        <br></br>
        <div className="bloque">
          <div className="grid-container">
            <div className="grid-item">
              <input
                type="text"
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="No. de serie"
              />
            </div>
            <div className="grid-item">
              <input
                type="text"
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Modelo"
              />
            </div>
            <div className="grid-item">
              <input
                type="text"
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Marca"
              />
            </div>
            <div className="grid-item">
              <input
                type="text"
                className="element p-3 rounded-full shadow-sm border text-black"
                placeholder="Importador "
              />
            </div>
          </div>
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionAnexoPag3}
          >
            Siguiente
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
