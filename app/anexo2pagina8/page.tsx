"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina8.css";
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
    router.push("anexo2");
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
            <strong>INSTRUCCIONES PARA DILIGENCIAR EL ANEXO TÉCNICO No. 2</strong><br></br><br></br>
            <strong>Responsable del lugar con alta afluencia del público</strong><br></br>
            1. Nombre completo: Escriba el nombre completo del responsable del
            lugar con alta afluencia del público que registra el/los DEA.
            <br></br>
            2. Documento de identificación: Escriba el número del documento de
            identificación del responsable del lugar con alta afluencia del
            público que registra el/los DEA.<br></br>
            Datos del lugar con alta afluencia del público.<br></br>
            3. Nombre: Escriba el nombre del lugar con alta afluencia de público
            que registra la instalación de el/los DEA.<br></br>
            4. Dirección: Escriba la dirección completa del lugar con alta afluencia de
            público que registra la instalación de(l)/los DEA.<br></br>
            5. Código postal: Escriba el código postal del IlJgar con alta
            afluencia de público que registra la instalación de(l)/los DEA.
            <br></br>
            6. Ciudad o municipio: Escriba el municipio donde está ubicado el
            lugar con alta afluencia de público que registra la instalación
            de(l)/los DEA.<br></br>
            7. Departamento: Escriba el departamento donde está ubicado el lugar
            con alta afluencia de público que registra la instalación de(l)/los
            DEA.<br></br> <br></br>
            <strong>Declaración</strong> <br></br><br></br>8. Señale con una (X) la opción que corresponda:
            <br></br>
            a. Instalación: se trata de la instalación permanente o es temporal
            de(l)/los DEA.<br></br>
            b. Cambio de titular: esta declaración, se trata de un cambio del
            titular de(l)/los DEA.<br></br>
            c. Retirada: esta declaración, se trata de la retirada de(l)/los
            DEA.<br></br>
            d. Modificación de la ubicación: esta declaración, se trata de la
            modificación de la ubicación de(l)/los DEA.<br></br>
            e. Otros; señale si esta declaración se trata de otro tipo.<br></br><br></br>
            <strong>Tipo de instalación</strong><br></br><br></br>
            Señale con una (X) la opción que corresponda:<br></br>
            a. Obligatoria: si la instalación de(l)/los DEA es obligatoria.
            <br></br>
            b. Voluntaria: si la instalación de(l)/los DEA corresponde a
            espacios no obligados a la dotación de estos.<br></br>
            Tipo de espacio o lugar de alta afluencia de público<br></br>
            Tipo de espacio: De conformidad con el presente acto administrativo
            indique el tipo de espacio o lugar con alta afluencia de personas.
            <br></br><br></br>
            <strong>Desfibriladores Externos Automáticos (Estos datos se deben
            diligenciar por cada uno de los DEA que registra)</strong><br></br><br></br>
            11. Fecha: día, mes, año de instalación y puesta en funcionamiento del
            DEA.<br></br>
            12. No. de serie: Escriba el número de serie del DEA.<br></br>
            13. Modelo: Escriba el modelo del DEA.<br></br>
            14. Marca: Escriba la marca del DEA.<br></br>
            15. Distribuidor autorizado o fabricante: Escriba el distribuidor o
            fabricante del DEA.<br></br>
            16. Descripción del lugar donde está ubicado: Escriba el nombre del
            sitio donde está ubicado el DEA.<br></br>
            17. Coordenadas de geolocalización: Escriba las coordenadas de
            geolocalización (GPS) del espacio o sitio donde están ubicados los
            DEA.<br></br><br></br>
            <strong>Personal certificado en el uso del DEA.</strong> Se debe diligenciar por cada
            una de las personas capacitadas y certificadas en DEA.<br></br>
            18. Documento de identidad: Escriba el número del documento de identidad
            de la persona que cuenta con el entrenamiento y está certificado
            para la utilización del DEA.<br></br>
            19. Nombres y apellidos: Escriba los nombres y apellidos completos de la
            persona que cuenta con el entrenamiento y está certificado para la
            utilización de(l)/los DEA.<br></br>
            20. Entidad que certifica la capacitación en DEA. Escriba el nombre de
            la entidad que certifica la capacitación en DEA. <br></br>
            21. Fecha de certificación: Escriba la fecha de certificación de la última
            capacitación en DEA.<br></br>
            22. Señale con una (X) en todos y cada uno de los siguientes ítems, la
            declaratoria de(l)/los DEA.<br></br><br></br>
            
            <strong>Respecto al personal:</strong><br></br><br></br>
            23. Señale con una (X) en todos y cada uno de los siguientes ítems, la
            declaratoria respecto al personal entrenado y certificado en DEA.
            <br></br><br></br>
            a. El personal encargado del manejo del DEA dispone de entrenamiento
            y actualización de los conocimientos exigidos; y, b. Durante el
            horario de actividad se cuenta con un número plural de personas
            entrenadas para su uso.<br></br><br></br>
            <strong>Firmas:</strong><br></br> <br></br>
            24. Municipio: Escriba el nombre del municipio donde está ubicado el
            lugar con alta afluencia de público que hace la declaración
            de(l)/los DEA;<br></br>
            25. Fecha: día, mes, año en que se llevó a cabo la declaratoria
            de(l)/los DEA; y<br></br>
            26. Firma del responsable del lugar con alta afluencia de público que
            hace la declaratoria de(l)/los DEA.<br></br>
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
