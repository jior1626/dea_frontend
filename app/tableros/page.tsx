"use client";
//options.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./tableros.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Options() {
  const router = useRouter();
  const [rolAsignado, setRolAsignado] = useState("");

 

  useEffect(() => {
    // Suponiendo que el valor almacenado en localStorage es una cadena JSON
    // Obtener el token JWT del localStorage
    const rol = localStorage.getItem("rol");
    if (rol) {
      setRolAsignado(rol);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

     
        <div className="min-h-[700px] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">


          </div>
        </div>

      <Footer></Footer>
    </main>
  );
}
