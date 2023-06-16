import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative">

      {/* Degradado */}
      <div
       className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-gradient-to-b from-[#ADD8E6] to-[#1F2B3A] via-[#000080] opacity-20"
      style={{
          clipPath: "polygon(100px 0, 100% 0, calc(100% + 225px) 100%, 480px 100%)",
        }}
      ></div>

      {/* Contenido */}
      <div className="flex justify-left items-center pl-20 h-screen">
        <div>
          <h1 className="text-5xl font-normal text-gray-800 mb-1">
            Bienvendo al portal </h1>
          <h1 className="text-5xl font-normal text-gray-800 mb-4"> de administración de 
            <span className="font-bold text-blue-900"> PROPORCION 3</span>
          </h1>
          <h2 className="text-2xl mb-4 text-gray-600">Por favor, inicie sesión para continuar</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">Usuario:</label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 w-64 text-gray-600"
                placeholder="Inserte su usuario aquí"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">Contraseña:</label>
              <input
                type="password"
                className="border border-gray-300 px-4 py-2 w-64 text-gray-600"
                placeholder="Inserte su contraseña aquí"
              />
            </div>
            <Link href={"/home"}>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded text-#1F2B3A font-bold"
            >
              Iniciar sesión
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}