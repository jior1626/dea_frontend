"use client";
//page.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
// Nueva importación
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = async () => {
     // Validar que el email sea una dirección de correo válida
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       alert("El correo electrónico no es válido.");
       return;
     }

     // Validar que la contraseña tenga al menos 6 caracteres
     if (password.length < 6) {
       alert("La contraseña debe tener al menos 6 caracteres.");
       return;
     }

     // Preparar los datos a enviar
     const data = {
       action: "login",
       correo: email,
       contrasena: password,
     };

     try {
       // Realizar la solicitud de inicio de sesión
       const response = await fetch(
         "https://dea-auth.azurewebsites.net/api.php/api.php",
         {
           method: "POST",
           headers: {
            "Access-Control-Allow-Headers" : "Content-Type"
           },
           body: JSON.stringify(data),
         }
       );
      
       if (response.ok) {
        const responseData = await response.json();
        if (responseData.message === "Inicio de sesión exitoso.") {
            // Almacena el token JWT en localStorage
            localStorage.setItem("jwt", responseData.token);
            localStorage.setItem("rol", responseData.rol);

            // Redirige a la página deseada
            router.push("options");
        } else {
            // Maneja los casos donde la respuesta es OK pero el mensaje no es el esperado
            alert("Inicio de sesión no fue exitoso. Por favor, verifica tu correo y contraseña.");
        }
       } else {
         // Hubo un error en la solicitud, mostrar un mensaje de error
         alert(
           "Credenciales incorrectas. Por favor, verifica tu correo y contraseña."
         );
       }
     } catch (error) {
       alert(
         "Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo."
       );
     }
   }; 


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      <div className="relative flex place-items-center before:absolute z-[-1]">
        <h1 className="text-white font-bold">¡Bienvenido/a!</h1>
      </div>

      <div className="mt-32 min-h-[500px] flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-5 w-full">
          <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
          <input
            type="email"
            className="w-full p-3 rounded-full shadow-sm border text-black"
            placeholder="Usuario"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="mt-4 w-full p-3 rounded-full shadow-sm border text-black"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-custom-purple text-white py-3 rounded-full shadow-lg"
            onClick={handleLogin}
          >
            Ingresar
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
