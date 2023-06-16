import React from "react";

export default function Fichas() {
  return (
    <div className="bg-white">
          <div className="flex p-5 flex-row justify-end">
            <button className="py-1 px-5 mt-2 ml-5 bg-white text-black">Crear Ficha</button>
            <button className="py-1 px-5 mt-2 ml-5 bg-white text-black">Modificar</button>
            <button className="py-1 px-5 mt-2 ml-5 bg-white text-black">Exportar</button>
            <button className="py-1 px-5 mt-2 ml-5 bg-white text-black">Salir</button>
          </div>
      <div className="flex flex-col">
        <div className="p-5">
          <form>
            <input
              type="text"
              placeholder="Busque por nombre de empresa"
              className="border border-gray-400 pr-20 p-2"
            />
            <br/>
            <label className="mt-2">
              Desea buscar por otro criterio de búsqueda?
            </label>
            <div className="flex">
              <input type="radio" id="codigo" name="search" />
              <label htmlFor="codigo" className="ml-2 mr-4">
                Código
              </label>
              {/* Repite los siguientes bloques para las otras opciones */}
              <input type="radio" id="ncomercial" name="search" />
              <label htmlFor="ncomercial" className="ml-2 mr-4">
                Nombre Comercial
              </label>
              <input type="radio" id="nfiscal" name="search" />
              <label htmlFor="nfiscal" className="ml-2 mr-4">
                Nombre Fiscal
              </label>
              <input type="radio" id="telefono" name="search" />
              <label htmlFor="telefono" className="ml-2 mr-4">
                Teléfono
              </label>
              <input type="radio" id="wen" name="search" />
              <label htmlFor="web" className="ml-2 mr-4">
                Web
              </label>
              <input type="radio" id="wmail" name="search" />
              <label htmlFor="email" className="ml-2 mr-4">
                Email
              </label>
            </div>
          </form>
        </div>
      </div>
        <div className="flex flex-row">
          <div className="p-5">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Teléfono</th>
                  <th>Nombre Comercial</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}