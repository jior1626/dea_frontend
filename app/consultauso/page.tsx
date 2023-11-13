"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./consultauso.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';

export default function Options() {
    const router = useRouter();
    const [rolAsignado, setRolAsignado] = useState(null);
    const [registros, setRegistros] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [detalleRegistro, setDetalleRegistro] = useState(null);

    useEffect(() => {
        // Suponiendo que el valor almacenado en localStorage es una cadena JSON
        const user = localStorage.getItem('user');
        const jwt = localStorage.getItem("jwt");
        if (user) {
          const userData = JSON.parse(user);
          setRolAsignado(userData.RolAsignado);
        }
    
        // Llamar a la API para obtener los datos
        fetch('https://nodosalud1.com/api/tbl-usodeas', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        })
          .then(response => response.json())
          .then(data => {
            setRegistros(data.data);
          })
          .catch(error => {
            // Manejo de errores
            console.error('Error fetching data: ', error);
          });
      }, []);
    
      const abrirModal = (detalle) => {
        setDetalleRegistro(detalle);
        setModalVisible(true);
      };
    
      const cerrarModal = () => {
        setModalVisible(false);
      };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      <div className="min-h-[700px] flex items-center justify-center mt-8">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">

        <h2 className="text-center text-black">
        <strong>CONSULTA DE USO DEA</strong>
        </h2>
          
        {registros.map((registro) => (
  <div key={registro.id} className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4">
    <p className="text-center text-black">
      {registro.attributes.USO_FECHAEVENTO}
    </p>
    <button
      onClick={() => abrirModal(registro.attributes)}
      className="text-center text-black font-bold underline"
    >
      Ver detalles
    </button>
  </div>
))}

{modalVisible && detalleRegistro && (
  <Modal
    titulo={`Detalles de ${detalleRegistro.USO_FECHAEVENTO}`}
    contenido={
      <div>
        <p>Fecha de evento: {detalleRegistro.USO_FECHAEVENTO}</p>
        <p>Nombre del lugar del evento: {detalleRegistro.USO_NOMBRELUGAREVENTO}</p>
        <p>Persona atendida en el evento: {detalleRegistro.USO_PERSONAATENDIDAEVENTONOMBRE}</p>
        <p>Documento persona atentida en el evento: {detalleRegistro.USO_PERSONAATENDIDAEVENTOTIPODOCUMENTO}</p>
        <p>Numero de documento persona atendida: {detalleRegistro.USO_PERSONAATENDIDAEVENTONUMERODOCUMENTO}</p>
        <p>Edad persona atendida: {detalleRegistro.USO_PERSONAATENDIDAEVENTOEDAD}</p>
        <p>Sexo persona atendida: {detalleRegistro.USO_PERSONAATENDIDAEVENTOSEXO}</p>
        <p>Aseguradora: {detalleRegistro.USO_PERSONAATENDIDAEVENTOASEGURADORSALUD}</p>
        <p>Nombre persona que utilizo el DEA: {detalleRegistro.USO_DATOSEVENTONOMBREPERSONAUTILIZODEA}</p>
        <p>Evento tipo de documento: {detalleRegistro.USO_DATOSEVENTOTIPODOCUMENTO}</p>
        <p>Evento numero de documento: {detalleRegistro.USO_DATOSEVENTONUMERODOCUMENTO}</p>
        <p>Evento telefono: {detalleRegistro.USO_DATOSEVENTOTELEFONO}</p>
        <p>Hora inicio del evento: {detalleRegistro.USO_DATOSEVENTOHORAINICIOEVENTO}</p>
        <p>Hora de activación de la cadena de supervivencia: {detalleRegistro.USO_DATOSEVENTOHORAACTIVACIONCADENASUPERVIVENCIA}</p>
        <p>Hora que se registro el DEA: {detalleRegistro.USO_DATOSEVENTOHORAUTILIZACIONDEA}</p>
        <p>Hora de traslado persona atentida: {detalleRegistro.USO_DATOSEVENTOHORATRASLADOPERSONAATENDIDA}</p>
        <p>Nombre del encargado del transporte: {detalleRegistro.USO_DATOSMEDIOTRANSPORTENOMBREENCARGADO}</p>
        <p>Medio de transporte: {detalleRegistro.USO_DATOSMEDIOTRANSPORTEMEDIOTRANSPORTE}</p>
        <p>Empresa de la ambulancia: {detalleRegistro.USO_DATOSMEDIOTRANSPORTEEMPRESAAMBULANCIA}</p>
        <p>Medio de transporte observaciones: {detalleRegistro.USO_DATOSMEDIOTRANSPORTEOBSERVACIONES}</p>
        <p>Fecha de registro: {detalleRegistro.createdAt}</p>
      </div>
    }
    cerrarModal={cerrarModal}
  />
)}

        </div>
      </div>
   

      <Footer></Footer>
    </main>
  );
}
