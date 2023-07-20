import Navproduccion from "../navherramientas/navproduccion";

export default function Produccion() {
  return (
    <div className="mt-14 pt-1 w-screen">
      <div className="flex flex-row">
        <Navproduccion />
        <div className="ml-20 w-full h-screen">
          <div className="flex flex-col pl-24 ml-24 bg-gray-400 bg-opacity-75 0w-full h-full">
            <div className="bg-white mt-5 mr-24 pt-5 pl-10">
            <h1 className="text-3xl ">Produccion</h1>
            <h2 className="pb-10">
              En esta página encontrarás diferentes herramientas para producción
            </h2>
            <div className="pb-10 ">
              <table className="border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Herramienta</th>
                    <th className="border border-gray-300 p-2">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      <button>Material para artículos</button>
                    </td>
                    <td className="border border-gray-300 p-2">
                      Material crudo para realizar artículos
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      <button>
                        Material para anuncios, banners y newsletters
                      </button>
                    </td>
                    <td className="border border-gray-300 p-2">
                      Material publicitario entregado por clientes, para ser
                      transformado en anuncio
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      <button>Tabla de estados de materiales</button>
                    </td>
                    <td className="border border-gray-300 p-2">
                      Tabla en que se muestra, para cada material entregado, en
                      qué estado se encuentra
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      <button>Tabla de publicaciones</button>
                    </td>
                    <td className="border border-gray-300 p-2">
                      Tabla en que se muestra, para cada material entregado, si
                      ha sido publicado y dónde.
                    </td>
                  </tr>
                  {/* Agrega aquí más filas siguiendo el mismo patrón */}
                </tbody>
              </table>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
}
