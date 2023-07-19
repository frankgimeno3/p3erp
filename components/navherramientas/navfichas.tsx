import React from "react";

export default function Navfichas() {
  return (
    <div className="w-60 h-screen m-0 p-0 bg-gray-700 shadow fixed ">
      <div className="flex flex-col pt-2 pl-2    text-white ">
        <h1 className="text-1xl pt-5 pl-2">BARRA DE HERRAMIENTAS</h1>
        <p className="text-xs  pl-2 text-gray-50">
          Este menú mostrará diferentes herramientas según la pestaña
          seleccionada.
        </p>
        
      </div>
      <hr className="mt-5"/>
      <div className=" flex flex-col">
        <h2 className="text-white pl-4 mt-5 text-sm">Opciones para <span className="font-bold">Fichas de clientes</span></h2>
        <div className="flex flex-row bg-white bg-opacity-20 my-5">
          <div className="bg-white px-1 "></div>
          <button className="bg-white bg-opacity-25 text-sm w-full py-1 text-white text-left pl-5">
            Buscar fichas de clientes
          </button>
        </div>
        <div className="flex flex-row bg-white bg-opacity-20">
          <div className="bg-white px-1 "></div>
          <button className="bg-white bg-opacity-25 text-sm w-full py-1 text-white text-left pl-5">
          Crear Nueva Ficha
          </button>
          </div>

          <div className="flex flex-row bg-white bg-opacity-20 my-5">
          <div className="bg-white px-1 "></div>
          <button className="bg-white bg-opacity-25 text-sm w-full py-1 text-white text-left pl-5">
          Exportar un listado
          </button>
        </div>
      </div>
    </div>
  );
}
