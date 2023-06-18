export default function Utilidades() {
  return (
    <div className="pt-20 pl-20 bg-white">
      <h1 className="text-3xl pt-5">Utilidades</h1>
      <h2 className="pb-10">
        En esta página encontrarás diferentes herramientas y utilidades.
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
                <button>Informes de actividad por agente</button>
              </td>
              <td className="border border-gray-300 p-2">
                Descripción de los informes de actividad por agente.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <button>Extraer listado de fichas</button>
              </td>
              <td className="border border-gray-300 p-2">
                Descripción de la extracción de listado de fichas.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <button>Otra herramienta</button>
              </td>
              <td className="border border-gray-300 p-2">
                Descripción de otra herramienta.
              </td>
            </tr>
            {/* Agrega aquí más filas siguiendo el mismo patrón */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
