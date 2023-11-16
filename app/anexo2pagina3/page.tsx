"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina3.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home } from "../components/iconos";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px",
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

  const navigateToSectionAnexoPag4 = () => {
    router.push("anexo2pagina4");
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        <ChevronLeft />
        <User />
      </div>
      <br></br>
      <div className="contenedor">
        <div className="bloquetextLugar">
          <strong>Descripción del lugar donde está ubicado:</strong>
        </div>

        <div className="bloque">
          <input
            type="text"
            className="element"
            placeholder="Desripción"
            onChange={(e) => setREG_OTRO(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errorREG_TIPOESPACIO}</span>
        </div>

        <div className="bloque">
          <strong>Coordenadas de geolocalización (GPS)</strong>
        </div>

        <div className="bloque">
          <LoadScript googleMapsApiKey="AIzaSyBBCGA-En7tf3H-HSh--XEOxEZWI64rBxo">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={10}
            >
              {userLocation && <Marker position={mapCenter} />}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionAnexoPag4}
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
