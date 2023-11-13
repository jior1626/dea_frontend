"use client";
//anexo2.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./creacionoperador.css";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Options() {
  const router = useRouter();

  const [nombreCompleto, setNombreCompleto] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [rol, setRol] = useState('');
  const [edad, setEdad] = useState(0);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const validatePassword = (password) => {
    return password.length >= 6 && /^[A-Z]/.test(password);
  };

  const validateEmail = (email) => {
    // Esta es una expresión regular simple para validación de emails, puedes necesitar una más compleja dependiendo del caso
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  
  const validateForm = async () => {
    const jwt = localStorage.getItem("jwt");
    if (
        !nombreCompleto || 
        tipoIdentificacion === 'Selecciona' ||
        !numeroIdentificacion || 
        rol === 'Selecciona' || 
        !edad ||
        !validateEmail(email) ||
        !validatePassword(password)
      ) {
        alert('Por favor, llena todos los campos correctamente.');
        return false;
      }

      const data = {
            "username": nombreCompleto,
            "email":email,
            "password":password,
            "RolAsignado":rol,
            "TipoDocumento": tipoIdentificacion,
            "NumeroDocumento":numeroIdentificacion,
            "Edad":edad   
      };

      alert(JSON.stringify(data))

      try {
        const response = await fetch('https://nodosalud1.com/api/auth/local/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const responseData = await response.json();
        console.log(responseData);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        alert('Datos enviados con éxito.');
        router.push("anexo3finalizo");
      } catch (error) {
        alert('Error al enviar datos.');
        console.error('Error enviando datos:', error);
      }
  
      // Aquí puedes continuar con la lógica para registrar al usuario, ya que pasó la validación
      console.log('Todo válido, podemos registrar al usuario');
      // navigateToSection(); // Implementa la lógica de navegación o lo que proceda aquí
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      <div className="min-h-[700px] flex items-center justify-center mt-5">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full mb-8">
          <div className="bg-white rounded-lg p-8 border-l-12 shadow-md mb-4 anexo2">
            <h6 className="font-bold text-sm tituloanexo text-black">
              Creación de usuario operador
            </h6>
            <br></br>
            <p className="font-bold ley text-black">Nombre completo:</p>
            <input
              type="text"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Nombre completo"
              onChange={(e) => setNombreCompleto(e.target.value)}
            />
            <br></br>
            <br></br>
            <p className="font-bold ley text-black">Tipo documento:</p>
            <select
              className="w-full p-3 rounded-full shadow-sm border text-black"
              onChange={(e) => setTipoIdentificacion(e.target.value)}
            >
             <option value="Selecciona">
                Selecciona Tipo Documento
              </option>
              <option value="Pasaporte">
                Pasaporte
              </option>
              <option value="Cedula">
                Cedula
              </option>
            </select>
            <br></br>
            <br></br>
            
            <p className="font-bold ley text-black">Numero identificación:</p>
            <input
              type="text"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Numero identificación"
              onChange={(e) => setNumeroIdentificacion(e.target.value)}
            />
            <br></br>
            <br></br>

            <p className="font-bold ley text-black">Selecciona Rol:</p>
            <select
              className="w-full p-3 rounded-full shadow-sm border text-black"
              onChange={(e) => setRol(e.target.value)}
            >
             <option value="Selecciona">
                Selecciona Rol
              </option>
              <option value="Operador1">
              Operador1
              </option>
              <option value="Operador2">
              Operador2
              </option>
              <option value="Administrador">
              Administrador
              </option>
              <option value="Consultor">
              Consultor
              </option>
            </select>

            <br></br>
            <br></br>

            <p className="font-bold ley text-black">Edad:</p>
            <input
              type="number"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Edad"
              onChange={(e) => setEdad(e.target.value)}
            />

            <br></br>
            <br></br>

            <p className="font-bold ley text-black">Correo:</p>
            <input
              type="email"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br></br>
            <br></br>

            <p className="font-bold ley text-black">Clave:</p>
            <input
              type="password"
              className="w-full p-3 rounded-full shadow-sm border text-black"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="mt-4 w-full bg-custom-azul text-white py-3 rounded-full shadow-lg text-black" onClick={validateForm}>
              Registrar
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
