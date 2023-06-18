export default function Produccion() {
    return (
      <div className="pt-20 pl-20 bg-white">
        <h1 className="text-3xl pt-5">Produccion</h1>
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
                  <button>Material para anuncios, banners y newsletters</button>
                </td>
                <td className="border border-gray-300 p-2">
                  Material publicitario entregado por clientes, para ser transformado en anuncio
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  <button>Tabla de estados de materiales</button>
                </td>
                <td className="border border-gray-300 p-2">
                  Tabla en que se muestra, para cada material entregado, en qué estado se encuentra
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  <button>Tabla de publicaciones</button>
                </td>
                <td className="border border-gray-300 p-2">
                  Tabla en que se muestra, para cada material entregado, si ha sido publicado y dónde.
                </td>
              </tr>
              {/* Agrega aquí más filas siguiendo el mismo patrón */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  