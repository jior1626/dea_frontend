"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2pagina1.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CicleInfo, User, ChevronLeft, HomeOut } from "../components/iconos";
import colombianCities from "../colombianCities.json";

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
  const [dea_ciudadmunicipio, setdea_ciudadmunicipio] = useState("");
  const [dea_departamento, setdea_departamento] = useState("");
  const [dea_tipodeclaracion, setdea_tipodeclaracion] = useState("");
  const [dea_tipoinstalacion, setdea_tipoinstalacion] = useState("");

  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (dea_ciudadmunicipio.length < 4)
      newErrors.push("El nombre del municipio es obligatorio.");
    if (dea_departamento.length < 4) {
      newErrors.push("El departamento es obligatorio");
    }
    if (!dea_tipodeclaracion.trim()) {
      newErrors.push("El tipo de declaración es obligatoria");
    }
    if (!dea_tipoinstalacion.trim()) {
      newErrors.push("El tipo de instalación es obligatoria");
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem("dea_ciudadmunicipio", dea_ciudadmunicipio);
      localStorage.setItem("dea_departamento", dea_departamento);
      localStorage.setItem("dea_tipodeclaracion", dea_tipodeclaracion);
      localStorage.setItem("dea_tipoinstalacion", dea_tipoinstalacion);

      router.push("/anexo2pagina2"); // Asegúrate de que esta ruta es la correcta
    } else {
      // Mostrar los mensajes de error si la validación falla
      errores.forEach((error) => alert(error));
    }
  };

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [allDepartments, setAllDepartments] = useState<string[]>([]);

  useEffect(() => {
    // Obtener un array plano de nombres de departamentos únicos
    const departments = Array.from(
      new Set(colombianCities.map((city) => city.departamento))
    );
    // Ordenar el array usando localeCompare
    departments.sort((a, b) => a.localeCompare(b));
    setAllDepartments(departments);
  }, []);

  useEffect(() => {
    // Filtrar las ciudades según el departamento seleccionado
    const citiesForDepartment =
      colombianCities.find((city) => city.departamento === selectedDepartment)
        ?.ciudades || [];

    setFilteredCities(citiesForDepartment);
  }, [selectedDepartment]);

  return (
    <main>
      <Header />
      <div className="iconos">
        <a href="anexo2">
          <ChevronLeft />
        </a>
        <User />
      </div>
      <div className="contenedor">
        <div className="bloque">
          <select
            name="department"
            className="inputForm1"
            placeholder="Selecciona un departamento"
            onChange={(e) => setSelectedDepartment(e.target.value)}
            value={selectedDepartment}
          >
            <option value="" disabled>
              Departamento
            </option>
            {allDepartments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          {/* Mensaje de error para el documento de identificación, si existe */}
          {errores.includes("El departamento es obligatorio") && (
            <p className="textRed">El departamento es obligatorio</p>
          )}
        </div>
        <div className="bloque">
          <select
            name="city"
            className="inputForm"
            placeholder="Selecciona una ciudad"
            onChange={(e) => setdea_ciudadmunicipio(e.target.value)}
            value={dea_ciudadmunicipio}
          >
            <option value="" disabled>
              Ciudad o municipio
            </option>
            {filteredCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El nombre del municipio es obligatorio.") && (
            <p className="textRed">El nombre del municipio es obligatorio.</p>
          )}
        </div>
        <div className="bloque">
          <br></br>
          <p>Declaración:</p>

          <select
            className="inputForm"
            onChange={(e) => setdea_tipodeclaracion(e.target.value)}
          >
            <option value="" disabled>Selecciona</option>
            <option value="Permanente">Permanente</option>
            <option value="Retirada">Retirada</option>
            <option value="Temporal">Temporal</option>
            <option value="Modificación ubicación">
              Modificación ubicación
            </option>
            <option value="Cambio titular">Cambio titular</option>
          </select>
          {/* Mensaje de error para el nombre del sitio, si existe */}
          {errores.includes("El tipo de declaración es obligatoria") && (
            <p className="textRed">El tipo de declaración es obligatoria</p>
          )}

          <br></br>
          <p>Tipo de Instalación::</p>

          <select
            className="inputForm"
            onChange={(e) => setdea_tipoinstalacion(e.target.value)}
          >
            <option value="" disabled>Selecciona</option>
            <option value="Obligatoria">Obligatoria</option>
            <option value="Voluntaria">Voluntaria</option>
          </select>
          {errores.includes("El tipo de instalación es obligatoria") && (
            <p className="textRed">El tipo de instalación es obligatoria</p>
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
