export default function TarjetaNotificacion() {
  return (
    <div className="mr-24 pr-24 ">
    <div className="mb-5 px-3  mx-3 mr-24 pr-24 ">
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "15px",
        }}
        className="mx-24 px-24"
      >
        <h1 className="text-sm mb-1 px-2 pt-1">
          El usuario <span style={{ fontWeight: "bold" }}>Ricardo</span> ha
          hecho cambios en la ficha de{" "}
          <span style={{ fontWeight: "bold" }}>Lisec</span>, con código{" "}
          <span style={{ fontWeight: "bold" }}>234234</span>
        </h1>
        <div className="flex flex-row">
          <div className="px-2 pb-1 text-sm">
            <p style={{ color: "darkgray" }}>
              Fecha y hora: 16 de junio de 2023, 10:00 AM
            </p>
            <div style={{ display: "flex", justifyContent: "start" }}></div>
          </div>
        </div>
        <div>
          <div className="flex flex-row text-xs justify-between">
            <button className="rounded-lg px-4 py-1 bg-black text-white mt-5">
              Ver más información
            </button>
            <button className="rounded-lg px-2 font-bold shadow bg-red-700 text-white text-xs mt-5">
              x
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
}
