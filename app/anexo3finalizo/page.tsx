"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./anexo3.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Anexo3Finalizo() {
  const router = useRouter();

  
  const handleLogin = async () => {
    // La solicitud fue exitosa, puedes redirigir a la página deseada
    router.push("options");
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <Header></Header>

      <div className="mt-32 min-h-[400px] flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full text-center">
          <div className="mx-auto">
            <img
              src="https://nivel99.com/desfibriladores/circle-check-regular 1.png"
              style={{ margin: "0 auto" }} // Estilo en línea para centrar horizontalmente
            />
          </div>
          <br></br>
          <br></br>
          <img src="https://nivel99.com/desfibriladores/botonmorado.png" style={{ margin: "0 auto" }} onClick={handleLogin} />
          <br></br>
          <br></br>
          <p className="text-black">Se notificará vía correo electrónico el estado de su aprobación.</p>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
