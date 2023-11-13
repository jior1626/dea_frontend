"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina2.css";
import React, { useState, useEffect  } from "react";
import { useRouter } from "next/navigation";

export default function Options() {
  const router = useRouter();
  const [REG_CIUDADMUNICIPIO, setREG_CIUDADMUNICIPIO] = useState("");
  const [REG_DEPARTAMENTO, setREG_DEPARTAMENTO] = useState("");
  const [REG_TIPOINSTALACION, setREG_TIPOINSTALACION] = useState("");
  const [REG_TIPODECLARACION, setREG_TIPODECLARACION] = useState("");
  const [REG_TIPOESPACIO, setREG_TIPOESPACIO] = useState("");
  const [REG_NUMSERIE, setREG_NUMSERIE] = useState("");
  const [REG_MODELO, setREG_MODELO] = useState("");
  const [REG_MARCA, setREG_MARCA] = useState("");
  const [REG_IMPORTADORDISTRIBUIDOR, setREG_IMPORTADORDISTRIBUIDOR] =
    useState("");
  const [REG_DESCLUGARUBICACION, setREG_DESCLUGARUBICACION] = useState("");

  const [errorREG_CIUDADMUNICIPIO, setErrorREG_CIUDADMUNICIPIO] = useState("");
  const [errorREG_DEPARTAMENTO, setErrorREG_DEPARTAMENTO] = useState("");
  const [errorREG_TIPOINSTALACION, setErrorREG_TIPOINSTALACION] = useState("");
  const [errorREG_TIPODECLARACION, setErrorREG_TIPODECLARACION] = useState("");
  const [errorREG_TIPOESPACIO, setErrorREG_TIPOESPACIO] = useState("");
  const [errorREG_NUMSERIE, setErrorREG_NUMSERIE] = useState("");
  const [errorREG_MODELO, setErrorREG_MODELO] = useState("");
  const [errorREG_MARCA, setErrorREG_MARCA] = useState("");
  const [errorREG_IMPORTADORDISTRIBUIDOR, setErrorREG_IMPORTADORDISTRIBUIDOR] = useState("");
  const [errorREG_DESCLUGARUBICACION, setErrorREG_DESCLUGARUBICACION] = useState("");

  const [userLocation, setUserLocation] = useState(null);

  const [isGeolocationGranted, setIsGeolocationGranted] = useState(false);
  

  useEffect(() => {
    // Función asincrónica para obtener la ubicación del usuario
    const getUserLocation = async () => {
      if ("geolocation" in navigator) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
           const latitude = position.coords.latitude;
           const longitude = position.coords.longitude;
           setUserLocation(`${latitude},${longitude}`);
        } catch (error) {
          console.error("Error al obtener las coordenadas GPS:", error);
          setIsGeolocationGranted(isGeolocationGranted);
        }
      } else {
        console.log("La geolocalización no está disponible en este dispositivo.");
      }
    };

    getUserLocation(); // Llamar a la función para obtener la ubicación cuando el componente se monte.
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez después del montaje.

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
      setErrorREG_CIUDADMUNICIPIO("El municipio debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_CIUDADMUNICIPIO("");
    }
  
    if (!REG_DEPARTAMENTO || REG_DEPARTAMENTO.length < 4) {
      setErrorREG_DEPARTAMENTO("El departamento debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_DEPARTAMENTO("");
    }

    if (!REG_TIPOINSTALACION || REG_TIPOINSTALACION.length < 4) {
      setErrorREG_TIPOINSTALACION("El tipo de instalación debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_TIPOINSTALACION("");
    }

    if (!REG_TIPODECLARACION || REG_TIPODECLARACION.length < 4) {
      setErrorREG_TIPODECLARACION("El tipo de declaración debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_TIPODECLARACION("");
    }

    if (!REG_TIPOESPACIO || REG_TIPOESPACIO.length < 4) {
      setErrorREG_TIPOESPACIO("El tipo de espacio debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_TIPOESPACIO("");
    }

    if (!REG_NUMSERIE || REG_NUMSERIE.length < 4) {
      setErrorREG_NUMSERIE("El numero de serie debe tener al menos 4 caracteres");
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
      setErrorREG_IMPORTADORDISTRIBUIDOR("El distribuidor debe tener al menos 4 caracteres");
      hasError = true;
    } else {
      setErrorREG_IMPORTADORDISTRIBUIDOR("");
    }

    if (!REG_DESCLUGARUBICACION || REG_DESCLUGARUBICACION.length < 4) {
      setErrorREG_DESCLUGARUBICACION("La ubicación debe tener al menos 4 caracteres");
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
      data: {
      REG_CIUDADMUNICIPIO,
      REG_DEPARTAMENTO,
      REG_TIPOINSTALACION,
      REG_TIPODECLARACION,
      REG_TIPOESPACIO,
      REG_NUMSERIE,
      REG_MODELO,
      REG_MARCA,
      REG_IMPORTADORDISTRIBUIDOR,
      REG_DESCLUGARUBICACION,
      REG_CODIGOPOSTAL,
      REG_NOMBREUBICACION,
      REG_NOMBRECOMPLETO,
      REG_DOCIDENTIFICACION,
      REG_CANTIDAD,
      REG_GPS:userLocation
    }
    };

    // Realizar la solicitud POST
    try {
      const jsonBody = JSON.stringify(data);
      const response = await fetch(
        "https://nodosalud1.com/api/tbl-registrodeas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Agregar el token JWT al encabezado
          },
          body: JSON.stringify(data),
        }
      );
      //alert(JSON.stringify(data))
      if (response.ok) {
        // La solicitud se completó con éxito
        // Puedes redirigir a otra página o realizar otras acciones aquí
        router.push("registroexitosoanexo2"); // Cambia '/otra-pagina' a la URL a la que deseas redirigir
        alert("DEA Registrado");
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
      <Header></Header>

      <div className="min-h-[700px] flex items-center justify-center mt-5">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
          <div className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo2">
            <h6 className="font-bold text-sm tituloanexo text-black">
              DESFIBRILADORES EXTERNOS
            </h6>
            <br></br>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Municipio"
              onChange={(e) => setREG_CIUDADMUNICIPIO(e.target.value)}
            />
            <br></br>
             <span className="text-red-500">{errorREG_CIUDADMUNICIPIO}</span>
            <br></br>
            <br></br>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Departamento"
              onChange={(e) => setREG_DEPARTAMENTO(e.target.value)}
            />
            <br></br>
             <span className="text-red-500">{errorREG_DEPARTAMENTO}</span>

            <br></br>
            <br></br>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Tipo de instalacion"
              onChange={(e) => setREG_TIPOINSTALACION(e.target.value)}
            />
            <br></br>
             <span className="text-red-500">{errorREG_TIPOINSTALACION}</span>

            <br></br>
            <br></br>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Tipo de declaracion"
              onChange={(e) => setREG_TIPODECLARACION(e.target.value)}
            />
            <br></br>
             <span className="text-red-500">{errorREG_TIPODECLARACION}</span>

            <br></br>
            <br></br>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Tipo de espacio"
              onChange={(e) => setREG_TIPOESPACIO(e.target.value)}
            />
            <br></br>
             <span className="text-red-500">{errorREG_TIPOESPACIO}</span>

            <br></br>
            <br></br>

            <div className="grid grid-cols-2 gap-4">
              {/* Fila 1 */}
              <input
                type="number"
                className="p-3 rounded-full shadow-sm border text-black"
                placeholder="No. de serie"
                onChange={(e) => setREG_NUMSERIE(e.target.value)}
              />
              <input
                type="text"
                className="p-3 rounded-full shadow-sm border text-black"
                placeholder="Modelo"
                onChange={(e) => setREG_MODELO(e.target.value)}
              />

              {/* Fila 2 */}
              <input
                type="text"
                className="p-3 rounded-full shadow-sm border text-black"
                placeholder="Marca"
                onChange={(e) => setREG_MARCA(e.target.value)}
              />
              <input
                type="text"
                className="p-3 rounded-full shadow-sm border text-black"
                placeholder="Importador Autorizado"
                onChange={(e) => setREG_IMPORTADORDISTRIBUIDOR(e.target.value)}
              />
            </div>
            <br></br>
             <span className="text-red-500">{errorREG_NUMSERIE}</span>
             <span className="text-red-500">{errorREG_MODELO}</span>
             <span className="text-red-500">{errorREG_MARCA}</span>
             <span className="text-red-500">{errorREG_IMPORTADORDISTRIBUIDOR}</span>
            <br></br>
            <br></br>

            <p className="font-bold text-sm text-black">
              Descripción del lugar donde está ubicado:
            </p>

            <input
              type="text"
              className="p-3 rounded-full shadow-sm border text-black"
              placeholder="Descripcion lugar"
              onChange={(e) => setREG_DESCLUGARUBICACION(e.target.value)}
            />
            <br></br>
            <span className="text-red-500">{errorREG_DESCLUGARUBICACION}</span>
            <p className="font-bold text-sm text-black">
              Coordenadas de geolocalización (GPS)
            </p>

    <button
    className="mt-4 w-full bg-custom-azul text-white py-3 rounded-full shadow-lg"
    onClick={handleSubmit}
  >
    Siguiente 
  </button>

          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}