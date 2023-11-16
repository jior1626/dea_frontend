"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3pagina4.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronLeft, Home, CirclePlus } from "../components/iconos";

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

  const navigateToSectionAnexoPag7 = () => {
    router.push("anexo3");
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
        <div className="bloque">
          <p>
            <strong>
              INSTRUCCIONES PARA DILIGENCIAR EL ANEXO TÉCNICO No. 3
            </strong>
            <br></br>
            <br></br>
            1. Fecha del evento: Escriba la fecha en la cual sucedió el evento
            donde se utilizó el DEA.
            <br></br>
            2. Nombre del lugar del evento: Escriba el nombre del lugar con alta
            afluencia de público donde sucedió el evento.<br></br>
            <br></br>
            <strong>Datos de la persona atendida en el evento</strong>
            <br></br>
            <br></br>
            3. Nombre completo: Escriba el nombre completo de la persona
            atendida con el uso del DEA;<br></br>
            4. Tipo de documento de identificación: Escriba el tipo de documento
            de identificación de la persona atendida con el uso del DEA;
            <br></br>
            5. Número de documento de identificación: Escriba el número de
            documento de identificación de la persona atendida con el uso del
            DEA;
            <br></br>
            6. Edad: Escriba la edad en años de la persona atendida con el uso
            del DEA;
            <br></br>
            7. Sexo: Marque con una X el sexo de la persona atendida con el uso
            del DEA;<br></br>
            8. Asegurador en Salud: Escriba el nombre de la aseguradora en salud
            a la cual se encuentra afiliada la persona atendida con el uso del
            DEA (entidades promotoras de salud, las entidades que administren
            planes voluntarios de salud, las entidades adaptadas de salud, las
            administradoras de riesgos profesionales en sus actividades de
            salud).<br></br> <br></br>
            <strong>
              Datos del evento en donde se utilizó el Desfibrilador Externo
              Automático - DEA
            </strong>{" "}
            <br></br>
            <br></br>9. Nombre de la persona que utilizó el DEA: Escriba el
            nombre completo de la persona que utilizó el DEA para realizar la
            descarga; <br></br>
            10. Tipo de documento de identificación: Escriba el número
            del documento de identificación de la persona que utilizó el DEA
            para realizar la descarga;<br></br>
            11. Número de documento de identificación: Escriba el número de
            documento de identificación de la persona que utilizó el DEA para
            realizar la descarga;<br></br>
            12. Hora de inicio del evento: Escriba en números la hora en la cual
            se inició el eento en el cual se utilizó el DEA;<br></br>
            13. Hora de activación de la cadena de supervivencia: Escriba en
            números la hora en la cual se activó la cadena de supervivencia del
            evento en el cual se utilizó el DEA;<br></br>
            14. Hora de utilización del DEA: Escriba en números la hora en la cual se utilizó el DEA; y <br></br>
            15. Hora de traslado de la persona atendida a la institución de
            salud: Escriba en números la hora a la cual se realizó el traslado
            de la persona atendida a la institución de salud. En caso de
            fallecimiento de la persona en el lugar del evento, escriba N/A.
            <br></br>
            <br></br>
            <strong>
              Datos del medio de transporte en el cual es trasladada la persona
              atendida a la institución de salud
            </strong>
            <br></br>
            <br></br>
            En caso de fallecimiento de la persona en el lugar del evento, no
            debe diligenciar las variables 17, 18 y 19.
            <br></br><br></br>
            16. Nombre de la persona ecargada del traslado: Escriba el nombre completo de la persona responsable de realizar el traslado a la institución de salud establecida en la ruta;
            <br></br>
            17. Medio de transporte utilizado para el traslado: Marque con una (X) el medio de transporte en el que se realizó el traslado a la institución de salud establecida en la ruta. Si la opción seleccionada es “Otro”, debe escribir cuál fue el medio de transporte utilizado;<br></br>
            18. Nombre de la empresa de la ambulancia: escriba el nombre de la empresa a la cual pertenece la ambulancia que realizó el traslado; y.<br></br>
            19. Observaciones: Escriba las observaciones que estime pertinentes, diferentes a los datos reportados en las variables anteriores.
          </p>
        </div>

        <div className="contenedorCasita">
          <button
            className="btn-sesenta mt-4 bg-custom-azul text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionAnexoPag7}
          >
            Cerrar
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
