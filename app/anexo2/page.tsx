"use client";
// anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo2.css";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export default function Options() {
  const router = useRouter();

  // Estados para cada uno de los campos del formulario y para los errores
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [documentoIdentificacion, setDocumentoIdentificacion] = useState('');
  const [existenciaDesfibriladores, setExistenciaDesfibriladores] = useState('1');
  const [nombreSitio, setNombreSitio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [errores, setErrores] = useState([]);

  // Función para validar todos los campos antes de navegar
  const validateFields = () => {
    const newErrors = [];
    if (!nombreCompleto.trim()) newErrors.push('El nombre completo es obligatorio.');
    if (!documentoIdentificacion.trim() || documentoIdentificacion.length !== 8 ) {
      newErrors.push('El documento de identificación debe tener 10 dígitos.');
    }
    if (!existenciaDesfibriladores.trim()) {
      newErrors.push('Debe indicar la cantidad de desfibriladores.');
    }
    if (!nombreSitio.trim()) {
      newErrors.push('El nombre del sitio es obligatorio.');
    }
    if (!direccion.trim()) {
      newErrors.push('La dirección es obligatoria.');
    }
    if (!codigoPostal.trim() || !/^\d{5}$/.test(codigoPostal)) {
      newErrors.push('El código postal debe tener 5 dígitos.');
    }

    setErrores(newErrors);
    return newErrors.length === 0;
  };

  // Función que se llama cuando el usuario intenta navegar a la siguiente sección
  const navigateToSection = () => {
    if (validateFields()) {
      // Guardar la información en el localStorage antes de navegar
      localStorage.setItem('REG_NOMBRECOMPLETO', nombreCompleto);
      localStorage.setItem('REG_DOCIDENTIFICACION', documentoIdentificacion);
      localStorage.setItem('REG_CANTIDAD', existenciaDesfibriladores);
      localStorage.setItem('REG_NOMBREUBICACION', nombreSitio);
      localStorage.setItem('REG_DIRECCIONUBICACION', direccion);
      localStorage.setItem('REG_CODIGOPOSTAL', codigoPostal);
    
      router.push('/anexo2pagina2'); // Asegúrate de que esta ruta es la correcta
    } else {
      // Mostrar los mensajes de error si la validación falla
      errores.forEach(error => alert(error));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="min-h-[700px] flex items-center justify-center mt-5">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
          <div className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo2">
            <h6 className="font-bold text-sm tituloanexo text-black">
              REGISTRO DE INSTALACIÓN DESFIBRILADORES EXTERNOS (DEA)
            </h6>
            <p className="ley text-black">(Ley 1831 del 12 de mayo de 2017)</p>
            <br />
            <p className="font-bold ley text-black">Representante legal:</p>
            <input
              type="text"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Nombre completo"
              onChange={(e) => setNombreCompleto(e.target.value)}
              value={nombreCompleto}
            />
            {/* Mensaje de error para el nombre completo, si existe */}
            {errores.includes('El nombre completo es obligatorio.') && (
              <p className="text-red-500">El nombre completo es obligatorio.</p>
            )}
            <br /><br />
            <input
              type="number"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Documento de identificación"
              onChange={(e) => setDocumentoIdentificacion(e.target.value)}
              value={documentoIdentificacion}
            />
            {/* Mensaje de error para el documento de identificación, si existe */}
            {errores.includes('El documento de identificación debe tener 10 dígitos.') && (
              <p className="text-red-500">El documento de identificación debe tener 10 dígitos.</p>
            )}
            <br /><br />
            {/* <div className="flex items-center text-black">
              <p className="mr-2 font-bold text-black">Comunica la existencia de:</p>
              <input
                type="number"
                className="w-16 p-2 rounded border border-gray-300 text-black"
                onChange={(e) => setExistenciaDesfibriladores(e.target.value)}
                value={existenciaDesfibriladores}
              />
              <p className="font-bold text-black">desfibrilador/es externo/s ubicados en:</p>
            </div> */}
            {/* Mensaje de error para la cantidad de desfibriladores, si existe */}
            {/* {errores.includes('Debe indicar la cantidad de desfibriladores.') && (
              <p className="text-red-500">Debe indicar la cantidad de desfibriladores.</p>
            )} */}
            <input
              type="text"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Nombre Sitio"
              onChange={(e) => setNombreSitio(e.target.value)}
              value={nombreSitio}
            />
            {/* Mensaje de error para el nombre del sitio, si existe */}
            {errores.includes('El nombre del sitio es obligatorio.') && (
              <p className="text-red-500">El nombre del sitio es obligatorio.</p>
            )}
            <br /><br />
            <input
              type="text"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Dirección"
              onChange={(e) => setDireccion(e.target.value)}
              value={direccion}
            />
            {/* Mensaje de error para la dirección, si existe */}
            {errores.includes('La dirección es obligatoria.') && (
              <p className="text-red-500">La dirección es obligatoria.</p>
            )}
            <br /><br />
            <input
              type="number"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Código Postal"
              onChange={(e) => setCodigoPostal(e.target.value)}
              value={codigoPostal}
            />
            {/* Mensaje de error para el código postal, si existe */}
            {errores.includes('El código postal debe tener 5 dígitos.') && (
              <p className="text-red-500">El código postal debe tener 5 dígitos.</p>
            )}
            <br /><br />
            <button
              className="mt-4 w-full bg-custom-azul text-white py-3 rounded-full shadow-lg"
              onClick={navigateToSection}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
