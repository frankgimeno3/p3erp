import Link from "next/link";
import TarjetaNotificacion from "./TarjetaNotificacion";

export default function Notificaciones() {
  return (
    <div>
      <div className="bg-white px-20 mt-20">
        <h1 className="text-5xl px-10 pt-5">
          Bienvenido, <span className="font-bold">usuario</span>
        </h1>
        <p className="text-xl px-10 pb-3">
          Últimas notificaciones en relación a sus suscripciones
        </p>
      </div>
      <nav className="flex-row justify-between px-10 pb-3 ">
        <div className="flex items-center justify-start ml-10 mt-10 ">
            <button className="ml-10 m3-2  p-1 px-4 bg-black text-gray-100 ">Ordenar por empresa</button>
            <button className="mx-5  p-1 px-4 bg-black text-gray-100 ">Ordenar por fecha y hora</button>
        </div>
      </nav>

      <div className="mx-20">
        <TarjetaNotificacion />
        <TarjetaNotificacion />
        <TarjetaNotificacion />
        <TarjetaNotificacion />
        <TarjetaNotificacion />
        <TarjetaNotificacion />
        <TarjetaNotificacion />
      </div>
    </div>
  );
}
