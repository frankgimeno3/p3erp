import React, { useState } from "react";

export default function Fichas() {
  const [showOptions, setShowOptions] = useState(false);

  const handleCheckboxChange = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="bg-white mt-20">
      <div className="flex p-5 flex-row justify-end">
        <button className="py-1 px-5 mt-2 ml-5 bg-gray-50 text-black">
          Crear Nueva Ficha
        </button>
        <button className="py-1 px-5 mt-2 ml-5 bg-gray-50 text-black">
          Modificar
        </button>
        <button className="py-1 px-5 mt-2 ml-5 bg-gray-50 text-black">
          Exportar
        </button>
      </div>
      <div className="flex flex-col ml-20">
        <div className="p-5">
          <h1 className="text-3xl mb-4">Fichas de Clientes</h1>
          <form className="flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por nombre de empresa"
                className="border border-gray-400 pr-20 p-2 w-72"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-black text-white">
                Buscar
              </button>
            </div>
          </form>
          <br />
          <label className="mt-2" htmlFor="searchOption">
            Desea buscar por otro criterio de búsqueda?
          </label>
          <div className="flex">
            <input
              type="checkbox"
              id="searchOption"
              name="search"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="searchOption" className="ml-2 mr-4">
              Haga click aquí para mostrar <span className="font-bold">otras opciones de búsqueda </span>
            </label>
          </div>
          {showOptions && (
            <div>
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
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row ml-20">
        <div className="p-5">
          <table>
            <thead>
              <tr>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Código</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Teléfono</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Nombre Comercial</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Nombre Fiscal</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Web</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Email</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Nombre País</th>
                <th className="border border-gray-300 bg-white p-2 w-5cw">Código Postal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 bg-white p-2">001</td>
                <td className="border border-gray-300 bg-white p-2">123-456-7890</td>
                <td className="border border-gray-300 bg-white p-2">Empresa 1</td>
                <td className="border border-gray-300 bg-white p-2">Nombre Fiscal 1</td>
                <td className="border border-gray-300 bg-white p-2">www.empresa1.com</td>
                <td className="border border-gray-300 bg-white p-2">info@empresa1.com</td>
                <td className="border border-gray-300 bg-white p-2">País 1</td>
                <td className="border border-gray-300 bg-white p-2">12345</td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-white p-2">002</td>
                <td className="border border-gray-300 bg-white p-2">987-654-3210</td>
                <td className="border border-gray-300 bg-white p-2">Empresa 2</td>
                <td className="border border-gray-300 bg-white p-2">Nombre Fiscal 2</td>
                <td className="border border-gray-300 bg-white p-2">www.empresa2.com</td>
                <td className="border border-gray-300 bg-white p-2">info@empresa2.com</td>
                <td className="border border-gray-300 bg-white p-2">País 2</td>
                <td className="border border-gray-300 bg-white p-2">54321</td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-white p-2">003</td>
                <td className="border border-gray-300 bg-white p-2">111-222-3333</td>
                <td className="border border-gray-300 bg-white p-2">Empresa 3</td>
                <td className="border border-gray-300 bg-white p-2">Nombre Fiscal 3</td>
                <td className="border border-gray-300 bg-white p-2">www.empresa3.com</td>
                <td className="border border-gray-300 bg-white p-2">info@empresa3.com</td>
                <td className="border border-gray-300 bg-white p-2">País 3</td>
                <td className="border border-gray-300 bg-white p-2">98765</td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-white p-2">004</td>
                <td className="border border-gray-300 bg-white p-2">555-666-7777</td>
                <td className="border border-gray-300 bg-white p-2">Empresa 4</td>
                <td className="border border-gray-300 bg-white p-2">Nombre Fiscal 4</td>
                <td className="border border-gray-300 bg-white p-2">www.empresa4.com</td>
                <td className="border border-gray-300 bg-white p-2">info@empresa4.com</td>
                <td className="border border-gray-300 bg-white p-2">País 4</td>
                <td className="border border-gray-300 bg-white p-2">98765</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}