"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./agenda.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';

export default function Options() {
  const router = useRouter();

  const navigateToSectionAgendar = () => {
    router.push("agendar");
  };

  const navigateToSectionActavisita = () => {
    router.push("actavisita");
  };

  // Determina el ancho del cajón basado en el tamaño de la ventana
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const cajonStyle = {
    width: windowWidth >= 768 ? '768px' : '100%', // Ancho fijo para escritorio
    margin: '0 auto', // Centrado horizontal
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between" >
      <Header></Header>

      <div className="min-h-[700px] flex items-center justify-center mt-8">
        <div className="bg-white rounded-lg shadow-md p-8 mx-5 mb-8" style={cajonStyle}>

          <h2 className="text-center text-black">
            <strong>AGENDA</strong>
          </h2>

          <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionAgendar}
          >
            Agendar
          </button>

          <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={navigateToSectionActavisita}
          >
            Acta de visita
          </button>

        </div>
      </div>


      <Footer></Footer>
    </main>
  );
}
