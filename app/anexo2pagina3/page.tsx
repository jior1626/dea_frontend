"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina3.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, HomeOut } from "../components/iconos";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px",
};

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexoPag4 = () => {
    router.push("anexo2pagina4");
  };

  const [dea_desclugarubicacion, setdea_desclugarubicacion] = useState("");

  const [errordea_desclugarubicacion, setErrordea_desclugarubicacion] =
    useState("");

  const [userLocation, setUserLocation] = useState(null);

  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });

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
    localStorage.setItem("dea_desclugarubicacion", dea_desclugarubicacion);
    localStorage.setItem("dea_gps", "" + userLocation);
    // Validar que todos los campos estén llenos
    let hasError = false;

    if (!dea_desclugarubicacion || dea_desclugarubicacion.length < 4) {
      setErrordea_desclugarubicacion(
        "El tipo de espacio debe tener al menos 4 caracteres"
      );
      hasError = true;
    } else {
      setErrordea_desclugarubicacion("");
    }

    if (hasError) {
      return; // Si hay errores, no continúes con el envío del formulario
    }

    router.push("anexo2pagina4");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="iconos">
        <a href="anexo2pagina2">
          <ChevronLeft />
        </a>
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
            placeholder="Descripción"
            onChange={(e) => setdea_desclugarubicacion(e.target.value)}
          />
          <br></br>
          <span className="text-red-500">{errordea_desclugarubicacion}</span>
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
            onClick={handleSubmit}
          >
            Siguiente
          </button>
          <HomeOut />
        </div>

        <br></br>
        <br></br>
      </div>

      <Footer></Footer>
    </main>
  );
}
