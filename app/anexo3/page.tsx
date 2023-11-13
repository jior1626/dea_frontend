"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Anexo3() {
  const router = useRouter();

  const horaActual = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [uso_fechaevento, setUso_fechaevento] = useState("");
  const [uso_nombrelugarevento, setUso_nombrelugarevento] = useState("");
  const [uso_personaatendidaeventonombre, setUso_personaatendidaeventonombre] =
    useState("");
  const [
    uso_personaatendidaeventotipodocumento,
    setUso_personaatendidaeventotipodocumento,
  ] = useState("");
  const [
    uso_personaatendidaeventonumerodocumento,
    setUso_personaatendidaeventonumerodocumento,
  ] = useState("");
  const [uso_personaatendidaeventoedad, setUso_personaatendidaeventoedad] =
    useState("");
  const [uso_personaatendidaeventosexo, setUso_personaatendidaeventosexo] =
    useState("");
  const [
    uso_personaatendidaeventoaseguradorsalud,
    setUso_personaatendidaeventoaseguradorsalud,
  ] = useState("");
  const [
    uso_datoseventonombrepersonautilizodea,
    setUso_datoseventonombrepersonautilizodea,
  ] = useState("");
  const [uso_datoseventotipodocumento, setUso_datoseventotipodocumento] =
    useState("");
  const [uso_datoseventonumerodocumento, setUso_datoseventonumerodocumento] =
    useState("");
  const [uso_datoseventotelefono, setUso_datoseventotelefono] = useState("");
  const [uso_datoseventohorainicioevento, setUso_datoseventohorainicioevento] =
    useState(""+horaActual);
  const [
    uso_datoseventohoraactivacioncadenasupervivencia,
    setUso_datoseventohoraactivacioncadenasupervivencia,
  ] = useState(""+horaActual);
  const [
    uso_datoseventohorautilizaciondea,
    setUso_datoseventohorautilizaciondea,
  ] = useState(""+horaActual);
  const [
    uso_datoseventohoratrasladopersonaatendida,
    setUso_datoseventohoratrasladopersonaatendida,
  ] = useState(""+horaActual);
  const [
    uso_datosmediotransportenombreencargado,
    setUso_datosmediotransportenombreencargado,
  ] = useState("");
  const [
    uso_datosmediotransportemediotransporte,
    setUso_datosmediotransportemediotransporte,
  ] = useState("");
  const [
    uso_datosmediotransporteempresaambulancia,
    setUso_datosmediotransporteempresaambulancia,
  ] = useState("");
  const [
    uso_datosmediotransporteobservaciones,
    setUso_datosmediotransporteobservaciones,
  ] = useState("");

  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");
    const data = {
      data: {
        USO_FECHAEVENTO: uso_fechaevento,
        USO_NOMBRELUGAREVENTO: uso_nombrelugarevento,
        USO_PERSONAATENDIDAEVENTONOMBRE: uso_personaatendidaeventonombre,
        USO_PERSONAATENDIDAEVENTOTIPODOCUMENTO:
          uso_personaatendidaeventotipodocumento,
        USO_PERSONAATENDIDAEVENTONUMERODOCUMENTO:
          uso_personaatendidaeventonumerodocumento,
        USO_PERSONAATENDIDAEVENTOEDAD: uso_personaatendidaeventoedad,
        USO_PERSONAATENDIDAEVENTOSEXO: uso_personaatendidaeventosexo,
        USO_PERSONAATENDIDAEVENTOASEGURADORSALUD:
          uso_personaatendidaeventoaseguradorsalud,
        USO_DATOSEVENTONOMBREPERSONAUTILIZODEA:
          uso_datoseventonombrepersonautilizodea,
        USO_DATOSEVENTOTIPODOCUMENTO: uso_datoseventotipodocumento,
        USO_DATOSEVENTONUMERODOCUMENTO: uso_datoseventonumerodocumento,
        USO_DATOSEVENTOTELEFONO: uso_datoseventotelefono,
        USO_DATOSEVENTOHORAINICIOEVENTO: uso_datoseventohorainicioevento,
        USO_DATOSEVENTOHORAACTIVACIONCADENASUPERVIVENCIA:
          uso_datoseventohoraactivacioncadenasupervivencia,
        USO_DATOSEVENTOHORAUTILIZACIONDEA: uso_datoseventohorautilizaciondea,
        USO_DATOSEVENTOHORATRASLADOPERSONAATENDIDA:
          uso_datoseventohoratrasladopersonaatendida,
        USO_DATOSMEDIOTRANSPORTENOMBREENCARGADO:
          uso_datosmediotransportenombreencargado,
        USO_DATOSMEDIOTRANSPORTEMEDIOTRANSPORTE:
          uso_datosmediotransportemediotransporte,
        USO_DATOSMEDIOTRANSPORTEEMPRESAAMBULANCIA:
          uso_datosmediotransporteempresaambulancia,
        USO_DATOSMEDIOTRANSPORTEOBSERVACIONES:
          uso_datosmediotransporteobservaciones,
      },
    };

    try {
      const response = await fetch("https://nodosalud1.com/api/tbl-usodeas", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Datos enviados con éxito.");
      router.push("anexo3finalizo");
    } catch (error) {
      alert("Error al enviar datos.");
      console.error("Error enviando datos:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-16">
      <Header></Header>

      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mt-6">
        <div className="mb-4">
          <p className="text-center text-gray-600 mt-2 font-bold text-black">
            Formulario de reporte uso de Desfibrilador Externo Automático - DEA
            en ambiente extrahospitalario
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-600 text-black"
          >
            Fecha del evento (dd/mm/yy)
          </label>
          <input
            type="date"
            id="fecha"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_fechaevento(e.target.value)}
            max={new Date().toISOString().split("T")[0]} // Establecer la fecha máxima como la fecha actual
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lugar"
            className="block text-sm font-medium text-gray-600 text-black"
          >
            Nombre del lugar del evento
          </label>
          <input
            type="text"
            id="lugar"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_nombrelugarevento(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <p className="block text-sm text-gray-600 font-bold text-black">
            Datos de la persona atendida en el evento:
          </p>
          <label
            htmlFor="nombre"
            className="block mt-2 text-sm font-medium text-gray-600 text-black"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_personaatendidaeventonombre(e.target.value)}
          />
          <label
            htmlFor="numeroidentificacion"
            className="block mt-2 text-sm font-medium text-gray-600 text-black"
          >
            Tipo de documento de identificación:
          </label>
          {/* <input
            type="text"
            id="numeroidentificacion"
            className="mt-1 p-2 w-full border rounded"
            onChange={(e) => setUso_personaatendidaeventotipodocumento(e.target.value)}
          /> */}
          <select
            id="numeroidentificacion"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) =>
              setUso_personaatendidaeventotipodocumento(e.target.value)
            }
          >
            <option value="Cedula">Cedula</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          <label
            htmlFor="numeroidentificacion"
            className="block mt-2 text-sm font-medium text-gray-600 text-black"
          >
            Número de documento de identificación:
          </label>
          <input
            type="text"
            id="documentoidentificacion"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) =>
              setUso_personaatendidaeventonumerodocumento(e.target.value)
            }
          />
          <label
            htmlFor="numeroidentificacion text-black"
            className="block mt-2 text-sm font-medium text-gray-600"
          >
            Edad:
          </label>
          <input
            type="number"
            id="edad"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_personaatendidaeventoedad(e.target.value)}
          />
          <label
            htmlFor="numeroidentificacion text-black"
            className="block mt-2 text-sm font-medium text-gray-600"
          >
            Telefono:
          </label>
          <input
            type="number"
            id="edad"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setUso_datoseventotelefono(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-600 text-black">
            Sexo:
          </span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="sexo"
                value="Hombre"
                className="text-blue-600 form-radio text-black"
                onChange={(e) =>
                  setUso_personaatendidaeventosexo(e.target.value)
                }
              />
              <span className="ml-2 text-black">Hombre</span>
            </label>
            <label className="ml-6 inline-flex items-center">
              <input
                type="radio"
                name="sexo"
                value="Mujer"
                className="text-blue-600 form-radio text-black"
                onChange={(e) =>
                  setUso_personaatendidaeventosexo(e.target.value)
                }
              />
              <span className="ml-2 text-black">Mujer</span>
            </label>
          </div>
        </div>

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Asegurador en Salud:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_personaatendidaeventoaseguradorsalud(e.target.value)
          }
        />

        <div className="mb-4">
          <p className="text-center text-gray-600 mt-2 font-bold text-black">
            Datos del evento en donde se utilizó el Desfibrllador Externo
            Automático - DEA
          </p>
        </div>

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Nombre de la persona que utilizó el DEA:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_datoseventonombrepersonautilizodea(e.target.value)
          }
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Tipo de documento de identificación:
        </label>
        {/* <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded"
          onChange={(e) => setUso_datoseventotipodocumento(e.target.value)}
        /> */}
        <select
          id="numeroidentificacion"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) => setUso_datoseventotipodocumento(e.target.value)}
        >
          <option value="Cedula">Cedula</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Número de documento de identificación:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) => setUso_datoseventonumerodocumento(e.target.value)}
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Hora de inicio del evento:
        </label>
        <input
          type="time"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          value={uso_datoseventohorainicioevento} // Asegúrate de establecer el valor del input
          onChange={(e) => {
            const horaSeleccionada = e.target.value;

            if (horaSeleccionada < horaActual) {
              // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
              setUso_datoseventohorainicioevento(horaSeleccionada);
            } else {
              // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
              // Puedes mostrar un mensaje de error o realizar otra acción aquí
              alert("Debes seleccionar una hora anterior a la hora actual.");
            }
          }}
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Hora de activación de la cadena de supervivencia:
        </label>
        <input
          type="time"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          value={uso_datoseventohoraactivacioncadenasupervivencia} // Asegúrate de establecer el valor del input
          onChange={(e) => {
            const horaSeleccionada = e.target.value;

            if (horaSeleccionada < horaActual) {
              // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
              setUso_datoseventohoraactivacioncadenasupervivencia(
                horaSeleccionada
              );
            } else {
              // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
              // Puedes mostrar un mensaje de error o realizar otra acción aquí
              alert("Debes seleccionar una hora anterior a la hora actual.");
            }
          }}
          max="23:59" // Establecer la hora máxima como 23:59
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Hora de utilización del DEA:
        </label>
        <input
          type="time"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          value={uso_datoseventohorautilizaciondea} // Asegúrate de establecer el valor del input
          onChange={(e) => {
            const horaSeleccionada = e.target.value;

            if (horaSeleccionada < horaActual) {
              // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
              setUso_datoseventohorautilizaciondea(horaSeleccionada);
            } else {
              // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
              // Puedes mostrar un mensaje de error o realizar otra acción aquí
              alert("Debes seleccionar una hora anterior a la hora actual.");
            }
          }}
          max="23:59" // Establecer la hora máxima como 23:59
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Hora de traslado persona atendida a la institución de salud:
        </label>
        <input
          type="time"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          value={uso_datoseventohoratrasladopersonaatendida} // Asegúrate de establecer el valor del input
          onChange={(e) => {
            const horaSeleccionada = e.target.value;

            if (horaSeleccionada < horaActual) {
              // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
              setUso_datoseventohoratrasladopersonaatendida(horaSeleccionada);
            } else {
              // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
              // Puedes mostrar un mensaje de error o realizar otra acción aquí
              alert("Debes seleccionar una hora anterior a la hora actual.");
            }
          }}
          max="23:59" // Establecer la hora máxima como "23:59"
        />

        <div className="mb-4">
          <p className="text-center text-gray-600 mt-2 font-bold text-black">
            Datos del medio de transporte en el cual es trasladada la persona
            atendida a la Institución de salud
          </p>
        </div>

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Nombre de la persona encargada del traslado:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_datosmediotransportenombreencargado(e.target.value)
          }
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Medio de transporte utilizado para el traslado:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_datosmediotransportemediotransporte(e.target.value)
          }
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Nombre de la empresa de la ambulancia:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_datosmediotransporteempresaambulancia(e.target.value)
          }
        />

        <label
          htmlFor="numeroidentificacion"
          className="block mt-2 text-sm font-medium text-gray-600 text-black"
        >
          Observaciones:
        </label>
        <input
          type="text"
          id="edad"
          className="mt-1 p-2 w-full border rounded text-black"
          onChange={(e) =>
            setUso_datosmediotransporteobservaciones(e.target.value)
          }
        />

        <button
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>

      <Footer></Footer>
    </main>
  );
}
