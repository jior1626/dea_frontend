"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3pagina2.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";

export default function Options() {
  const router = useRouter();

  const navigateToSectionOptions = () => {
    router.push("options");
  };

  const navigateToSectionAnexo3Pagina3 = () => {
    router.push("anexo3pagina3");
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

  const horaActual = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [uso_datoseventonombrepersonautilizodea, setuso_datoseventonombrepersonautilizodea] = useState("");
  const [uso_datoseventotipodocumento, setuso_datoseventotipodocumento] = useState("");
  const [uso_datoseventonumerodocumento, setuso_datoseventonumerodocumento] = useState("");
  const [uso_datoseventohorainicioevento, setuso_datoseventohorainicioevento] = useState("" + horaActual);
  const [uso_datoseventohoraactivacioncadenasupervivencia, setuso_datoseventohoraactivacioncadenasupervivencia] = useState("" + horaActual);
  const [uso_datoseventohorautilizaciondea, setuso_datoseventohorautilizaciondea] = useState("" + horaActual);
  const [uso_datoseventohoratrasladopersonaatendida, setuso_datoseventohoratrasladopersonaatendida] = useState("" + horaActual);
  const [uso_datosmediotransportenombreencargado, setuso_datosmediotransportenombreencargado] = useState("");

  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (uso_datoseventonombrepersonautilizodea.length < 6 )
      newErrors.push("El nombre completo debe contener al menos 6 caracteres.");
    if (
      !uso_datoseventotipodocumento.trim()
    ) {
      newErrors.push("Selecciona el tipo de documento.");
    }
    if (uso_datoseventonumerodocumento.length < 8) {
      newErrors.push("Debe contener al menos 8 digitos.");
    }
    if (uso_datosmediotransportenombreencargado.length < 8 ) {
      newErrors.push("El nombre debe contener al menos 8 caracteres.");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("uso_datoseventonombrepersonautilizodea", uso_datoseventonombrepersonautilizodea);
      localStorage.setItem("uso_datoseventotipodocumento", uso_datoseventotipodocumento);
      localStorage.setItem("uso_datoseventonumerodocumento", uso_datoseventonumerodocumento);
      localStorage.setItem("uso_datoseventohorainicioevento", uso_datoseventohorainicioevento);
      localStorage.setItem("uso_datoseventohoraactivacioncadenasupervivencia", uso_datoseventohoraactivacioncadenasupervivencia);
      localStorage.setItem("uso_datoseventohorautilizaciondea", uso_datoseventohorautilizaciondea);
      localStorage.setItem("uso_datoseventohoratrasladopersonaatendida", uso_datoseventohoratrasladopersonaatendida);
      localStorage.setItem("uso_datosmediotransportenombreencargado", uso_datosmediotransportenombreencargado);

      router.push("/anexo3pagina3"); // Asegúrate de que esta ruta es la correcta
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
      <br></br>
      <div className="contenedor">
        <div className="bloque1">
          <h6>
            Datos del evento en donde se utilizó el Desfibrilador Externo
            Automático - DEA
          </h6>
        </div>

        <div className="bloque">
          <input
            type="text"
            id="edad"
            placeholder="Nombre de la persona que utilizó el DEA"
            className="inputForm"
            onKeyDown={handleKeyDown2}
            onChange={(e) =>
              setuso_datoseventonombrepersonautilizodea(e.target.value)
            }
          />
          {errores.includes("El nombre completo debe contener al menos 6 caracteres.") && (
            <p className="text-red-500">El nombre completo debe contener al menos 6 caracteres.</p>
          )}
        </div>

        <div className="bloque">
          <select
            id="numeroidentificacion"
            className="inputForm"
            onChange={(e) => setuso_datoseventotipodocumento(e.target.value)}
          >
            <option value="Cedula">Tipo de doc. de identificación</option>
            <option value="Cedula">Cedula</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          {errores.includes("Selecciona el tipo de documento.") && (
            <p className="text-red-500">Selecciona el tipo de documento.</p>
          )}
        </div>

        <div className="bloque">
          <input
            type="number"
            id="edad"
            placeholder="Número de doc. de identifición"
            className="inputForm"
            onKeyDown={handleKeyDown}
            onChange={(e) => setuso_datoseventonumerodocumento(e.target.value)}
          />
          {errores.includes("Debe contener al menos 8 digitos.") && (
            <p className="text-red-500">Debe contener al menos 8 digitos.</p>
          )}
        </div>
<br></br>
        <div className="fila-container">
          <div className="columna">Hora de inicio del evento:</div>
          <div className="columna">
            <input
              type="time"
              id="edad"
              className="columna1"
              value={uso_datoseventohorainicioevento} // Asegúrate de establecer el valor del input
              onChange={(e) => {
                const horaSeleccionada = e.target.value;

                if (horaSeleccionada < horaActual) {
                  // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
                  setuso_datoseventohorainicioevento(horaSeleccionada);
                } else {
                  // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
                  // Puedes mostrar un mensaje de error o realizar otra acción aquí
                  alert(
                    "Debes seleccionar una hora anterior a la hora actual."
                  );
                }
              }}
            />
          </div>
        </div>

        <br></br>

        <div className="fila-container">
          <div className="columna">
            Hora de activación de la cadena de supervivencia:
          </div>
          <div className="columna">
            <input
              type="time"
              id="edad"
              className="columna1"
              value={uso_datoseventohoraactivacioncadenasupervivencia} // Asegúrate de establecer el valor del input
              onChange={(e) => {
                const horaSeleccionada = e.target.value;

                if (horaSeleccionada < horaActual) {
                  // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
                  setuso_datoseventohoraactivacioncadenasupervivencia(
                    horaSeleccionada
                  );
                } else {
                  // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
                  // Puedes mostrar un mensaje de error o realizar otra acción aquí
                  alert(
                    "Debes seleccionar una hora anterior a la hora actual."
                  );
                }
              }}
              max="23:59" // Establecer la hora máxima como 23:59
            />
          </div>
        </div>

        <br></br>
        <div className="fila-container">
          <div className="columna">Hora de utilización del DEA:</div>
          <div className="columna">
            <input
              type="time"
              id="edad"
              className="columna1"
              value={uso_datoseventohorautilizaciondea} // Asegúrate de establecer el valor del input
              onChange={(e) => {
                const horaSeleccionada = e.target.value;

                if (horaSeleccionada < horaActual) {
                  // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
                  setuso_datoseventohorautilizaciondea(horaSeleccionada);
                } else {
                  // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
                  // Puedes mostrar un mensaje de error o realizar otra acción aquí
                  alert(
                    "Debes seleccionar una hora anterior a la hora actual."
                  );
                }
              }}
              max="23:59" // Establecer la hora máxima como 23:59
            />
          </div>
        </div>

        <br></br>
        <div className="fila-container">
          <div className="columna">
            Hora de traslado de la persona atendida a la institución de salud:
          </div>
          <div className="columna">
            <input
              type="time"
              id="edad"
              className="columna1"
              value={uso_datoseventohoratrasladopersonaatendida} // Asegúrate de establecer el valor del input
              onChange={(e) => {
                const horaSeleccionada = e.target.value;

                if (horaSeleccionada < horaActual) {
                  // La hora seleccionada es anterior a la hora actual, puedes actualizar el estado
                  setuso_datoseventohoratrasladopersonaatendida(
                    horaSeleccionada
                  );
                } else {
                  // La hora seleccionada es igual o posterior a la hora actual, no actualices el estado
                  // Puedes mostrar un mensaje de error o realizar otra acción aquí
                  alert(
                    "Debes seleccionar una hora anterior a la hora actual."
                  );
                }
              }}
              max="23:59" // Establecer la hora máxima como "23:59"
            />
          </div>
        </div>
        <br></br>

        <div className="bloque">
          <strong>Datos del medio de transporte en el cual es trasladada la persona
          atendida a la institución de salud</strong>
          <br></br>
          <input
            type="text"
            id="edad"
            placeholder="Nombre de la persona encargada del traslado"
            className="inputForm"
            onKeyDown={handleKeyDown2}
            onChange={(e) =>
              setuso_datosmediotransportenombreencargado(e.target.value)
            }
          />
          {errores.includes("El nombre debe contener al menos 8 caracteres.") && (
            <p className="text-red-500">El nombre debe contener al menos 8 caracteres.</p>
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
      <br></br>

      <Footer />
    </main>
  );
}
